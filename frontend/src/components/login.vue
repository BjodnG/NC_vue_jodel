<template lang="html">
  <div class="login">
    <h3>Logg inn</h3>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Passord"><br>
    <button>Login</button>
    <p>Har du ikke konto? Registrer deg her.</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => {
    return {

    }
  },
  methods: {}
}
</script>

<style scoped lang="css">
  .login {
    margin-top: 2.5em;
  }
  input {
    margin: 0.25em 0;
    padding: 1.25em;
    width: 20em;
  }
  button {
    margin-top: 2em;
    width: 10em;
    cursor: pointer;
  }
  p {
    margin-top: 3.75em;
    font-size: 1em;
  }
  p, a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
