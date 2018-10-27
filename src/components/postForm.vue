<template lang="html">
  <div id="postForm">
    <div class="showButton" v-if="!formVisibility">
      <svg height="75" width="75" v-on:click="showForm()">
        <circle cx="37.5" cy="37.5" r="30" stroke="white" stroke-width="3" fill="rgba(0,0,0,0.3)">
          <foreignObject x="0" y="0" width="20" height="20">
            <h1 class="toggle">+</h1>
          </foreignObject >
        </circle>
      </svg>
    </div>
    <div class="form" v-if="formVisibility">
      <div class="closeForm" v-on:click="showForm()">
        X
      </div>
      <textarea v-model="message" placeholder="Jodle litt..." />
      <button v-on:click="sendMessage" >Send</button>
    </div>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  data: function() {
    return {
      message: "",
      formVisibility: false
    }
  },
  methods: {
    showForm: function() {
      this.formVisibility = !this.formVisibility;
    },
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
        //likes: {},
        dislikesCount: 0,
        //dislikes: {}
      };

      const newPostKey = firebase.database().ref().child('posts').push().key;
      const updates = {};
      updates['/posts/' + newPostKey] = postData;
      updates['/user-posts/' + userId + '/' + newPostKey] = postData;

      firebase.database().ref().update(updates)
      .then(() => this.updateVisiblePosts('/user-posts/' + userId + '/' + newPostKey))
    },
    updateVisiblePosts(url){
      firebase.database().ref(url).once('value')
      .then(snapshot => {
        this.$store.commit('appendPostFromForm', snapshot);
        this.message = "";
      })
    }
  }
}
</script>

<style scoped lang="css">
  #postForm {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .showButton {
    padding: 1em;
  }
  .toggle {
    font-size: 4em;
    color: white;
  }

  svg {
    font-size: 4em;
    color: white;
  }

  .form {
    background-color: #8CB2F2;
    padding: 0.2em;
    text-align: right;
  }
  .closeForm {
    text-align: right;
    padding: 0.25em;
  }
  textarea{
    height: 5em;
    width: 97.5%;
    border-radius: 0.35em;
  }
  button {
    color: white;
    background-color: #32E875;
    padding: 0.5em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border: none;
    border-radius: 0.75em;
  }
</style>
