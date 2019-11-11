import {
  // request,
  request_
}
from "./request"

export default {
  getJson: (data) => request_('GET', '/auto/get/me', data),
  postJson: (data) => request_('POST', '/auto/save/me', data)
}