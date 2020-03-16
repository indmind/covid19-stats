import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "Hello",
    stats: {
      confirmed: { value: 0 },
      deaths: { value: 0 },
      recovered: { value: 0 }
    },
    selectedCountryStats: {
      confirmed: { value: 0 },
      deaths: { value: 0 },
      recovered: { value: 0 }
    },
    countries: {},
    selectedCountry: "ID",
    statsError: false,
    countryStatsError: false
  },
  mutations: {},
  actions: {
    loadGlobalStats() {
      axios.get("https://covid19.mathdro.id/api/").then(response => {
        this.state.stats = response.data;
      });
    },
    loadCountries() {
      axios.get("https://covid19.mathdro.id/api/countries").then(response => {
        this.state.countries = response.data.countries;
      });
    },
    setCountry(_, country) {
      this.state.selectedCountry = country;
      this.state.countryStatsError = false;

      axios
        .get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(response => {
          this.state.selectedCountryStats = response.data;
        })
        .catch(error => {
          this.state.countryStatsError = error;
        });
    }
  },
  modules: {}
});
