import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/survey-responses",
      name: "survey-responses",
      component: () => import("./components/SurveyResponsesStats")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddSurveyResponse")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./components/About")
    }
  ]
});