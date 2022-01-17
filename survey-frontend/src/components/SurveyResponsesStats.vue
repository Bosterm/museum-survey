<template>
  <v-container class="fill-height">
    <v-row no-gutters class="align-center">
      <v-col>
        <v-card align-self="center" class="pa-2 mx-auto" max-width="700">
          <v-card-title class="justify-center"
            ><h5 class="text-h5 text-center">
              How Today's Visitors See 'The Dress'
            </h5></v-card-title
          >
          <apexchart
            width="700"
            type="bar"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SurveyResponseDataService from "../services/SurveyResponseDataService";

export default {
  name: "survey-responses-stats",
  data() {
    return {
      responseCounts: [],
      title: "",
      chartOptions: {
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
        xaxis: {
          categories: [
            "Blue and Black",
            "White and Gold",
            "Blue and Brown",
            "Something Else",
          ],
        },
        colors: ["#4529D8", "#BEAA39", "#919ACA", "#000"],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#07060B", "#E5E7AE", "#785121"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: [],
          },
        },
        legend: {
          show: false,
        },
      },
      series: [
        {
          name: "responses",
          data: [0, 0, 0, 0],
        },
      ],
    };
  },
  methods: {
    retrieveSurveyResponses() {
      SurveyResponseDataService.getCount()
        .then((response) => {
          this.responseCounts = [
            if (!response.data || !response.data.length > 3) {
              return;
            }
            response.data[0]['count'],
            response.data[3]['count'],
            response.data[1]['count'],
            response.data[2]['count'],
          ];
          this.series = [
          {
            name: "responses",
            data: this.responseCounts,
          },
          ];
        })
        .catch((e) => {
          console.log(e);
        });
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
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>