import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from 'firebase'

// Initialize Firebase - Denne burde være i egen fil..
  var config = {
    apiKey: "AIzaSyAWrjaQfVcf5nP2fl_MjswgLmltMcBx6Pw",
    authDomain: "nc-vue-jodel.firebaseapp.com",
    databaseURL: "https://nc-vue-jodel.firebaseio.com",
    projectId: "nc-vue-jodel",
    storageBucket: "nc-vue-jodel.appspot.com",
    messagingSenderId: "33121964626"
  };
  firebase.initializeApp(config);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
