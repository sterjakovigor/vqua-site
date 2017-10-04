class MainController {

  static index(req, res) {

    res.redirect(302, '/en')

  }

}

module.exports = MainController
