<template lang="html">
  <div class="post">
    <div class="message__container">
      {{ data.message }}
    </div>
    <div class='vote__buttons'>
      <button v-on:click='voteUp' class="button__up"><i class="arrow up"></i> </button>
      {{ votes }} {{ data.likesCount }}
      <button v-on:click='voteDown' class="button__down"><i class="arrow down"></i></button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'post',
  props: ['snapShot'],

  data: function() {
    return {
      votes: 0,
      data: {}
    }
  },
  methods: {
    voteUp: function() {
      const uid = firebase.auth().currentUser.uid;
      const postRef = this.snapShot.ref;

      postRef.on('value', () => {
        postRef.transaction(post => {
          if (post) {
            if (post.likes && post.likes[uid]) {
              post.likesCount--;
              post.likes[uid] = null;
            } else {
              post.likesCount++;
              if (!post.likes) {
                post.likes = {};
              }
              post.likes[uid] = true;
            }
          } else {
            console.log("Feil med post.");
          }
          return post;
        })
      })

      this.votes += 1;
    },
    voteDown: function() {
      this.votes -= 1;
    }
  },
  mounted() {
    this.data = this.snapShot.val();
  }
}
</script>

<style lang="css">
  .post {
    width: 200px;
    height: 100px;
    background: greenyellow;
    border-radius: 10px;
    padding: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    border: none;
    background: transparent;
  }

  .vote__buttons {
    display: flex;
    flex-direction: column;
    align-self: center;
  }

  .message__container {
    display: flex;
    align-self: center;
  }

  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
</style>
