<template lang="html">
  <div class="">
    <post v-for="post in allPosts" :data="post" />
  </div>
</template>

<script>
import firebase from 'firebase'
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
        .then(snap => {
          snap.forEach(obj => {
            this.allPosts.push(obj.val())
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
</style>
