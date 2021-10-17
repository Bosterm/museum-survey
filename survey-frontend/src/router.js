import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
//  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/survey-responses",
      name: "survey-responses",
      component: () => import("./components/SurveyResponsesList")
    },
    {
      path: "/survey-responses/:id",
      name: "survey-response-details",
      component: () => import("./components/SurveyResponse")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddSurveyResponse")
    }
  ]
});