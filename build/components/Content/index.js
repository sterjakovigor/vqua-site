const { Component, html } = require('vqua')

class Content extends Component {

  static injectContext() {

    return ['navigate']

  }

  constructor(props, context) {

    super(props, context)

    this.content = null

    this.handleLinkClick = this.handleLinkClick.bind(this)

  }

  afterMount() {

    this.content = document.querySelector('.content')

    this.content.addEventListener('click', this.handleLinkClick)

  }

  beforeUnmount() {

    this.content.removeEventListener('click', this.handleLinkClick)

  }

  handleLinkClick(event) {

    const { navigate } = this.context

    if (
      event.target.tagName.toLowerCase() === 'a' &&
      event.target.classList.contains('navigate_link')
    ) {

      event.preventDefault()

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0

      history.pushState({}, '', event.target.pathname)

      navigate(event.target.pathname)

    }


  }

  render() {

    const { div, h1 } = html

    return (
      div({ class: 'content' },
        this.props.childs
      )
    )
  }

}

module.exports = Content
