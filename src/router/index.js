import Vue from 'vue'
import VueRouter from 'vue-router'
import CountryList from '../views/CountryList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: CountryList
  },
  {
    path: '/c/:id',
    name: 'c',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/CountryItem.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
