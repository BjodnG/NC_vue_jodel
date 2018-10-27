import Vue from 'vue'
import Vuex from 'vuex';
import router from './router'
import App from './App.vue'
import firebase from 'firebase'
import store from './store'

let app;
// Initialize Firebase - Denne burde være i egen fil..
let config = {
  apiKey: "AIzaSyC9rj9JzjxBBdQR9_AMPGYKPgqlKvR2hck",
  authDomain: "ncvuefirebase-f2194.firebaseapp.com",
  databaseURL: "https://ncvuefirebase-f2194.firebaseio.com",
  projectId: "ncvuefirebase-f2194",
  storageBucket: "ncvuefirebase-f2194.appspot.com",
  messagingSenderId: "611407133982"
};

Vue.use(Vuex);

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      store,
      router,
      render: h => h(App)
    })
  }
})
