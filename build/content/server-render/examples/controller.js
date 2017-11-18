class WelcomeController {

  index(req, res) {

    res.send(200, 'WelcomeContainer', { props: {}, context: {} })

  }

}

module.exports = WelcomeController
