const { route, initRoutes } = require('vqua-router')
const { Component, html } = require('vqua')
const MainController = require('../controllers/MainController')
const ArticleController = require('../controllers/ArticleController')
const ErrorController = require('../controllers/ErrorController')
const { localeMatcher } = require('./matchers')

const routes = [
  route('/', 'Main#index'),
  route([localeMatcher], 'Article#show', {},
    route('/:humanId', 'Article#show')
  ),
  route('*', 'Error#notFound')
]

const controllers = {
  MainController,
  ArticleController,
  ErrorController,
}

module.exports = initRoutes({ routes, controllers })
