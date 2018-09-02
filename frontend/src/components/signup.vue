<template lang="html">
  <div class="sign-up">
    <h3>Opprett en ny konto!</h3>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Passord" ><br>
    <button>Opprett</button>
    <p> Gå tilbake til logg inn. </p>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data: () => {
    return {

    }
  },
  methods: {}
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
