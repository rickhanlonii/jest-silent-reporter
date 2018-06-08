<h1 align="center">
  <img src="http://dp.hanlon.io/0u2T0M3Z3i0g/shhh.png" height="150" width="300"/>
  <p>Jest Silent Reporter</p>
</h1>
<p align="center">Jest customer reporter that only prints failed tests.</p>
<p align="center">
  <img src="http://dp.hanlon.io/0O2p312H2C3B/Image%202018-06-07%20at%208.26.20%20PM.png" height="200"/>
</p>

## Installation

Using npm:

```bash
$ npm i -D jest-silent-reporter
```

Using yarn:

```bash
$ yarn add -D jest-silent-reporter
```

## Usage

Jest CLI:

```bash
jest --reporters jest-silent-reporter
```

Jest Config:

```json
{
  "reporters": ["jest-silent-reporter"]
}
```

## Screens

#### All tests passed

![](http://dp.hanlon.io/0O2p312H2C3B/Image%202018-06-07%20at%208.26.20%20PM.png)

#### Tests failed

![](http://dp.hanlon.io/110J3c2s0Y0v/Image%202018-06-07%20at%208.29.22%20PM.png)

## Licence

MIT
