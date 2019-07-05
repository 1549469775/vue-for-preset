function TimeCount() {
  let timeID = -1;
  return function (time, func) {
    timeID = setInterval(() => {
      func && func(time)
      if (time <= 0) {
        clearInterval(timeID)
        timeID = -1;
        return;
      }
      time--;
    }, 1000);
  }
}
TimeCount()(10, function (time) {
  console.log(time);
})
export default {
  timecount: TimeCount(),
  IsPC
}

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}