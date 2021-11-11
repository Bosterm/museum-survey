<template>
    <p>Add a response!</p>
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