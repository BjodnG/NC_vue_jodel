<template lang="html">
  <div class="post">
    <div class="message__container">
      {{ data.message }}
    </div>
    <div class='vote__buttons'>
      <button v-on:click='voteUp' class="button__up"><i class="arrow up"></i> </button>
        {{ data.likesCount - data.dislikesCount }}
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
      postRef.on('value', () => {console.log('onValue');})
      postRef.transaction(post => {
        if (post) {
          if (post.likes && post.likes[uid]) {
            post.likesCount--;
            post.likes[uid] = null;
            //console.log('Allerede gitt like');
          } else {
            if (post.dislikes && post.dislikes[uid]) {
              post.dislikesCount--;
              post.dislikes[uid] = null;
            }
            post.likesCount++;
            if (!post.likes) {
              post.likes = {};
            }
            post.likes[uid] = true;
          }
          console.log('Like fullført');
        } else {
          console.log("Feil med post.");
        }
        return post;
      }).then(post => this.data = post.snapshot.val())
    },
    voteDown: function() {
      const uid = firebase.auth().currentUser.uid;
      const postRef = this.snapShot.ref;
      postRef.on('value', () => {console.log('onValue');})
      postRef.transaction(post => {
        if (post) {
          if (post.dislikes && post.dislikes[uid]) {
            post.dislikesCount--;
            post.dislikes[uid] = null;
            //console.log('Allerede gitt data-bind="disable: "like');
          } else {

            if (post.likes && post.likes[uid]) {
              post.likesCount--;
              post.likes[uid] = null;
            }

            post.dislikesCount++;
            if (!post.dislikes) {
              post.dislikes = {};
            }
            post.dislikes[uid] = true;
          }
          console.log('Like fullført');
        } else {
          console.log("Feil med post.");
        }
        return post;
      }).then(post => this.data = post.snapshot.val())
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
