const { Component } = require('vqua')
const App = require('../components/App')
const ExampleModel = require('../models/Example')
const createArticle = require('../helpers/createArticle')

class ArticleContainer extends Component {

  static injectContext() {

    return ['humanId', 'locale']

  }

  constructor(props, context) {

    super(props, context)

    this.state = {
      examples: []
    }

  }

  afterMount() {

    const options = {
      humanId: this.context.humanId,
      locale: this.context.locale
    }

    ExampleModel.all(options).then(examples => {

      this.setState({ examples })

    })


  }

  render() {

    const articleParams =
      Object.assign({}, this.props, {
        examples: this.state.examples
      })

    const article = createArticle(articleParams)

    return (
      App.v(this.props,
        article
      )
    )

  }

}

module.exports = ArticleContainer
