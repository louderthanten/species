import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "add" */ './views/AddFamily.vue')
    },
    {
      path: '/family/:family',
      name: 'family',
      component: () => import(/* webpackChunkName: "family" */ './views/Family.vue'),
      children: [
        {
          path: 'font/:font',
          name: 'font',
          component: () => import(/* webpackChunkName: "font" */ './views/Font.vue')
        }
      ]
    }
  ]
})
