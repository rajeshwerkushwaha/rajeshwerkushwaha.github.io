// src/components/Auth.vue
<template>
  <div class="auth">
    <sign-up :toggle='toggle' v-if="formState === 'signUp'"></sign-up>
    <sign-in v-if="formState === 'signIn'"></sign-in>
    <p v-on:click="toggle" class="toggle">{{ formState === 'signUp' ?
      'Already sign up? Sign In' : 'Need an account? Sign Up'
      }}</p>
  </div>
</template>

<script>
import SignUp from './SignUp'
import SignIn from './SignIn'

export default {
  name: 'app',
  data() {
    return {
      formState: 'signUp'
    }
  },
  methods: {
    toggle() {
      this.formState === 'signUp' ? this.formState = 'signIn' : this.formState = 'signUp'
    }
  },
  components: {
    SignUp,
    SignIn
  }
}
</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
.toggle {
  cursor: pointer;
  font-size: 18px;
}
</style>


<!-- // src/components/Auth.vue
<template>
  <div class="auth">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>

export default {
  name: 'auth'
}
</script>

<style>
.auth {
  margin: 0 auto;
  width: 460px;
}
</style> -->
