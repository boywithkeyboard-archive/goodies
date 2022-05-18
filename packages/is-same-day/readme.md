## is-same-day

#### System Requirements

- [`Node.js v16`](https://github.com/nodejs/node/releases/tag/v16.0.0)
- [`NPM v8`](https://github.com/npm/cli/releases/tag/v8.0.0)

#### Installation

```sh-session
npm i @goodies/is-same-day
yarn add @goodies/is-same-day
```

#### Usage

```js
import isSameDay from '@goodies/is-same-day'

const today = new Date()
const yesterday = new Date()

yesterday.setDate(today.getDate() - 1)

console.log(await isSameDay(today, today)) // true
console.log(await isSameDay(today, yesterday)) // false
```
