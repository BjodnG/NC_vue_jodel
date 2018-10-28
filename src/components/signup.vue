<template lang="html">
  <div class="sign-up">
    <a  class="loginLink" href="/">Tilbake</a>
    <h3>Opprett en ny konto!</h3>
    <input v-model="email" type="text" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Passord" ><br>
    <button v-on:click="signUp">Opprett</button>
    <p>
      <router-link to="/login">
        Gå tilbake til logg inn.
      </router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          alert('Din konto er opprettet');
          this.$router.push('/');
        },
        err => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped lang="css">
  .sign-up {
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
