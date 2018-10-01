import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from 'firebase'

let app;
// Initialize Firebase - Denne burde være i egen fil..
let config = {
  apiKey: "AIzaSyCXEovV8RKGeVxdLbI1jAC36Efsozap0sY",
  authDomain: "nc-vue-jodel-35b2c.firebaseapp.com",
  databaseURL: "https://nc-vue-jodel-35b2c.firebaseio.com",
  projectId: "nc-vue-jodel-35b2c",
  storageBucket: "nc-vue-jodel-35b2c.appspot.com",
  messagingSenderId: "705547911764"
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
