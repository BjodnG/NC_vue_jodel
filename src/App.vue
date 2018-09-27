<template>
  <div id="app">
    <a v-if="!currentUser" class="loginLink" href="/#/login">Logg inn</a>
    <a v-if="currentUser" v-on:click="logOut" class="loginLink" >Logg ut</a>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <post message="Hello world!" />
    <postForm/>
  </div>
</template>

<script>
import firebase from 'firebase'
import postForm from './components/postForm.vue'
import post from './components/post.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'NC Jodel med Vue',
      currentUser: null
    }
  },
  methods: {
    logOut: function(){
      firebase.auth().signOut().then(() => {
        this.currentUser = firebase.auth().currentUser;
        console.log(this.currentUser);
      })
    }
  },
  mounted (){
    this.currentUser = firebase.auth().currentUser;
    console.log(this.currentUser);
  },
  components: {
    postForm,
    post,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > img {
  max-width: 35%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.loginLink {
  position: absolute;
  top: 0.2em;
  left: 0.2em;
}

</style>
