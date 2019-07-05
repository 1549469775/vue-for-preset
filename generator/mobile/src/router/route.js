const github__page = [{
  path: '/',
  alias: "/index",
  name: 'index',
  meta: {
    cache: false,
    auth: false
  },
  component: () => import('@views/index/index')
}]

// import llroute from "./login-route"
export default {
  mode: "hash",
  routes: [...github__page]
}