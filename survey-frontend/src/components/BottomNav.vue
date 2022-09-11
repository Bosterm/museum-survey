<template>
  <v-bottom-navigation class="pt-2" v-model="value" color="green" grow>
    <v-btn to="/about" value="about">
      <span>About</span>

      <v-icon>mdi-file-document</v-icon>
    </v-btn>

    <v-btn to="/" value="results">
      <span>Results</span>

      <v-icon>mdi-chart-bar</v-icon>
    </v-btn>

    <v-btn to="/add" value="add">
      <span>Add Response</span>

      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'bottom-nav',
};
</script>