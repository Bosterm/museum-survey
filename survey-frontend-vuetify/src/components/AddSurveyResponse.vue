<template>
  <v-card class="mx-auto my-12" max-width="374">
    <div v-if="!submitted">
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
          @click="saveSurveyResponse"
        >
          Submit</v-btn
        >
      </v-card-actions>
    </v-form>
    </div>
    <div v-else>
      <v-card-text>
        <h3>You see the same colors as 45% of today's visitors.</h3>

        </v-card-text>
    </div>
  </v-card>
</template>
<script>
import SurveyResponseDataService from "../services/SurveyResponseDataService";

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
      this.selectedChip = 0
    },
    blueBlackChip () {
      this.isChipSelected = true;
      this.selectedChip =   1
    },
    blueBrownChip () {
      this.isChipSelected = true;
      this.selectedChip = 2
    },
    otherChip () {
      this.isChipSelected = true;
      this.selectedChip = 3
    },
    saveSurveyResponse() {
      var choice = ""
      if (this.selectedChip == 0) {
        choice = "white-gold"
      } else if (this.selectedChip == 1) {
        choice = 'blue-black'
      } else if (this.selectedChip == 2) {
        choice = 'blue-brown'
      } else {
        choice = 'other'
      }
      var data = {
        response: choice
      };

      SurveyResponseDataService.create(data)
        .then(response => {
          this.surveyResponse.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>