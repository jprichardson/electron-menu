const roles = require('./roles.json')

const isSeparator = (input) => input === '-' || (Array.isArray(input) && input[0] === '-')
const isClickHandler = (fn) => typeof fn === 'function'
const isRole = (role) => roles.includes(role)

function convert (menuDesc) {
  if (!Array.isArray(menuDesc)) {
    if (isSeparator(menuDesc)) return { type: 'separator' }
    return menuDesc
  }
  if (menuDesc.length === 0) return menuDesc
  menuDesc = menuDesc.slice(0) // shallow clone array

  if (isSeparator(menuDesc[0])) return { type: 'separator' }

  // is it a menu-item or a submenu?
  if (typeof menuDesc[0] === 'string') {
    // convention dictates the first being the label
    let menuDescObj = { label: menuDesc[0] }
    menuDesc.shift() // already processed label, so get rid of it

    menuDesc.forEach(menuItem => {
      if (isClickHandler(menuItem)) return Object.assign(menuDescObj, { click: menuItem })
      if (isRole(menuItem)) return Object.assign(menuDescObj, { role: menuItem })
      // by this point, we've already checked if the string was a label or role, now it must be an accelerator
      if (typeof menuItem === 'string') return Object.assign(menuDescObj, { accelerator: menuItem })
      if (Array.isArray(menuItem)) return Object.assign(menuDescObj, { submenu: convert(menuItem) })
    })

    return menuDescObj
  } else { // assume sub-menu
    return menuDesc.map(convert)
  }
}

module.exports = convert
