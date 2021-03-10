const jestUtils = require('jest-util');
const helpers = require('./helpers');
const StdIo = require('./StdIo');

class SilentReporter {
  constructor(globalConfig, options = {}) {
    this._globalConfig = globalConfig;
    this.stdio = new StdIo();
    this.useDots = !!process.env.JEST_SILENT_REPORTER_DOTS || !!options.useDots;
    this.showPaths =
      !!process.env.JEST_SILENT_REPORTER_SHOW_PATHS || !!options.showPaths;
    this.showWarnings =
      !!process.env.JEST_SILENT_REPORTER_SHOW_WARNINGS ||
      !!options.showWarnings;
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
      const didUpdate = this._globalConfig.updateSnapshot === 'all';
      let hasSnapshotFailures = false;
      if (testResult.snapshot) {
        if (!didUpdate && testResult.snapshot.unchecked) {
          hasSnapshotFailures = true;
        }
        if (testResult.snapshot.unmatched) {
          hasSnapshotFailures = true;
        }
      }

      const hasFailures = testResult.failureMessage || hasSnapshotFailures;

      if (this.showPaths && hasFailures) {
        this.stdio.log('\n' + test.path);
      }
      if (testResult.failureMessage)
        this.stdio.log('\n' + testResult.failureMessage);
      if (testResult.console && this.showWarnings) {
        testResult.console
          .filter(entry => ['error', 'warn'].includes(entry.type) && entry.message)
          .map(entry => entry.message)
          .forEach(this.stdio.log);
      }
      const snapshotStatuses = helpers.getSnapshotStatus(
        testResult.snapshot,
        didUpdate
      );
      snapshotStatuses.forEach(this.stdio.log);
    }
  }
}

module.exports = SilentReporter;
