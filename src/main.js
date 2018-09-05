import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from 'firebase'

let app;
// Initialize Firebase - Denne burde være i egen fil..
let config = {
  apiKey: "AIzaSyAWrjaQfVcf5nP2fl_MjswgLmltMcBx6Pw",
  authDomain: "nc-vue-jodel.firebaseapp.com",
  databaseURL: "https://nc-vue-jodel.firebaseio.com",
  projectId: "nc-vue-jodel",
  storageBucket: "nc-vue-jodel.appspot.com",
  messagingSenderId: "33121964626"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})
