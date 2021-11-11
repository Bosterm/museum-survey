<template>
  <v-app>
    <v-main>
      <AddSurveyResponse/>
    </v-main>
  </v-app>
</template>

<script>
import AddSurveyResponse from './components/AddSurveyResponse';

export default {
  name: 'App',

  components: {
    AddSurveyResponse,
  },

  data: () => ({
    //
  }),
};
</script>
