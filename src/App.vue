<template>
  <div id="app">
    <h1>COVID-19 Stats</h1>
    <br />
    <h2>Global Statistics</h2>
    <stats
      :confirmed="this.$store.state.stats.confirmed.value"
      :deaths="this.$store.state.stats.deaths.value"
      :recovered="this.$store.state.stats.recovered.value"
    />
    <br />
    <h2>Country Statistics</h2>
    <country-stats />
  </div>
</template>

<script>
import Stats from "./components/Stats.vue";
import CountryStats from "./components/CountryStats.vue";

export default {
  name: "App",
  components: {
    Stats,
    CountryStats
  },
  mounted() {
    this.$store.dispatch("loadGlobalStats");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
