<template lang="html">
  <div class="login">
    <h3>Logg inn</h3>
    <input v-model="email" type="text" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Passord"><br>
    <button v-on:click="login" >Login</button>
    <router-link to="/sign-up">
      <p >Har du ikke konto? Registrer deg her.</p>
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          alert('Du er logget inn!')
          this.$router.replace('/')
        },
        err => {
          alert('Oops. ' + err.message)
        }
      );
    }
  }
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
