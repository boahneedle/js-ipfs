'use strict'

const multibase = require('multibase')

module.exports.encodeBase32 = (buf) => {
  const m = multibase.encode('base32', buf).slice(1)

  return m.toString().toUpperCase() // slice off multibase codec
}
