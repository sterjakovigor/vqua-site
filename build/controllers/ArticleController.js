const ArticleModel = require('../models/Article')
const ExampleModel = require('../models/Example')
const ErrorController = require('./ErrorController')
const { include } = require('berries')

class ArticleController {

  static async show(request, response) {

    const { locale } = request.params

    const humanId = request.params.humanId || 'introduction'

    const article = await ArticleModel.find({ humanId, locale })

    const rawExamples = await ExampleModel.all({ humanId, locale, raw: true })

    if (!article) ErrorController.notFound(request, response)

    response.send(200, 'ArticleContainer', {
      props: {
        article,
        rawExamples,
      },
      context: {
        locale: include(['en','ru'], locale) ? locale : 'en',
        path: request.path,
        segments: request.segments,
        humanId,
      }
    })


  }

}

module.exports = ArticleController
