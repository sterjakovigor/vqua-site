class ErrorController {

  static notFound(request, response) {

    response.send(404, 'ErrorContainer', {
      context: {
        path: request.path,
        segments: request.segments,
        locale: request.segments[0] || 'en',
      }
    })

  }

}

module.exports = ErrorController
