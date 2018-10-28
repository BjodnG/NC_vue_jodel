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
  mounted () {
    this.getPosts();
    this.setRenderIfBottom();
  },
  methods: {
    getPosts() {
      if(this.postNotYetFetched()) {
        this.$store.dispatch('fetchAllPostsFromDatabase')
        .then(() => {
          this.renderPosts();
        })
      } else {
          this.renderPosts();
      }
    },
    postNotYetFetched() {
      if(this.$store.getters.getAllPosts.length === 0 &&
         this.$store.getters.getVisiblePosts.length === 0) {
        return true;
      }
      return false;
    },
    renderPosts() {
      for (let i = 0; i < 5; i++)
        this.$store.commit('appendVisiblePost');
    },
    setRenderIfBottom() {
      window.onscroll = () => {
        if (isBottomOfWindow()) this.renderPosts();
      }
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
