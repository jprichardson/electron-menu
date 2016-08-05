const isSeparator = (input) => input === '-' || (Array.isArray(input) && input[0] === '-')
const isClickHandler = (fn) => typeof fn === 'function'
const isRole = (role) => [
  'undo', 'redo', 'cut', 'copy', 'paste', 'pasteandmatchstyle', 'selectall', 'delete',
  'minimize', 'close', 'quit', 'togglefullscreen', 'about', 'hide', 'hideothers',
  'unhide', 'front', 'zoom', 'window', 'help', 'services'
].includes(role)

function convert (menuDesc) {
  if (!Array.isArray(menuDesc)) {
    if (isSeparator(menuDesc)) return { type: 'separator' }
    return menuDesc
  }
  if (menuDesc.length === 0) return menuDesc
  menuDesc = menuDesc.slice(0) // shallow clone array

  if (isSeparator(menuDesc[0])) return { type: 'separator' }

  // convention dictates the first being the label
  let menuDescObj = { label: menuDesc[0] }
  menuDesc.shift() // already processed label, so get rid of it

  menuDesc.forEach(menuItem => {
    if (isClickHandler(menuItem)) return Object.assign(menuDescObj, { click: menuItem })
    if (isRole(menuItem)) return Object.assign(menuDescObj, { role: menuItem })
    // by this point, we've already checked if the string was a label or role, now it must be an accelerator
    if (typeof menuItem === 'string') return Object.assign(menuDescObj, { accelerator: menuItem })
  })

  return menuDescObj
}

module.exports = convert
