<template lang="html">
  <div class="post__container">
    <post class="post"
          v-for="post in $store.state.visiblePosts"
          :snapShot="post"
          :key="post.key"
          />
  </div>
</template>

<script>
import firebase from 'firebase';
import post from '../components/post.vue';

export default {
  methods: {
      renderPosts() {
        for (let i = 0; i < 5; i++) {
          //this.$store.commit('appendVisiblePost');
          this.$store.dispatch('appendVisiblePost');
        }
      }
  },
  mounted () {
    //this.fetchAllPostsFromDatabase();
    this.renderPosts();
    window.onscroll = () => {
      if (isBottomOfWindow()) this.renderPosts();
    }
  },
  components: {
    post
  }
}

function isBottomOfWindow() {
  return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
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
