<template>
  <li class="weather-card" :class="{ 'weather-card--night': isNight }">
    <WeatherAlert v-if="alert" :alert="alert" />
    <div>
      <h2 class="weather-card__name">{{ geographicName }}</h2>
      <div class="weather-card__time">{{ current.dt }}</div>
    </div>
    <WeatherConditions :weather="current.weather" :temp="current.temp" :weatherConditionIcons="weatherConditionIcons" />
    <WeatherDetails :current="current" />
  </li>
</template>

<script>
import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert.vue'
import WeatherConditions from './WeatherConditions.vue'
import WeatherDetails from './WeatherDetails.vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherCard',
  components: {
    WeatherAlert,
    WeatherConditions,
    WeatherDetails,
  },
  props: {
    geographicName: String,
    current: Object,
    alert: Object,
    weatherConditionIcons: Object,
    isNight: Boolean,
  },
});
</script>

<style scoped>

</style>
