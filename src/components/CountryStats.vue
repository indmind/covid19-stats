<template>
  <div id="country-stats">
    <model-select
      class="modal-select"
      :options="countries"
      v-model="currentSelectedCountry"
      placeholder="select item2"
    >
    </model-select>

    <p v-show="this.$store.state.countryStatsError">
      {{ this.$store.state.countryStatsError.message }}
    </p>

    <stats
      v-show="!this.$store.state.countryStatsError"
      :confirmed="this.$store.state.selectedCountryStats.confirmed.value"
      :deaths="this.$store.state.selectedCountryStats.deaths.value"
      :recovered="this.$store.state.selectedCountryStats.recovered.value"
    />
  </div>
</template>

<script>
import { ModelSelect } from "vue-search-select";

import Stats from "@/components/Stats.vue";

export default {
  components: {
    Stats,
    ModelSelect
  },
  mounted() {
    this.$store.dispatch("loadCountries");
    this.$store.dispatch("setCountry", "ID");
  },
  computed: {
    selectedCountry() {
      return this.$store.state.selectedCountry;
    },
    countries() {
      return Object.entries(
        this.$store.state.countries
      ).map(([country, code]) => ({ value: code, text: country }));
    }
  },
  watch: {
    currentSelectedCountry(country) {
      this.$store.dispatch("setCountry", country);
    }
  },
  data() {
    return { currentSelectedCountry: "ID" };
  }
};
</script>

<style>
.modal-select {
  max-width: 256px;
  margin: auto;
}
</style>
