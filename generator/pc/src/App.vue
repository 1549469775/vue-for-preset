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
</style>
