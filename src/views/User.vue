<template>
  <div>
    <h1>User</h1>
    <button @click="logOut" class="btn">Logout</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  methods: {
    logOut() {
      store.user = null
      this.$router.push('/')
    }
  }
};
</script>

<style></style>
