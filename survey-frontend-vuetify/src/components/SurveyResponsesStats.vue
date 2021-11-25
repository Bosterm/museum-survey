<template>
  <v-container class="fill-height">
    <v-row no-gutters class="align-center">
      <v-col>
        <v-card align-self="center" class="pa-2 mx-auto" max-width="500">
          <v-card-title class="text-h5 text-center"
            >How Today's Visitors See 'The Dress'</v-card-title
          >
          <Chart></Chart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SurveyResponseDataService from "../services/SurveyResponseDataService";
import Chart from "./Chart";

export default {
  name: "survey-responses-stats",
  data() {
    return {
      surveyResponses: [],
      blue_black: 0,
      white_gold: 0,
      blue_brown: 0,
      other: 0,
      currentSurveyResponse: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
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
      var blue_black_count = 0;
      var white_gold_count = 0;
      var blue_brown_count = 0;
      var other_count = 0;
      this.surveyResponses.forEach(function (item) {
        console.log("here!");
        switch (item.response) {
          case "blue-black":
            blue_black_count += 1;
            break;
          case "white-gold":
            white_gold_count += 1;
            break;
          case "blue-brown":
            blue_brown_count += 1;
            break;
          case "other":
            other_count += 1;
            break;
        }
      });
      this.blue_black = blue_black_count;
      this.white_gold = white_gold_count;
      this.blue_brown = blue_brown_count;
      this.other = other_count;
    },
  },
  mounted() {
    this.retrieveSurveyResponses();
  },
  computed: {
    blue_black_percent() {
      return (100 * (this.blue_black / this.surveyResponses.length)).toFixed(1);
    },
    white_gold_percent() {
      return (100 * (this.white_gold / this.surveyResponses.length)).toFixed(1);
    },
    blue_brown_percent() {
      return (100 * (this.blue_brown / this.surveyResponses.length)).toFixed(1);
    },
    other_percent() {
      return (100 * (this.other / this.surveyResponses.length)).toFixed(1);
    },
  },
  components: {
    Chart,
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>