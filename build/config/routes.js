const { route, initRoutes } = require('vqua-router')
const { Component, html } = require('vqua')
const { localeMatcher } = require('./matchers')

module.exports = [
  route('/', 'Main#index'),
  route([localeMatcher], 'Article#show', {},
    route('/:humanId', 'Article#show')
  ),
  route('*', 'Error#notFound')
]
