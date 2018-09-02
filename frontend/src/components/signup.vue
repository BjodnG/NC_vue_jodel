<template lang="html">
  <div class="sign-up">
    <h3>Opprett en ny konto!</h3>
    <input v-model="email" type="text" placeholder="Email"><br>
    <input v-model="password" type="password" placeholder="Passord" ><br>
    <button v-on:click="signUp">Opprett</button>
    <router-link to="/login">
      <p> Gå tilbake til logg inn. </p>
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: () => {
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
          alert('Din konto er opprettet')
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
