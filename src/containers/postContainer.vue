<template lang="html">
  <div class="post__container">
    <post v-for="post in allPosts" :snapShot="post" />
  </div>
</template>

<script>
import firebase from 'firebase';
import post from '../components/post.vue';

export default {
  data () {
    return {
      allPosts: []
    }
  },
  methods: {
      fetchAllPostsFromDatabase() {
        firebase.database().ref('/posts/').once('value')
        .then(snapShots => {
          snapShots.forEach(snap => {
            this.allPosts.push(snap);
          })
        });
      }
  },
  mounted () {
    this.fetchAllPostsFromDatabase();
  },
  components: {
    post
  }
}
</script>

<style lang="css">
  .post__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
