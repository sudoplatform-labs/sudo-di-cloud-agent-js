import * as fs from 'fs';
import { get } from 'lodash';
import { setJSONFileField } from '../src/setJSONFileField';

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
      path: './testOpenAPI.json',
      contents: Buffer.from(readFileSync('open-api/openapi.json').toString()),
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
// include the indicated JSON element and value.
function checkField(fileName: string, fieldPath: string, value: any): void {
  const testData = JSON.parse(fs.readFileSync(fileName).toString());
  const testValue = get(testData, fieldPath);

  expect(testValue).toEqual(value);
}

describe('test JSON file field modification', () => {
  it('should print error message on missing JSON file', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    setJSONFileField('foo', 'bar.path', { nodata: 'empty' });

    expect(consoleSpy.mock.calls.length).toBe(1);
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      'Missing JSON file specified "foo"',
    );
    expect(existsSpy.mock.calls.length).toBe(1);
  });

  it('should replace existing field value', () => {
    setJSONFileField('./testOpenAPI.json', 'info', {
      title: 'replace existing field',
      description: 'test description',
    });

    expect(existsSpy.mock.calls.length).toBe(1);
    expect(readFileSyncSpy.mock.calls.length).toBe(1);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    checkField('./testOpenAPI.json', 'info', {
      title: 'replace existing field',
      description: 'test description',
    });
  });

  it('should replace deeply nested existing field value', () => {
    setJSONFileField(
      './testOpenAPI.json',
      'paths./connections.get.parameters[0].name',
      'test deeply nested replace',
    );

    expect(existsSpy.mock.calls.length).toBe(1);
    expect(readFileSyncSpy.mock.calls.length).toBe(1);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    checkField(
      './testOpenAPI.json',
      'paths./connections.get.parameters[0].name',
      'test deeply nested replace',
    );
  });

  it('should insert a new field and print warning', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    setJSONFileField(
      './testOpenAPI.json',
      'paths.foo',
      'test insert new field',
    );

    expect(consoleSpy.mock.calls.length).toBe(1);
    expect(consoleSpy.mock.calls[0][0]).toEqual(
      '*** JSON file "./testOpenAPI.json" is missing target "paths.foo" creating new field',
    );

    expect(existsSpy.mock.calls.length).toBe(1);
    expect(readFileSyncSpy.mock.calls.length).toBe(1);
    expect(writeFileSyncSpy.mock.calls.length).toBe(1);
    checkField('./testOpenAPI.json', 'paths.foo', 'test insert new field');
  });
});
