import {
  request,
  request_
}
from "./request"
export default {
  gank: (data) => request('POST', '/today', data),
}