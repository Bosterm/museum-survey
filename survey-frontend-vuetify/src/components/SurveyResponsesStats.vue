<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(surveyResponse, index) in surveyResponses"
          :key="index"
          @click="setActiveSurveyResponse(surveyResponse, index)"
        >
          {{ surveyResponse.response }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllSurveyResponses">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentSurveyResponse">
        <h4>Response</h4>
        <div>
         {{ currentSurveyResponse.response }}
        </div>
        <div>
            {{ currentSurveyResponse.created_at }}
        </div>

        <a class="badge badge-warning"
          :href="'/#/tutorials/' + currentSurveyResponse.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import SurveyResponseDataService from "../services/SurveyResponseDataService";

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
      title: ""
    };
  },
  methods: {
    retrieveSurveyResponses() {
      SurveyResponseDataService.getAll()
        .then(response => {
          this.surveyResponses = response.data;
          this.getResponseCounts();
        })
        .catch(e => {
          console.log(e);
        });
        
    },
    getResponseCounts() {
      var blue_black_count = 0;
      var white_gold_count = 0;
      var blue_brown_count = 0;
      var other_count = 0
      this.surveyResponses.forEach(function (item) {
        console.log('here!');
        switch(item.response) {
          case 'blue-black':
            blue_black_count += 1;
            break;
          case 'white-gold':
            white_gold_count += 1;
            break;
          case 'blue-brown':
            blue_brown_count += 1;
            break;
          case 'other':
            other_count += 1;
            break;
        } 
      });
      this.blue_black = blue_black_count;
      this.white_gold = white_gold_count;
      this.blue_brown = blue_brown_count;
      this.other = other_count;
    },
    refreshList() {
      this.retrieveSurveyResponses();
      this.currentSurveyResponse = null;
      this.currentIndex = -1;
    },

    setActiveSurveyResponse(tutorial, index) {
      this.currentSurveyResponse = tutorial;
      this.currentIndex = index;
    },

    removeAllSurveyResponses() {
      SurveyResponseDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
  },
  mounted() {
    this.retrieveSurveyResponses();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>