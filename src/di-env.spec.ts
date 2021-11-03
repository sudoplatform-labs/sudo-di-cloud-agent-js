import { spawnSync } from 'child_process';

const testDIDSeed = '72F663BE0D874FBF88D8D45A016E8C92';
const shellTimeout = 80000; // 80 Secs
const testTimeout = 120000; // 120 Secs
const diEnvCmd = 'src/clientTools/di-env.sh';
const acapyConfigFile = 'acapy.json';

jest.setTimeout(testTimeout);

// At the moment we only do a smoke test on the di-env utility to
// make sure that at a minimum the environment can spin up in a
// completely local mode with VON Ledger.
//
// Future tests may add checks on using public ledgers. This requires persistent DIDs
// being created on public ledgers.
describe('test di-env utility for starting and stopping development environment', () => {
  it('should start acapy, tails server and VON network successfully', () => {
    // Start up the whole local shooting match and check that ACA-py and
    // the tails-server start successfully
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      ['up', '-c', `${acapyConfigFile}`, '-s', `${testDIDSeed}`],
      { timeout: shellTimeout },
    );

    // Check that the docker images for VON, tails-server and
    // cloud-agent were started successfully.
    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain('Creating von_webserver_1 ... done');
    expect(upStderr).toContain('Starting tails-server ... done');
    expect(upStderr).toContain('Starting cloud-agent  ... done');

    // Check that the script could create a DID on the ledger
    // and that the cloud agent came to a starte that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('Endorser DID was registered');
    expect(upStdout).toContain('Cloud Agent Admin interface active');

    // Bring it all back down
    const diEnvDown = spawnSync(`${diEnvCmd}`, [`down`], {
      timeout: shellTimeout,
    });
    const downStderr = diEnvDown.stderr.toString();
    expect(downStderr).toContain('Removing tails-server ... done');
    expect(downStderr).toContain('Removing cloud-agent  ... done');
    expect(downStderr).toContain('Removing von_webserver_1 ... done');
  });
});
