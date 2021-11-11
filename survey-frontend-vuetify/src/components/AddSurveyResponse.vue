<template>
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      :src="require('../assets/Dress.png')"
    ></v-img>

    <v-card-title>What two colors are this dress?</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>White and Gold</v-chip>

        <v-chip>Blue and Black</v-chip>

        <v-chip>Blue and Brown</v-chip>

        <v-chip>Something Else</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
        <v-btn
            block
            color="primary"
            elevation="2"
            outlined
            @click="reserve"
        >
        Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: 'add-survey-response',

    data() {
    return {
        surveyResponse: {
            id: null,
            response:''
        },
        submitted: false
        };
    },
  }
</script>