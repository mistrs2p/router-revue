<template>
  <nav id="nav">
    <p class="logo">My School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li 
        class="links"
        v-for="destination of destinations"
        :key="destination.slug"  
      >
        <router-link
          :to="{ 
            name: 'DestinationDetails',
            params: { slug: destination.slug}
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store'
export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
  #nav {
    display: flex;
    
  }

  #nav a {
    color: #2c3e50;
    text-decoration: none;
  }

  #nav a.my-active-class {
    color: #ab26ab;
  }

  .nav-links {
    display: flex;
  }

  .links {
    padding-right: 20px;
    list-style: none;
  }

  .links:hover {
    text-decoration: underline;
  }

  .logo {
    font-size: 20px;
    color: purple;
    font-weight: bold;
  }
</style>