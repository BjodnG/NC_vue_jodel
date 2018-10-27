<template>
  <div id="app">
    <a v-if="!currentUser" class="loginLink" href="/#/login">Logg inn</a>
    <a v-if="currentUser" v-on:click="logOut" class="loginLink" >Logg ut</a>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <postContainer/>
    <postForm/>
  </div>
</template>

<script>
import firebase from 'firebase'
import postForm from './components/postForm.vue'
import postContainer from './containers/postContainer.vue'

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
    postContainer,
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
  max-width: 25em;
  max-height: 50em;

  height: 100%;

  margin: auto;
}

#app > img {
  max-width: 5%;
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
