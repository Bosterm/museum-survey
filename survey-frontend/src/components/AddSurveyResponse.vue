<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        
        <input type="radio" id="white-gold" value="white-gold" v-model="surveyResponse.response">
        <label for="one">White and Gold</label>
        <br>
        <input type="radio" id="blue-black" value="blue-black" v-model="surveyResponse.response">
        <label for="one">Blue and Black</label>
        <br>
        <input type="radio" id="blue-brown" value="blue-brown" v-model="surveyResponse.response">
        <label for="one">Blue and Brown</label>
        <br>
        <input type="radio" id="other" value="other" v-model="surveyResponse.response">
        <label for="one">Something Else</label>
        <br>
      </div>

      <button @click="saveSurveyResponse" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newSurveyResponse">Add</button>
    </div>
  </div>
</template>

<script>
import SurveyResponseDataService from "../services/SurveyResponseDataService";

export default {
  name: "add-survey-response",
  data() {
    return {
      surveyResponse: {
        id: null,
        response:''
      },
      submitted: false
    };
  },
  methods: {
    saveSurveyResponse() {
      var data = {
        response: this.surveyResponse.response
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
    
    newSurveyResponse() {
      this.submitted = false;
      this.surveyResponse = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>