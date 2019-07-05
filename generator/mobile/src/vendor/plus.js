import Vue from 'vue';

Vue.nextTick(() => {
  document.addEventListener('plusready', function () {
    console.log('plusready');
    var first = null;
    // eslint-disable-next-line no-undef
    var webview = plus.webview.currentWebview();
    // eslint-disable-next-line no-undef
    plus.key.addEventListener('backbutton', function () {
      webview.canBack(function (e) {
        if (e.canBack) {
          webview.back();
        } else {
          // webview.close();
          if (!first) {
            first = new Date().getTime();
            // eslint-disable-next-line no-undef
            plus.nativeUI.toast("再按一次退出程序");
            setTimeout(function () {
              first = null;
            }, 1000);
          } else {
            console.log(1);
            if (new Date().getTime() - first < 1000) {
              // eslint-disable-next-line no-undef
              plus.runtime.quit();
            }
          }
        }
      })
    });
  });
})