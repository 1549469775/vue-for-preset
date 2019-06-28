<template>
  <div>
    fsafsaf
  </div>
</template>

<script>
  export default {
    created() {
      this.$request.gank().then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
</script>