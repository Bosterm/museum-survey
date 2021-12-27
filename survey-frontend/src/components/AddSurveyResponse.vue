<template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-card class="mx-auto my-12" max-width="374">
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
              v-bind="attrs"
              v-on="on"
            >
              Submit</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </template>

    <v-card>
      <v-card-text>
        <div class="text-h4 text-center">You selected {{choice_text}}.</div>
        <div class="text-h2 text-center">{{ choice_percent }}%</div>
        <div class="text-h4 text-center">of today's visitors also see {{choice_text}}.</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
      dialog: false,
      isChipSelected: false,
      selectedChip: "none",
      choice: "",
      surveyResponses: [],
      choice_count: 0,
    };
  },
  methods: {
    whiteGoldChip() {
      this.isChipSelected = true;
      this.selectedChip = 0;
    },
    blueBlackChip() {
      this.isChipSelected = true;
      this.selectedChip = 1;
    },
    blueBrownChip() {
      this.isChipSelected = true;
      this.selectedChip = 2;
    },
    otherChip() {
      this.isChipSelected = true;
      this.selectedChip = 3;
    },
    saveSurveyResponse() {
      if (this.selectedChip == 0) {
        this.choice = "white-gold";
      } else if (this.selectedChip == 1) {
        this.choice = "blue-black";
      } else if (this.selectedChip == 2) {
        this.choice = "blue-brown";
      } else {
        this.choice = "other";
      }
      var data = {
        response: this.choice,
      };

      SurveyResponseDataService.create(data)
        .then((response) => {
          this.surveyResponse.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
      this.retrieveSurveyResponses();
    },
    retrieveSurveyResponses() {
      SurveyResponseDataService.getAll()
        .then((response) => {
          this.surveyResponses = response.data;
          this.getResponseCounts();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getResponseCounts() {
      var this_choice_count = 1;
      var current_choice = this.choice;
      this.surveyResponses.forEach(function (item) {
        if (item.response == current_choice) {
          this_choice_count += 1;
        }
      });
      this.choice_count = this_choice_count;
    },
  },
  computed: {
    choice_percent() {
      return (
        100 *
        (this.choice_count / (this.surveyResponses.length + 1))
      ).toFixed(1);
    },
    choice_text() {
      switch(this.choice) {
        case 'blue-black' :
          return 'a Blue and Black dress';
        case 'white-gold':
          return 'a White and Gold dress';
        case 'blue-brown':
          return 'a Blue and Brown dress';
        case 'other':
          return 'Something Else';
        default:
          return 'nothing selected';
      }
    }
  },
};
</script>