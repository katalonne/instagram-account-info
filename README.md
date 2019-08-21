<p align="center"><img width=""src="https://i.imgur.com/EROrJgp.png"></p>
<h1 align="center">Instagram Account Info</h1>

[![Build Status](https://travis-ci.org/katalonne/instagram-account-info.svg?branch=master)](https://travis-ci.org/katalonne/instagram-account-info)
[![codebeat badge](https://codebeat.co/badges/299f68a9-8267-4f8d-a3e8-9abc5910f582)](https://codebeat.co/projects/github-com-katalonne-instagram-account-info-master)
[![GitHub open issues](https://img.shields.io/github/issues/katalonne/instagram-account-info.svg)](https://github.com/katalonne/instagram-account-info/issues?q=is%3Aopen+is%3Aissue)
[![npm version](https://img.shields.io/npm/v/instagram-account-info.svg)](https://www.npmjs.com/package/instagram-account-info)
[![MIT License](https://img.shields.io/github/license/katalonne/instagram-account-info.svg)](https://github.com/katalonne/instagram-account-info/blob/master/LICENSE)

Promise based module for getting any Instagram account public info.
For browser and node.js

## Installation
```bash
yarn add instagram-account-info

npm install --save instagram-account-info
```
## Usage

```javascript
import getInfo from 'instagram-account-info';

/**
 * @param {String} Instagram Username
 */
getInfo('katalonne').then(info => {
  console.log(info)
}).catch(e => {
  console.error(e)
})
```

## Resolved info Object

| Key          | Type    |
|--------------|---------|
| followers    | Number  |
| following    | Number  |
| posts        | Number  |
| isPrivate    | Boolean |
| isVerified   | Boolean |
| profileImage | String  |

## License

MIT © [katalonne](https://github.com/katalonne)