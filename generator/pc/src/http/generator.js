import Urls from './urls.js'

let request = {}
Object.keys(Urls).forEach(v => {
  request[v] = Urls[v]
})

export default request