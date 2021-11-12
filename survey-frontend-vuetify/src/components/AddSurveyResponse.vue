<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img :src="require('../assets/Dress.png')"></v-img>

    <v-card-title>What two colors are this dress?</v-card-title>
    <v-form>
      <v-card-text>
        <v-chip-group
          v-model="selectedChip"
          active-class="green accent-4 white--text"
          column
        >
          <v-chip @click="whiteGoldChip">White and Gold</v-chip>

          <v-chip @click="blueBlackChip">Blue and Black</v-chip>

          <v-chip @click="blueBrownChip">Blue and Brown</v-chip>

          <v-chip @click="otherChip">Something Else</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          block
          color="green"
          elevation="2"
          outlined
          :disabled="!isChipSelected"
        >
          Submit</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
export default {
  name: "add-survey-response",
  
  data() {
    return {
      surveyResponse: {
        id: null,
        response: "",
      },
      submitted: false,
      isChipSelected: false,
      selectedChip: 'none'
    };
  },
  methods: {
    whiteGoldChip () {
      this.isChipSelected = true;
      this.selectedChip = 'white-gold'
    },
    blueBlackChip () {
      this.isChipSelected = true;
      this.selectedChip = 'blue-black'
    },
    blueBrownChip () {
      this.isChipSelected = true;
      this.selectedChip = 'blue-brown'
    },
    otherChip () {
      this.isChipSelected = true;
      this.selectedChip = 'other'
    }
  }
};
</script>