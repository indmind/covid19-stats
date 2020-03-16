<template>
  <div id="stats">
    <div class="stat-item box-confirmed">
      <h3>Confirmed</h3>
      <p>{{ confirmed }}</p>
    </div>

    <div class="stat-item box-deaths">
      <h3>Deaths</h3>
      <p>{{ deaths }}</p>
    </div>

    <div class="stat-item box-recovered">
      <h3>Recovered</h3>
      <p>{{ recovered }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    confirmed: {
      type: Number,
      default: 0
    },
    deaths: {
      type: Number,
      default: 0
    },
    recovered: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
#stats {
  display: flex;
  flex-wrap: wrap;
  max-width: 450px;
  margin: 20px auto;
  justify-content: space-between;
}

.stat-item {
  width: 100px;
  background-color: white;
  padding: 10px;
  margin: 10px;
  border: 2px dashed #2c3e50;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .stat-item {
    width: 100%;
  }
}

.box-confirmed {
  border-color: #ffeaa7;
}

.box-deaths {
  border-color: #d63031;
}

.box-recovered {
  border-color: #00b894;
}
</style>
