## get-files

#### System Requirements

- [`Node.js v16`](https://github.com/nodejs/node/releases/tag/v16.0.0)
- [`NPM v8`](https://github.com/npm/cli/releases/tag/v8.0.0)

#### Installation

```sh-session
npm i @goodies/get-files
yarn add @goodies/get-files
```

#### Usage

```js
import getFiles from '@goodies/get-files'

for await (let file of getFiles('path/to/directory')) {
  // do something
}
```
