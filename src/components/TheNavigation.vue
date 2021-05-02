<template>
  <nav id="nav">
    <router-link to="/home">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style scoped>
  #nav {
    display: flex;
    justify-content: space-between;
  }
</style>