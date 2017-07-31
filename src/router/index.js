import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Briefing from '../components/Briefing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/briefing',
      name: 'Briefing',
      component: Briefing
    }
  ]
})
