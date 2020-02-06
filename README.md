<h1 align="center">
  <img src="http://dp.hanlon.io/0u2T0M3Z3i0g/shhh.png" height="150" width="300"/>
  <p>Jest Silent Reporter</p>
</h1>
<p align="center">
  Custom <a href="https://jestjs.io/docs/en/configuration#reporters-array-modulename-modulename-options">reporter</a>
  for <a href="https://jestjs.io">Jest</a> that only prints failed tests.</p>
<p align="center">
  <img src="http://dp.hanlon.io/0O2p312H2C3B/Image%202018-06-07%20at%208.26.20%20PM.png" height="200"/>
</p>

## Installation

Using [npm](https://www.npmjs.com/):

```sh
$ npm i --save-dev jest-silent-reporter
```

Using [yarn](https://yarnpkg.com/):

```sh
$ yarn add --dev jest-silent-reporter
```

## Usage

Jest CLI:

```bash
jest --reporters=jest-silent-reporter
```

Jest config:

```json
{
  "reporters": ["jest-silent-reporter"]
}
```

## Options

### useDots: boolean

For large test suites, `jest-silent-reporter` can cause CI to fail due to having
no output for some configured amount of time. Using the `useDots` option will
output dots for each test file, similar to a dot reporter.

```json
{
  "reporters": [["jest-silent-reporter", { "useDots": true }]]
}
```

Note: this config is also available as an environment variable `JEST_SILENT_REPORTER_DOTS=true`.

### showWarnings: boolean

Warnings are supressed by default, use `showWarnings` to log them.

```json
{
  "reporters": [["jest-silent-reporter", { "showWarnings": true }]]
}
```

Note: this config is also available as an environment variable `JEST_SILENT_REPORTER_SHOW_WARNINGS=true`.


### showPaths: boolean

Sometimes it might come in handy to display the test suites' paths (i.e. when
running tests in a terminal inside IDE for quicker file navigation).

```json
{
  "reporters": [["jest-silent-reporter", { "showPaths": true }]]
}
```

Note: this config is also available as  an environment variable `JEST_SILENT_REPORTER_SHOW_PATHS=true`.

## Screenshots

#### All tests passed

![Screenshot: all tests passed](http://dp.hanlon.io/0O2p312H2C3B/Image%202018-06-07%20at%208.26.20%20PM.png)

#### Tests failed

![Screenshot: some tests failed](http://dp.hanlon.io/110J3c2s0Y0v/Image%202018-06-07%20at%208.29.22%20PM.png)

## Licence

MIT
