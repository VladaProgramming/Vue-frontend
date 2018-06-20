import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Users from '@/components/Users'
import UserDetails from '@/components/UserDetails'
import Home from '@/components/Home'
import Add from '@/components/Add'


Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userdetails/:id',
      name: 'UserDetails',
      component: UserDetails,
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    }
  ]
})
