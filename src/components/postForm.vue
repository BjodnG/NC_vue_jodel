<template lang="html">
  <div class="">
    <h3>Melding</h3>
    <input v-model="message" placeholder="Jodle litt...">
    <button v-on:click="sendMessage" >Send</button>
  </div>

</template>

<script>
export default {
  data: function() {
    return {
      message: ""
    }
  },
  methods: {
    sendMessage: function() {
      console.log(this.message);
    }
  }
}
</script>

<style lang="css">
</style>
