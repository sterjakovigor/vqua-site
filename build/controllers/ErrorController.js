class ErrorController {

  static notFound(req, res) {

    res.send(404, 'ErrorContainer', {
      props: {
        path: req.url,
        segments: req.segments,
        locale: req.segments[0] || 'en',
      }
    })

  }

}

module.exports = ErrorController
