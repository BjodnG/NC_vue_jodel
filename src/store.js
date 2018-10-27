import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    visiblePosts: [],
    colorNumber: 0
  },
  mutations: {
    appendVisiblePost(state, post) {
      post.color = setColorNumber(state);
      state.visiblePosts.push(post);
    },
    appendPostFromForm(state, post) {
      post.color = setColorNumber(state);
      
      state.visiblePosts.unshift(post);
    }
  },
  getters: {
    getVisiblePosts: state => {
      return state.visiblePosts;
    }
  }
})

function setColorNumber(state) {
  if (state.colorNumber === 5)
    state.colorNumber = 0;
  state.colorNumber++;
  return state.colorNumber;
}
