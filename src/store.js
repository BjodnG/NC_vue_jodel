import firebase from 'firebase';
export default {
  state: {
    allPosts: [],
    visiblePosts: [],
    colorNumber: 0
  },
  mutations: {
    fetchAllPostsFromDatabase(state) {
      firebase.database().ref('/posts/').once('value')
      .then(snapShots => {
        snapShots.forEach(snap => {
          state.allPosts.push(snap);
        })
      });
    },
    appendVisiblePost(state) {
      if (state.allPosts.length > 0) {
        let postSnapshot = state.allPosts.pop();
        post.color = setColorNumber(state);
        state.visiblePosts.push(post);
      }
    },
    appendPostFromForm(state, post) {
      post.color = setColorNumber(state);

      state.visiblePosts.unshift(post);
    }
  },
  getters: {
    getVisiblePosts: state => {
      return state.visiblePosts;
    },
    getAllPosts: state => {
      return state.allPosts;
    }
  },
  actions: {
    fetchAllPostsFromDatabase({commit}) {
      return new Promise((resolve, reject) => {
        commit('fetchAllPostsFromDatabase');
        resolve();
      })
    },
    appendVisiblePost ({commit, dispatch, state, getters}) {
      console.log(state.allPosts.toString());
      const allPosts = state.allPosts;
      const visiblePosts = state.visiblePosts;
      setTimeout(() => {
        console.log(allPosts.length);
        if (allPosts.length === 0 && visiblePosts.length === 0) {
          dispatch('fetchAllPostsFromDatabase')
          .then(() => {
            commit('appendVisiblePost');
          })
        } else {
          commit('appendVisiblePost');
        }
      }, 2000)
    }
  }
}

function setColorNumber(state) {
  if (state.colorNumber === 5)
    state.colorNumber = 0;
  state.colorNumber++;
  return state.colorNumber;
}
