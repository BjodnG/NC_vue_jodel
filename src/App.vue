<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'NC Jodel'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 60px;
  max-width: 25em;
  max-height: 50em;

  height: 100%;

  margin: auto;
}

#app > img {
  max-width: 5%;
}

h1, h2 {
  margin-top: 1em;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.loginLink {
  position: absolute;
  top: 0.2em;
  left: 0.2em;
}

</style>
