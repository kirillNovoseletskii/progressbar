<template>
  <div id="app">
    <div class="main">
      <discription />
      <progressbar/>
      <referal/>
      <adaptiveGroup/>
      <!-- <button @click="ADD_ST">+</button> <button @click="DIS_ST">-</button> -->
    </div>
  </div>
</template>

<script>
import discription from "./components/discription";
import progressbar from "./components/progressbar";
import referal from "./components/referal";
import adaptiveGroup from "./components/adaptive-group";

import { mapActions } from "vuex";
export default {
  name: 'App',
  components: {
    discription,
    progressbar,
    referal,
    adaptiveGroup
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
  @media only screen and (max-width: 768px){
    .main{
      box-sizing: border-box;
      width: 380px;
      height: 700px;
      padding: 20px;
    }
  }
</style>

