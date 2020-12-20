import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Clipboard from 'v-clipboard'

Vue.config.productionTip = false
Vue.use(Clipboard)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
