import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'
import Login from '../components/login'
import SignUp from '../components/signup'
import Jodel from '../containers/jodelContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jodel',
      component: Jodel
    },
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
    /*
    {
      path: '/messageForm',
      name: 'MessageForm',
      component: MessageForm,
      meta: {
        requiresAith: true
      }
    }
    */
  ]
})
