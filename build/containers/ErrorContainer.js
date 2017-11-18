const { Component } = require('vqua')
const App = require('../components/App')
const Error404 = require('../components/Error404')

class ErrorContainer extends Component {

  render() {

    return (
      App.v(this.props,
        Error404.v(),
      )
    )

  }

}

module.exports = ErrorContainer
