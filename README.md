<h1 align="center">
  <img src="https://user-images.githubusercontent.com/2440089/188526466-f9934af0-bd67-4d03-ad84-8ff0a41761e8.png" height="150"/>
  <p>Jest Silent Reporter</p>
</h1>
<p align="center">
  Custom <a href="https://jestjs.io/docs/en/configuration#reporters-array-modulename-modulename-options">reporter</a>
  for <a href="https://jestjs.io">Jest</a> that only prints failed tests.</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/2440089/188526149-afb2600a-ddb3-49ec-83e8-dfdc2fb975d2.png" height="200"/>
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

![Screenshot: all tests passed](https://user-images.githubusercontent.com/2440089/188526258-3d352067-d0c4-4999-9e22-5613981c8887.png)

#### Tests failed

![Screenshot: some tests failed](https://user-images.githubusercontent.com/2440089/188526185-4b3e217c-0228-4e3d-930a-5e508e4770b3.png)

## Licence

MIT
