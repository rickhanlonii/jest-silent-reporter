const jestUtils = require('jest-util');
const helpers = require('./helpers');
const StdIo = require('./StdIo');

class SilentReporter {
  constructor(globalConfig) {
    this._globalConfig = globalConfig;
    this.stdio = new StdIo();
  }

  onRunStart() {
    if (jestUtils.isInteractive) {
      jestUtils.clearLine(process.stderr);
    }
  }

  onRunComplete() {
    this.stdio.close();
  }

  onTestResult(test, testResult) {
    if (process.env.JEST_SILENT_REPORTER_DOTS) {
      this.stdio.logInline('.');
    }

    if (!testResult.skipped) {
      if (testResult.failureMessage) {
        this.stdio.log('\n' + testResult.failureMessage);
      }
      const didUpdate = this._globalConfig.updateSnapshot === 'all';
      const snapshotStatuses = helpers.getSnapshotStatus(
        testResult.snapshot,
        didUpdate
      );
      snapshotStatuses.forEach(this.stdio.log);
    }
  }
}

module.exports = SilentReporter;
