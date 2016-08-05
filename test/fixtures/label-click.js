const click = () => console.log('clicked...')

module.exports = [
  {
    description: 'Converting labels and click functions.',
    input: ['Open File', click],
    output: { label: 'Open File', click }
  }
]
