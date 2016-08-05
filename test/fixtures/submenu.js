const bitcoinClick = () => {}
const litecoinClick = () => {}
const omniClick = () => {}

module.exports = [
  {
    description: 'Basic sub-menu.',
    input: ['Coins', [
      { label: 'Bitcoin', click: bitcoinClick },
      { label: 'Litecoin', click: litecoinClick }
    ]],
    output: {
      label: 'Coins',
      submenu: [
        { label: 'Bitcoin', click: bitcoinClick },
        { label: 'Litecoin', click: litecoinClick }
      ]
    }
  },
  {
    description: 'Sub-menu with electron-menu shortened versions.',
    input: ['Coins', [
      ['Bitcoin', bitcoinClick],
      ['Litecoin', litecoinClick]
    ]],
    output: {
      label: 'Coins',
      submenu: [
        { label: 'Bitcoin', click: bitcoinClick },
        { label: 'Litecoin', click: litecoinClick }
      ]
    }
  },
  {
    description: 'Sub-menu with sub-menu.',
    input: ['Coins', [
      ['Bitcoin', bitcoinClick],
      ['Litecoin', litecoinClick],
      ['Tokens', [
        ['Omni', omniClick],
        ['Counterparty', 'Cmd+H', bitcoinClick],
        '-',
        ['Example role', 'hide']
      ]]
    ]],
    output: {
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
  }
]
