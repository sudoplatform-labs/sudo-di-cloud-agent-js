import { spawnSync } from 'child_process';
import { copyFileSync } from 'fs';
import { setJSONFileField } from '../src/setJSONFileField';

const endorserTestDIDSeed = '72F663BE0D874FBF88D8D45A016E8C92';
const authorTestDIDSeed = '82F663BE0D874FBF88D8D45A016E8C92';
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
  if (process.env['TEST_CLOUD_AGENT_IMAGE']) {
    setJSONFileField(
      configTmpFile,
      'acapyImageLocation',
      process.env['TEST_CLOUD_AGENT_IMAGE'],
    );
  }
  if (process.env['TEST_TAILS_SERVER_IMAGE']) {
    setJSONFileField(
      configTmpFile,
      'tailsServerImageLocation',
      process.env['TEST_TAILS_SERVER_IMAGE'],
    );
  }
});

describe('test di-env utility for starting and stopping development environment', () => {
  afterEach(() => {
    // Bring it all down
    const diEnvDown = spawnSync(`${diEnvCmd}`, [`down`], {
      timeout: shellTimeout,
    });
  });

  it('should fail with missing config file', () => {
    const diEnvUp = spawnSync(`${diEnvCmd}`, ['up'], { timeout: shellTimeout });

    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain('Missing configuration file');
  });

  it('should fail with missing Endorser Seed', () => {
    const diEnvUp = spawnSync(`${diEnvCmd}`, ['up', '-c', `${configTmpFile}`], {
      timeout: shellTimeout,
    });

    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain('Must specify a 32 byte Endorser seed');
  });

  it('should fail with unknown long option', () => {
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      ['up', '-c', `${configTmpFile}`, '-s', `${endorserTestDIDSeed}`, '--foo'],
      { timeout: shellTimeout },
    );

    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain('Unknown long option specified --foo');
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('usage: ');
  });

  it('should fail with unknown short option', () => {
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      ['up', '-c', `${configTmpFile}`, '-s', `${endorserTestDIDSeed}`, '-z'],
      { timeout: shellTimeout },
    );

    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain('Unknown short option specified -?');
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('usage: ');
  });

  it('should fail with unknown playGround option', () => {
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      [
        'up',
        '-c',
        `${configTmpFile}`,
        '-s',
        `${endorserTestDIDSeed}`,
        '--playgroundMode=unknown',
      ],
      { timeout: shellTimeout },
    );

    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain(
      'Unknown playgroundMode value specified: unknown',
    );
  });

  it('should fail with missing Author Seed', () => {
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      [
        'up',
        '-c',
        `${configTmpFile}`,
        '-s',
        `${endorserTestDIDSeed}`,
        '--playgroundMode=author_auto_endorser_auto',
      ],
      {
        timeout: shellTimeout,
      },
    );

    const upStderr = diEnvUp.stderr.toString();
    expect(upStderr).toContain('Must specify a 32 byte Author seed');
  });

  it('should start Author and Endorser acapy, tails server and VON network successfully', () => {
    // Start up the whole local shooting match and check that ACA-py and
    // the tails-server start successfully
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      [
        'up',
        '-c',
        `${configTmpFile}`,
        '-s',
        `${endorserTestDIDSeed}`,
        '--playgroundMode=author_auto_endorser_auto',
        `--authorSeed=${authorTestDIDSeed}`,
      ],
      { timeout: shellTimeout },
    );

    // Check that the script could create DIDs on the ledger
    // and that the cloud agents came to a state that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('waiting for ledger to start');
    expect(upStdout).toContain('DeveloperEndorserDID DID was registered as');
    expect(upStdout).toContain('DeveloperUserDID DID was registered as');
    expect(upStdout).toContain('Mock Server Expectations set');
    expect(upStdout).toContain('Endorser Cloud Agent Admin interface active');
    expect(upStdout).toContain('Author Cloud Agent Admin interface active');
  });

  it('should by default, start Standalone Endorser acapy, tails server and VON network successfully', () => {
    // Start up the whole local shooting match and check that ACA-py and
    // the tails-server start successfully
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      ['up', '-c', `${configTmpFile}`, '-s', `${endorserTestDIDSeed}`],
      { timeout: shellTimeout },
    );

    // Check that the script could create a DID on the ledger
    // and that the cloud agent came to a state that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('waiting for ledger to start');
    expect(upStdout).toContain('DeveloperEndorserDID DID was registered');
    expect(upStdout).toContain('Mock Server Expectations set');
    expect(upStdout).toContain('Endorser Cloud Agent Admin interface active');
  });

  it('should start explicit standalone endorser acapy, tails server and VON network successfully', () => {
    // Start up the whole local shooting match and check that ACA-py and
    // the tails-server start successfully
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      [
        'up',
        '-c',
        `${configTmpFile}`,
        '-s',
        `${endorserTestDIDSeed}`,
        '--playgroundMode=standalone',
      ],
      { timeout: shellTimeout },
    );

    // Check that the script could create a DID on the ledger
    // and that the cloud agent came to a state that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('waiting for ledger to start');
    expect(upStdout).toContain('DeveloperEndorserDID DID was registered');
    expect(upStdout).toContain('Mock Server Expectations set');
    expect(upStdout).toContain('Endorser Cloud Agent Admin interface active');
  });

  it('should up, stop and start standalone endorser environment successfully', () => {
    // Start up the whole local shooting match and check that VON, ACA-py and
    // the tails-server start successfully
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      [
        'up',
        '-c',
        `${configTmpFile}`,
        '-s',
        `${endorserTestDIDSeed}`,
        '--playgroundMode=standalone',
      ],
      { timeout: shellTimeout },
    );

    // Check that the script could create a DID on the ledger
    // and that the cloud agent came to a state that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('waiting for ledger to start');
    expect(upStdout).toContain('DeveloperEndorserDID DID was registered');
    expect(upStdout).toContain('Mock Server Expectations set');
    expect(upStdout).toContain('Endorser Cloud Agent Admin interface active');

    // Stop the environment and make sure the expected containers stop
    const diEnvStop = spawnSync(`${diEnvCmd}`, ['stop'], {
      timeout: shellTimeout,
    });
    const stopStderr = diEnvStop.stderr.toString();
    expect(stopStderr).toMatch(/Container endorser-cloud-agent\s+Stopped/);
    expect(stopStderr).toMatch(
      /Container endorser-webhook-mockserver\s+Stopped/,
    );
    expect(stopStderr).toMatch(/Container tails-server\s+Stopped/);

    // Negative tests
    expect(stopStderr).not.toMatch(/Container author-cloud-agent\s+Stopped/);
    expect(stopStderr).not.toMatch(
      /Container author-webhook-mockserver\s+Stopped/,
    );

    // Start the environment and make sure only the expected containers restart
    const diEnvStart = spawnSync(`${diEnvCmd}`, ['start'], {
      timeout: shellTimeout,
    });
    const startStderr = diEnvStart.stderr.toString();
    expect(startStderr).toMatch(/Container endorser-cloud-agent\s+Started/);
    expect(startStderr).toMatch(
      /Container endorser-webhook-mockserver\s+Started/,
    );
    expect(startStderr).toMatch(/Container tails-server\s+Started/);

    // Negative tests
    expect(startStderr).not.toMatch(/Container author-cloud-agent\s+Started/);
    expect(startStderr).not.toMatch(
      /Container author-webhook-mockserver\s+Started/,
    );
  });

  it('should up, stop and start author/endorser environment successfully', () => {
    const diEnvUp = spawnSync(
      `${diEnvCmd}`,
      [
        'up',
        '-c',
        `${configTmpFile}`,
        '-s',
        `${endorserTestDIDSeed}`,
        '--playgroundMode=author_auto_endorser_auto',
        `--authorSeed=${authorTestDIDSeed}`,
      ],
      { timeout: shellTimeout },
    );

    // Check that the script could create DIDs on the ledger
    // and that the cloud agents came to a state that the Swagger
    // UI could be reached.
    const upStdout = diEnvUp.stdout.toString();
    expect(upStdout).toContain('waiting for ledger to start');
    expect(upStdout).toContain('DeveloperEndorserDID DID was registered as');
    expect(upStdout).toContain('DeveloperUserDID DID was registered as');
    expect(upStdout).toContain('Mock Server Expectations set');
    expect(upStdout).toContain('Endorser Cloud Agent Admin interface active');
    expect(upStdout).toContain('Author Cloud Agent Admin interface active');

    // Stop the environment and make sure the expected containers stop
    const diEnvStop = spawnSync(`${diEnvCmd}`, ['stop'], {
      timeout: shellTimeout,
    });
    const stopStderr = diEnvStop.stderr.toString();
    expect(stopStderr).toMatch(/Container endorser-cloud-agent\s+Stopped/);
    expect(stopStderr).toMatch(
      /Container endorser-webhook-mockserver\s+Stopped/,
    );
    expect(stopStderr).toMatch(/Container tails-server\s+Stopped/);
    expect(stopStderr).toMatch(/Container author-cloud-agent\s+Stopped/);
    expect(stopStderr).toMatch(/Container author-webhook-mockserver\s+Stopped/);

    // Start the environment and make sure only the expected containers restart
    const diEnvStart = spawnSync(`${diEnvCmd}`, ['start'], {
      timeout: shellTimeout,
    });
    const startStderr = diEnvStart.stderr.toString();
    expect(startStderr).toMatch(/Container endorser-cloud-agent\s+Started/);
    expect(startStderr).toMatch(
      /Container endorser-webhook-mockserver\s+Started/,
    );
    expect(startStderr).toMatch(/Container tails-server\s+Started/);
    expect(startStderr).toMatch(/Container author-cloud-agent\s+Started/);
    expect(startStderr).toMatch(
      /Container author-webhook-mockserver\s+Started/,
    );
  });
});
