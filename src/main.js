import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import "vue-search-select/dist/VueSearchSelect.css";

Vue.config.productionTip = false;

Vue.filter("formatNumber", function(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
