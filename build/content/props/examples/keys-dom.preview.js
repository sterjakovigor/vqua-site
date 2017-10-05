const { Component, html } = require('vqua')

// cut before

class Toggler extends Component {

  constructor(props, context) {

    super(props, context)

    this.state = {
      active: true
    }

  }

  handleClick(event) {

    event.preventDefault()

    this.setState({ active: !this.state.active })

  }

  render() {

    const { div, a, br } = html

    const first = (
      div({ key: 1 },
        div({},
          'first'
        )
      )
    )

    const second = (
      div({ key: 2 },
        'second'
      )
    )

    const toggle = [
      a({ href: '#toggle', onClick: (e) => this.handleClick(e) },
        'Toggle!'
      ),
      br(),
    ]

    const combination = this.state.active
      ? [ toggle, second, first ]
      : [ toggle, first, second ]

    return combination

  }

}

// cut after

module.exports = Toggler
