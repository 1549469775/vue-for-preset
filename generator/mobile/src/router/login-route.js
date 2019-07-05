const global__page = [{
  path: '/login',
  name: 'login',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/demo/login')
}, {
  path: '/fastLogin',
  name: 'fastLogin',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/demo/fastLogin')
}, {
  path: '/register',
  name: 'register',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/demo/register')
}, {
  path: '/forgetpw',
  name: 'forgetpw',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/demo/forgetpw')
}]

const home__page = [{
  path: '/',
  alias: '/home',
  name: 'home',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/demo/home'),
  children: [

  ]
}]

export default [...global__page, ...home__page]