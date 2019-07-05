const github__page = [{
  path: '/',
  alias: "/index",
  name: 'index',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/index/index')
}, {
  path: "/jsonview",
  name: 'jsonview',
  meta: {
    cache: true,
    auth: false
  },
  component: () => import('@views/jsonview/index')
}, {
  path: "/mescroll",
  name: 'mescroll',
  meta: {
    cache: true,
    auth: false
  },
  component: () => import('@views/mescroll/index')
}]

// import llroute from "./login-route"
export default {
  mode: "hash",
  routes: [...github__page]
}