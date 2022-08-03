import * as fs from 'fs';
import { get } from 'lodash';
import {
  OperationMapping,
  modifyAPIOperationIds,
} from '../src/modifyAPIOperationIds';

jest.mock('fs');

// We need the real fs read operation internally
const { readFileSync } = jest.requireActual('fs');

type fsEntry = {
  path: string;
  contents: Buffer;
};

let mockFSContents: fsEntry[] = [];

beforeEach(() => {
  mockFSContents = [
    {
      // Load the real open-api spec so that any real world
      // file format changes that break the modification
      // process will get caught in testing
      path: './testOpenAPI1.json',
      contents: Buffer.from(readFileSync('open-api/openapi.json').toString()),
    },
    {
      // Modification of a simple multi return method plus a
      // url paramaterized one.
      path: './testMergeFile1',
      contents: Buffer.from(`
        [
          {
            "path": "/connections",
            "method": "get",
            "operationId": "getConnections"
          },
          {
            "path": "/connections/{conn_id}",
            "method": "get",
            "operationId": "getConnection"
          }
        ]
      `),
    },
    {
      // Bad path specification plus one good one
      // to test processing continues after a failure.
      path: './testBadPathMergeFile',
      contents: Buffer.from(`
        [
          {
            "path": "/foodidle",
            "method": "get",
            "operationId": "getConnections"
          },
          {
            "path": "/connections/{conn_id}",
            "method": "get",
            "operationId": "getConnection"
          }
        ]
      `),
    },
    {
      // Test empty merge file
      path: './testEmptyMerge',
      contents: Buffer.from(`[]`),
    },
  ];
});

const mockExistsSync = jest.fn().mockImplementation((path: any): boolean => {
  return mockFSContents.findIndex((item) => item.path === path) >= 0;
});

const mockReadFileSync = jest
  .fn()
  .mockImplementation((path: any, options: any): Buffer => {
    const buffer = mockFSContents.find((item) => item.path == path)?.contents;
    return buffer ? buffer : Buffer.from('');
  });

const mockWriteFileSync = jest
  .fn()
  .mockImplementation((path: any, data: any): void => {
    const index = mockFSContents.findIndex((item) => item.path == path);
    if (index !== -1) {
      mockFSContents[index].contents = data;
    } else {
      mockFSContents.push({ path: path, contents: data });
    }
  });

const existsSpy = jest
  .spyOn(fs, 'existsSync')
  .mockImplementation(mockExistsSync);
const readFileSyncSpy = jest
  .spyOn(fs, 'readFileSync')
  .mockImplementation(mockReadFileSync);
const writeFileSyncSpy = jest
  .spyOn(fs, 'writeFileSync')
  .mockImplementation(mockWriteFileSync);

// Utility function to check that the file has been changed to
// conform with the operation id change.
// Returns true on success false otherwise
function checkOperationId(fileName: string, change: OperationMapping): boolean {
  const data = JSON.parse(fs.readFileSync(fileName).toString());
  return (
    get(data, `paths.${change.path}.${change.method}`) != undefined &&
    data.paths[change.path][change.method].operationId === change.operationId
  );
}

describe('test OpenAPI operationId modifications', () => {
  it('should print error message on missing OpenAPI file', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    modifyAPIOperationIds('foo', 'bar');

    expect(existsSpy.mock.calls.length).toBe(1);
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      'Missing OpenAPI specification file "foo"',
    );
  });

  it('should print error message on missing Merge file', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    modifyAPIOperationIds('./testOpenAPI1.json', 'bar');

    expect(existsSpy.mock.calls.length).toBe(2);
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      'Missing OperationId Merge file "bar"',
    );
  });

  it('should do nothing to openAPI spec when empty merge file', () => {
    const originalAPI = fs.readFileSync('./testOpenAPI1.json').toString();

    modifyAPIOperationIds('./testOpenAPI1.json', './testEmptyMerge');

    expect(existsSpy.mock.calls.length).toBe(2);
    expect(readFileSyncSpy.mock.calls.length).toBe(3);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    expect(fs.readFileSync('./testOpenAPI1.json').toString()).toEqual(
      originalAPI,
    );
  });

  it('should output to a NEW specification file', () => {
    const originalAPI = fs.readFileSync('./testOpenAPI1.json').toString();

    modifyAPIOperationIds(
      './testOpenAPI1.json',
      './testEmptyMerge',
      './newOpenAPI.json',
    );

    expect(existsSpy.mock.calls.length).toBe(2);
    expect(readFileSyncSpy.mock.calls.length).toBe(3);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    expect(fs.readFileSync('./newOpenAPI.json').toString()).toEqual(
      originalAPI,
    );
  });

  it('should update OpenAPISpec', () => {
    modifyAPIOperationIds('./testOpenAPI1.json', './testMergeFile1');

    expect(existsSpy.mock.calls.length).toBe(2);
    expect(readFileSyncSpy.mock.calls.length).toBe(2);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    expect(
      checkOperationId('./testOpenAPI1.json', {
        path: '/connections',
        method: 'get',
        operationId: 'getConnections',
      }),
    ).toBe(true);
    expect(
      checkOperationId('./testOpenAPI1.json', {
        path: '/connections/{conn_id}',
        method: 'get',
        operationId: 'getConnection',
      }),
    ).toBe(true);
  });

  it('should warn and fail to update missing path', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    modifyAPIOperationIds('./testOpenAPI1.json', './testBadPathMergeFile');

    expect(consoleSpy.mock.calls[0][0]).toContain(
      '*** Specification file missing target for change request',
    );
    expect(existsSpy.mock.calls.length).toBe(2);
    expect(readFileSyncSpy.mock.calls.length).toBe(2);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    expect(
      checkOperationId('./testOpenAPI1.json', {
        path: '/foodidle',
        method: 'get',
        operationId: 'getConnections',
      }),
    ).toBe(false);
    expect(
      checkOperationId('./testOpenAPI1.json', {
        path: '/connections/{conn_id}',
        method: 'get',
        operationId: 'getConnection',
      }),
    ).toBe(true);
  });
});
