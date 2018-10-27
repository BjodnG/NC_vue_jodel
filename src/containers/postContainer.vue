<template lang="html">
  <div class="post__container">
    <post class="post"
          v-for="post in visiblePosts"
          :snapShot="post"
          />
  </div>
</template>

<script>
import firebase from 'firebase';
import post from '../components/post.vue';

export default {
  data () {
    return {
      visiblePosts: [],
      allPosts: [],
      colorNumber: 0
    }
  },
  methods: {
      fetchAllPostsFromDatabase() {
        firebase.database().ref('/posts/').once('value')
        .then(snapShots => {
          snapShots.forEach(snap => {
            this.allPosts.push(snap);
          })
          this.renderPosts();
        });
      },
      renderPosts() {
        for (let i = 0; i < 5; i++) {
          if (this.allPosts.length > 0) {
            let post = this.allPosts.pop();
            post.color = this.setColorNumber();
            this.visiblePosts.push(post);
          }
        }
      },
      setColorNumber(){
        if (this.colorNumber === 5)
          this.colorNumber = 0;
        this.colorNumber++;
        return this.colorNumber;
      }
  },
  mounted () {
    this.fetchAllPostsFromDatabase();
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
