const click = () => console.log('clicked...')

module.exports = [
  {
    description: 'Invisible item.',
    input: ['Show', click, { visible: false }],
    output: { label: 'Show', visible: false, click }
  }
]
