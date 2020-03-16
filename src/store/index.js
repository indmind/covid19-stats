import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  mutations: {
    setStats(state, stats) {
      state.stats = stats;
    },
    setCountries(state, countries) {
      state.countries = countries;
    },
    setSelectedCountry(state, country) {
      state.selectedCountry = country;
    },
    setCountryError(state, countryStatsError) {
      if (!countryStatsError) {
        state.countryStatsError = false;
        return;
      }

      state.countryStatsError = countryStatsError;
    }
  },
  actions: {
    loadGlobalStats() {
      axios.get("https://covid19.mathdro.id/api/").then(response => {
        this.commit("setStats", response.data);
      });
    },
    loadCountries() {
      axios.get("https://covid19.mathdro.id/api/countries").then(response => {
        this.commit("setCountries", response.data.countries);
      });
    },
    setCountry(_, country) {
      this.commit("setSelectedCountry", country);
      this.commit("setCountryError", false);

      axios
        .get(`https://covid19.mathdro.id/api/countries/${country}`)
        .then(response => {
          this.commit("setSelectedCountry", response.data);
        })
        .catch(error => {
          this.commit("setCountryError", error);
        });
    }
  },
  modules: {}
});
