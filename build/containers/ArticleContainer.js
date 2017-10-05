const { Component } = require('vqua')
const App = require('../components/App')
const ExampleModel = require('../models/Example')
const createArticle = require('../helpers/createArticle')

const loadExamples = ({ ExampleModel, props }, callback) => {

  ExampleModel.all({
    humanId: props.humanId,
    locale: props.locale
  }).then(callback)

}

class ArticleContainer extends Component {

  constructor(props, context) {

    super(props, context)

    this.state = {
      examples: []
    }

  }

  afterMount() {

    loadExamples({ ExampleModel, props: this.props }, (examples) => {

      this.setState({ examples })

    })

  }

  afterUpdate() {

    loadExamples({ ExampleModel, props: this.props }, (examples) => {

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
