const click = () => console.log('clicked...')

module.exports = [
  {
    description: 'Label, click, and accelerator',
    input: ['Open File', click, 'Command+H'],
    output: { label: 'Open File', click, accelerator: 'Command+H' }
  },
  {
    description: 'Label, role, and accelerator',
    input: ['Hide', 'hide', 'Command+H'],
    output: { label: 'Hide', role: 'hide', accelerator: 'Command+H' }
  },
  {
    description: 'Label, accelerator, and click',
    input: ['Hide', 'Command+H', click],
    output: { label: 'Hide', click, accelerator: 'Command+H' }
  },
  {
    description: 'Label, accelerator, and role',
    input: ['Hide', 'Command+H', 'hide'],
    output: { label: 'Hide', role: 'hide', accelerator: 'Command+H' }
  }
]
