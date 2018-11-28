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
      <textarea v-model="message" placeholder="Jodle litt..." />
      <div class="buttons">
        <button v-on:click="showForm()" >Avbryt</button>
        <button v-on:click="sendMessage" >Send</button>
      </div>
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
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        this.$router.push('login');
      } else {
        this.writeToDatabase(this.message);
      }
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    padding: 1em;
    text-align: right;
  }
  .closeForm {
    display: flex;
    align-self: flex-end;
    text-align: right;
    padding-right: 0.5em;
    font-size: 40px;
    color: white;
    font-weight: bold;
    margin-top: -2em;
    position: absolute;
  }
  textarea{
    height: 7em;
    width: 40em;
    border-radius: 0.35em;
    padding: 1em;
    font-size: 16px;
  }
  .buttons {
    width: 40em;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    width: 12em;
    height: 3em;
    border: none;
    border-radius: 5px;
    margin-top: 1em;
    font-size: 18px;
  }
  button:first-child {
    background-color: lightgray;
    color: black;
  }
  button:last-child {
    background-color: #028193;
    color: white;
  }

  @media screen and (max-width: 866px) {
    textarea, .buttons {
      width: 85%;
    }
    .closeForm {
      padding-right: 0.1em;
      margin-top: -2.3em;
    }
  }

  @media screen and (max-width: 738px) {
    button {
      min-width: 20%;
    }
    button:first-child {
      margin-right: 1em;
    }
  }
</style>
