<template lang="html">
  <div class="post">
    <div class="message__container">
      {{ data.message }}
    </div>
    <div class='vote__buttons'>
      <button v-on:click='voteUp' class="button__up"><i class="arrow up"></i> </button>
      {{ votes }} {{ data.likes }}
      <button v-on:click='voteDown' class="button__down"><i class="arrow down"></i></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: ['data'],
  data: function() {
    return {
      votes: 0,
    }
  },
  methods: {
    voteUp: function() {
      this.votes += 1;
    },
    voteDown: function() {
      this.votes -= 1;
    },

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
