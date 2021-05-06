<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username" Username></label>
      <input v-model="username" type="text" name="username" class="input" id="username">
      <label for="password" Username></label>
      <input v-model="password" type="password" name="password" class="input" id="passwoed">
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login() {
      
    }
  }
}
</script>

<style>

</style>