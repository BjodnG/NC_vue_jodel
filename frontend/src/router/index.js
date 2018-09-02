import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import Login from '../components/login'
import SignUp from '../components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    }
  ]
})
