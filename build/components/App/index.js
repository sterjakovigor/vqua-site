const { Component, html } = require('vqua')

const Sidebar = require('../Sidebar')
const Content = require('../Content')

class App extends Component {

  render() {
    return [
      Sidebar.v(),
      Content.v({},
        this.props.childs
      )
    ]
  }

}

module.exports = App
