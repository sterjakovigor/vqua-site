class MainController {

  index(request, response) {

    response.redirect(302, '/en')

  }

}

module.exports = MainController
