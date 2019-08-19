<p align="center"><img width=""src="https://i.imgur.com/EROrJgp.png"></p>
<h1 align="center">Instagram Account Info</h1>

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
| profileImage | Boolean |

## License

MIT © [katalonne](https://github.com/katalonne)