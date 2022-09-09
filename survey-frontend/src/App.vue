<template>
  <v-app>
    <v-main class="grey">
      <router-view />
      <bottom-nav />
    </v-main>
  </v-app>
</template>

<script>
import bottomNav from './components/BottomNav.vue'

export default {
    name: 'App',
    components: {
    bottomNav
  }
};
</script>
