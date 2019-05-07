const jestUtils = require('jest-util');
const helpers = require('./helpers');
const StdIo = require('./StdIo');

class SilentReporter {
  constructor(globalConfig, options = {}) {
    this._globalConfig = globalConfig;
    this.stdio = new StdIo();
    this.useDots = !!process.env.JEST_SILENT_REPORTER_DOTS || !!options.useDots;
    this.showPaths = !!process.env.JEST_SILENT_REPORTER_SHOW_PATHS || !!options.showPaths;
  }

  onRunStart() {
    if (jestUtils.isInteractive) {
      jestUtils.clearLine(process.stderr);
    }
  }

  onRunComplete() {
    if (this.useDots) {
      this.stdio.log('\n');
    }
    this.stdio.close();
  }

  onTestResult(test, testResult) {
    if (this.useDots) {
      this.stdio.logInline('.');
    }

    if (!testResult.skipped) {
      if (testResult.failureMessage) {
        if (this.showPaths) this.stdio.log('\n' + test.path);
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
