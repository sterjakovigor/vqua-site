const createNavigationLinks = (navigate) => {

  const links = [ ...document.querySelectorAll('.content a.navigate_link') ]

  document.querySelector('.content').addEventListener('click', function(event) {

    if (event.target.tagName.toLowerCase() === 'a') {

      event.preventDefault()

      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0

      navigate(event.target.pathname)

    }

  })

}

module.exports = createNavigationLinks
