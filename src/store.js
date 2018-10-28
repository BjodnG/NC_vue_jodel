import firebase from 'firebase';
export default {
  state: {
    allPosts: [],
    visiblePosts: [],
    colorNumber: 0
  },
  getters: {
    getVisiblePosts: state => {
      return state.visiblePosts;
    },
    getAllPosts: state => {
      return state.allPosts;
    }
  },
  mutations: {
    appendVisiblePost(state) {
      if (state.allPosts.length > 0) {
        let postSnapshot = state.allPosts.pop();
        postSnapshot.color = setColorNumber(state);
        state.visiblePosts.push(postSnapshot);
      }
    },
    appendPostFromForm(state, post) {
      post.color = setColorNumber(state);
      state.visiblePosts.unshift(post);
    }
  },
  actions: {
    fetchAllPostsFromDatabase({commit, state}) {
     return new Promise((resolve, reject) => {
        firebase.database().ref('/posts/').once('value')
        .then(snapShots => {
          snapShots.forEach(snap => {
            state.allPosts.push(snap);
          })
          resolve();
        });
     })
    }
  }
}

function setColorNumber(state) {
  if (state.colorNumber === 5)
    state.colorNumber = 0;
  state.colorNumber++;
  return state.colorNumber;
}
