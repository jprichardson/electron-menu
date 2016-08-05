electron-menu
==============

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/electron-menu.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/electron-menu
[travis-image]: https://img.shields.io/travis/jprichardson/electron-menu.svg?style=flat-square
[travis-url]: https://travis-ci.org/jprichardson/electron-menu
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Convenience module to build Electron menus templates.

Install
-------

    npm install --save electron-menu


Usage
-----

converts this:

```js
const em = require('electron-menu')

const menu = ['Coins', [
  ['Bitcoin', bitcoinClick],
  ['Litecoin', litecoinClick],
  ['Tokens', [
    ['Omni', omniClick],
    ['Counterparty', 'Cmd+H', bitcoinClick],
    '-',
    ['Example role', 'hide']
  ]]
]]
```

to

```js
{
  label: 'Coins',
  submenu: [
    { label: 'Bitcoin', click: bitcoinClick },
    { label: 'Litecoin', click: litecoinClick },
    { label: 'Tokens', submenu: [
      { label: 'Omni', click: omniClick },
      { label: 'Counterparty', accelerator: 'Cmd+H', click: bitcoinClick },
      { type: 'separator' },
      { label: 'Example role', role: 'hide' }
    ]}
  ]
}
```



License
--------

Copyright [JP Richardson](https://github.com/jprichardson)

[MIT](LICENSE.md)
