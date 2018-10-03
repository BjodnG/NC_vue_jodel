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
      const userId = firebase.auth().currentUser.uid;
      const email = firebase.auth().currentUser.email;

      const postData = {
        author: email,
        message: message,
        likesCount: 0,
        likes: {},
        dislikesCount: 0,
        dislikes: {}
      };

      const newPostKey = firebase.database().ref().child('posts').push().key;
      const updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + userId + '/' + newPostKey] = postData;

      firebase.database().ref().update(updates);
    }
  }
}
</script>

<style lang="css">
</style>
