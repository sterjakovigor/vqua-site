class MainController {

  static index(request, response) {

    response.redirect(302, '/en')

  }

}

module.exports = MainController
