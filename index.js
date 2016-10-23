const roles = require('./roles.json')

const isSeparator = (input) => input === '-' || (Array.isArray(input) && input[0] === '-')
const isClickHandler = (fn) => typeof fn === 'function'
const isRole = (role) => roles.includes(role)

function convert (menuDesc) {
  if (!Array.isArray(menuDesc)) {
    if (isSeparator(menuDesc)) return { type: 'separator' }
    return menuDesc
  }

  if (menuDesc.length === 0) return []
  if (isSeparator(menuDesc[0])) return { type: 'separator' }
  if (typeof menuDesc[0] !== 'string') return menuDesc.map(convert) // assume sub-menu

  // convention dictates the first being the label
  return menuDesc.slice(1).reduce((result, menuItem) => {
    if (isClickHandler(menuItem)) return Object.assign(result, { click: menuItem })
    if (isRole(menuItem)) return Object.assign(result, { role: menuItem })
    if (Array.isArray(menuItem)) return Object.assign(result, { submenu: convert(menuItem) })
    if (typeof menuItem === 'object') return Object.assign(result, menuItem)
    // by this point, we've already checked if the string was a label or role, now it must be an accelerator
    if (typeof menuItem === 'string') return Object.assign(result, { accelerator: menuItem })
  }, { label: menuDesc[0] })
}

module.exports = convert
