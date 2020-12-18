<template>
  <div id="app">
    <div class="main">
      <discription />
    </div>
  </div>
</template>

<script>
import discription from "./components/discription";
export default {
  name: 'App',
  components: {
    discription
  }
}
</script>
<style lang="scss" scoped>
  body, html, .app{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .main{
    width: 100%;
    height: 100%;
    padding: 100px;
  }
</style>

