import { spawnSync } from 'child_process';
import { copyFileSync } from 'fs';
import { setJSONFileField } from '../src/setJSONFileField';

const testDIDSeed = '72F663BE0D874FBF88D8D45A016E8C92';
const shellTimeout = 200000;
const testTimeout = 240000;
const diEnvCmd = 'src/clientTools/di-env.sh';
const acapyConfigFile = 'src/clientTools/acapy.json';
const configTmpFile = '/tmp/acapy.json';

jest.setTimeout(testTimeout);

beforeAll(() => {
  // Load the acapy.json config and write out a new one that indicates a different
  // tag if CLOUD_AGENT_TAG is set
  copyFileSync(acapyConfigFile, configTmpFile);
  if (process.env['CLOUD_AGENT_IMAGE']) {
    setJSONFileField(
      configTmpFile,
      'acapyImageLocation',
      process.env['CLOUD_AGENT_IMAGE'],
    );
  }
  if (process.env['TAILS_SERVER_IMAGE']) {
    setJSONFileField(
      configTmpFile,
      'tailsServerImageLocation',
      process.env['TAILS_SERVER_IMAGE'],
    );
  }
});

// At the moment we only do a smoke test on the di-env utility to
// make sure that at a minimum the environment can spin up in a
// completely local mode with VON Ledger.
//
// Future tests may add checks on using public ledgers. This requires persistent DIDs
// being created on public ledgers.
describe('test di-env utility for starting and stopping development environment', () => {
  afterAll(() => {
    // Bring it all down
    const diEnvDown = spawnSync(`${diEnvCmd}`, [`down`], {
      timeout: shellTimeout,
    });
  });

  it('should start acapy, tails server and VON network successfully', () => {
    // Start up the whole local shooting match and check that ACA-py and
    // the tails-server start successfully
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      ['up', '-c', `${configTmpFile}`, '-s', `${testDIDSeed}`],
      { timeout: shellTimeout },
    );

    // Check that the script could create a DID on the ledger
    // and that the cloud agent came to a state that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('waiting for ledger to start');
    expect(upStdout).toContain('Endorser DID was registered');
    expect(upStdout).toContain('Cloud Agent Admin interface active');
  });
});
