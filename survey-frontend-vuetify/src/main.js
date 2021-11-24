import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueApexCharts from 'vue-apexcharts'


Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
