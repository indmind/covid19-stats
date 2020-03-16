<template>
  <div id="country-stats">
    <model-select
      class="modal-select"
      :options="countries"
      v-model="currentSelectedCountry"
      placeholder="select item2"
    >
    </model-select>

    <p v-show="countryStatsError">
      {{ countryStatsError }}
    </p>

    <stats
      v-show="!countryStatsError"
      :confirmed="selectedCountryStats.confirmed.value"
      :deaths="selectedCountryStats.deaths.value"
      :recovered="selectedCountryStats.recovered.value"
    />
  </div>
</template>

<script>
import { ModelSelect } from "vue-search-select";

import Stats from "@/components/Stats.vue";

import { mapState } from "vuex";

export default {
  components: {
    Stats,
    ModelSelect
  },
  mounted() {
    this.$store.dispatch("loadCountries");
    this.$store.dispatch("setCountry", "ID");
  },
  data() {
    return { currentSelectedCountry: "ID" };
  },
  computed: {
    countries() {
      return Object.entries(
        this.$store.state.countries
      ).map(([country, code]) => ({ value: code, text: country }));
    },
    ...mapState(["countryStatsError", "selectedCountryStats"])
  },
  watch: {
    currentSelectedCountry(country) {
      this.$store.dispatch("setCountry", country);
    }
  }
};
</script>

<style>
.modal-select {
  max-width: 256px;
  margin: auto;
}
</style>
