<template lang="html">
  <div class="">
    <h3>Melding</h3>
    <input v-model="message" placeholder="Jodle litt...">
    <button v-on:click="sendMessage" >Send</button>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  data: function() {
    return {
      message: ""
    }
  },
  methods: {
    sendMessage: function() {
      this.writeToDatabase(this.message);
    },
    writeToDatabase: function(message) {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('posts/' + userId + '/post/').set({
        message: message,
        likes: 0
      })
    },
    readFromDatabase: function() {
      var userId = firebase.auth().currentUser.uid;
      console.log(firebase.auth().currentUser.uid);
      firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
        console.log('teeest.', snapshot);

      })
    }
  }
}
</script>

<style lang="css">
</style>
