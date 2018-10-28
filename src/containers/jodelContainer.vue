<template lang="html">
  <div id="jodel">
    <a v-if="!currentUser" class="loginLink" href="/#/login">Logg inn</a>
    <a v-if="currentUser" v-on:click="logOut" class="loginLink" >Logg ut</a>
    <postContainer />
    <postForm />
  </div>
</template>

<script>
import firebase from 'firebase'
import postForm from '../components/postForm.vue'
import postContainer from './postContainer.vue'

export default {
  data: function() {
    return {
      message: "",
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
  },
  components: {
    postForm,
    postContainer,
  }
}
</script>

<style scoped lang="css">

</style>
