import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '../pages/InTheaters.vue'
import subject from '../pages/Subject.vue'
import celebrity from '../pages/Celebrity.vue'
import searchResult from '../pages/SearchResult.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'inTheaters',
    component: inTheaters
  }, {
    path: '/subject/:id',
    name: 'subject',
    component: subject
  }, {
    path: '/celebrity/:id',
    name: 'celebrity',
    component: celebrity
  }, {
    path: '/search*',
    name: 'searchResult',
    component: searchResult
  }]
})
