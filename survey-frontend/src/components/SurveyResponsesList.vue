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
  name: "survey-responses-list",
  data() {
    return {
      surveyResponses: [],
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
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
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