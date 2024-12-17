<template>
  <div class="weather-alert">
    <span class="weather-alert__icon">⚠️</span>
    <span class="weather-alert__description">{{ alert.sender_name }}:<br>{{ alert.description }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherAlert',

  props: {
    alert: Object,
  },
});
</script>

<style scoped>

</style>
