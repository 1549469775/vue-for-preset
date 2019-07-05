<template>
  <div id="app">
    <transition :name="animtion">
      <keep-alive :include="cachePage">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    computed: {
      animtion() {
        return this.$store.state.page.states
      },
      key() {
        return this.$route.fullPath
      },
      cachePage() {
        return this.$store.state.page.cachePage
      },
    },
    methods: {
      // 右滑返回
      onSwipeRight() {
        // this.$router.go(-1)
      }
    }
  }
</script>
<style>
  html,
  body {
    height: 100%;
    width: 100%;
    border: hidden;
    overflow: hidden;
  }
  div#app {
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: hidden;
  }
  /* 页面切换的滑动效果 */
  .turn-on-enter {
    transform: translate3d(100%, 0, 0);
  }
  .turn-on-leave-to {
    transform: translate3d(-20%, 0, 0);
  }
  .turn-on-enter-active,
  .turn-on-leave-active {
    transition: transform 0.4s ease;
  }
  .turn-off-enter {
    transform: translate3d(-20%, 0, 0);
  }
  .turn-off-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .turn-off-enter-active,
  .turn-off-leave-active {
    transition: transform 0.4s ease;
  }
  .turn-off-leave-active {
    z-index: 2;
  }
</style>
