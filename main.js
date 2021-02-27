import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import axios from 'axios'

Vue.use(axios)
Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

