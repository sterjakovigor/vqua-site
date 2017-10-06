const createNavigationLinks = (navigate) => {

  document.querySelector('.content').addEventListener('click', function(event) {

    if (
      event.target.tagName.toLowerCase() === 'a' &&
      event.target.classList.contains('navigate_link')
    ) {

      event.preventDefault()

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0

      navigate(event.target.pathname)

    }

  })

}

module.exports = createNavigationLinks
