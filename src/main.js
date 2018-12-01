import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
import store from './store'
import {Button} from 'mint-ui'

import './mock/mockServer'

Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
