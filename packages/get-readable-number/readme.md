## get-readable-number

#### System Requirements

- [`Node.js v16`](https://github.com/nodejs/node/releases/tag/v16.0.0)
- [`NPM v8`](https://github.com/npm/cli/releases/tag/v8.0.0)

#### Installation

```sh-session
npm i @goodies/get-readable-number
yarn add @goodies/get-readable-number
```

#### Usage

```js
import getReadableNumber from '@goodies/get-readable-number'

const number = await getReadableNumber(3900000)

console.log(number) // 3.9 M
```
