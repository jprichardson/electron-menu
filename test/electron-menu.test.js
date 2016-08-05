const test = require('tape')
const fs = require('fs')
const { join } = require('path')
const em = require('..')

let fixtures = []
fs.readdirSync(join(__dirname, './fixtures')).forEach(fixture => { fixtures = fixtures.concat(require('./fixtures/' + fixture)) })

fixtures.forEach(f => {
  test(f.description, t => {
    t.plan(1)

    const actual = em(f.input)
    const expected = f.output

    t.deepEquals(actual, expected)

    t.end()
  })
})
