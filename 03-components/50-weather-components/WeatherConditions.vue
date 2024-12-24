<template>
  <div class="weather-conditions">
    <div class="weather-conditions__icon" :title="weather.description">
      {{ weatherConditionIcons[weather.id] }}
    </div>
    <div class="weather-conditions__temp">{{ tempInCelsius }} °C</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherConditions',
  props: {
    weather: Object,
    temp: Number,
    weatherConditionIcons: Object,
  },
  computed: {
    tempInCelsius() {
      return (this.temp - 273.15).toFixed(1);
    },
  },
});
</script>

<style scoped>

</style>
