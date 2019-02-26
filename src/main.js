// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import VueJsonp from 'vue-jsonp'
import "./scss/main.scss"


sync(store, router)

Vue.use(VueJsonp)
// If you want to setup the global timeout, just:
Vue.use(VueJsonp, 5000)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
