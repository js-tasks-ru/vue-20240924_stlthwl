<template>
  <div class="weather-details">
    <div class="weather-details__item">
      <div class="weather-details__item-label">Давление, мм рт. ст.</div>
      <div class="weather-details__item-value">{{ Math.round(current.pressure * 0.75) }}</div>
    </div>
    <div class="weather-details__item">
      <div class="weather-details__item-label">Влажность, %</div>
      <div class="weather-details__item-value">{{ current.humidity }}</div>
    </div>
    <div class="weather-details__item">
      <div class="weather-details__item-label">Облачность, %</div>
      <div class="weather-details__item-value">{{ current.clouds }}</div>
    </div>
    <div class="weather-details__item">
      <div class="weather-details__item-label">Ветер, м/с</div>
      <div class="weather-details__item-value">{{ current.wind_speed }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherDetails',
  props: {
    current: Object,
  },
});
</script>

<style scoped>

</style>
