'use strict'

const copy = require('nibbler-copy')
const apt = require('nibbler-apt')

const NGINX_HTML_DIR = '/var/www/html'

module.exports = function (source, context, cb) {
  apt({
    pkg: 'nginx',
    state: 'present'
  }, context, function (err) {
    if (err) return cb(err)

    copy({
      src: source,
      dest: NGINX_HTML_DIR
    }, context, cb)
  })
}
