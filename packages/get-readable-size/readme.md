## get-readable-size

#### System Requirements

- [`Node.js v16`](https://github.com/nodejs/node/releases/tag/v16.0.0)
- [`NPM v8`](https://github.com/npm/cli/releases/tag/v8.0.0)

#### Installation

```sh-session
npm i @goodies/get-readable-size
yarn add @goodies/get-readable-size
```

#### Usage

```js
import getReadableSize from '@goodies/get-readable-size'

const size = await getReadableSize(3900000)

console.log(size) // 3.9 MB
```
