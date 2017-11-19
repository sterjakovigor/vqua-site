const { route, matchRoutes, initRoutes } = require('vqua-router')

class PostsController {

  index() {}

  show() {}

  create() {}

}

const routes = [
  route('/', 'Posts#index', {}, [
    route('/posts/:id', 'Posts#show'),
    route('/posts/create', 'Posts#create'),
  ]),
]

const controllers = { PostsController: new PostsController }

const initedRoutes = initRoutes({ routes, controllers })

// console.log(initedRoutes)
//
// [ { path: '/',
//     action: [Function: index],
//     segments: [ '' ],
//     props: {},
//     index: 0,
//     controller: PostsController {} },
//   { path: '/posts/:id',
//     action: [Function: show],
//     segments: [ 'posts', ':id' ],
//     props: {},
//     index: 1,
//     controller: PostsController {} },
//   { path: '/posts/create',
//     action: [Function: create],
//     segments: [ 'posts', 'create' ],
//     props: {},
//     index: 2,
//     controller: PostsController {} } ]

const matchedRoute = matchRoutes(initedRoutes, '/posts/2')

// console.log(matchedRoute)
//
// { path: '/posts/:id',
//   action: [Function: show],
//   segments: [ 'posts', ':id' ],
//   props: {},
//   index: 1,
//   controller: PostsController {},
//   request:
//    { path: '/posts/2',
//      segments: [ 'posts', '2' ],
//      params: { id: '2' } } }
