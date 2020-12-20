<template>
  <div id="app">
    <div class="main">
      <discription />
      <progressbar/>
      <!-- <button @click="ADD_ST">+</button> <button @click="DIS_ST">-</button> -->
    </div>
  </div>
</template>

<script>
import discription from "./components/discription";
import progressbar from "./components/progressbar";

import { mapActions } from "vuex";
export default {
  name: 'App',
  components: {
    discription,
    progressbar
  },
  methods: {
    ...mapActions(["ADD_ST", "DIS_ST"])
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
    box-sizing: border-box;
    width: 800px;
    height: 555px;
    padding: 100px;
  }
</style>

