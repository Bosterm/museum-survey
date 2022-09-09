<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent">
      <span>About</span>

      <v-icon>mdi-file-document</v-icon>
    </v-btn>

    <v-btn value="favorites">
      <span>Results</span>

      <v-icon>mdi-chart-bar</v-icon>
    </v-btn>

    <v-btn value="nearby">
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