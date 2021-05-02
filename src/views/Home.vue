<template>
  <div class="home">
    <div 
      v-for="destination of destinations" 
      :key="destination.id"
    >
      <router-link :to="destination.slug">
        <h2>{{ destination.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js'
export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      destinations: store.destinations
    }
  }
};
</script>
