<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <div 
        v-for="destination of destinations" 
        :key="destination.id"
      >
        <router-link :to="destination.slug">
          <h2>{{ destination.name }}</h2>
          <figure>
            <router-link :to="destination.name">
              <img 
                :src="require('@/assets/' + destination.image)" 
                :alt="destination.name"
              >
            </router-link>
          </figure>
        </router-link>
      </div>
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
