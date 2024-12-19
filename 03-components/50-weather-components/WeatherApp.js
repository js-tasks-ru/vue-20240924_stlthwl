import {defineComponent, ref} from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherCard from "./WeatherCard.vue";

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherCard,
  },

  setup() {
    const weatherData = ref(getWeatherData());
    const weatherConditionIcons = WeatherConditionIcons;

    const isNight = (sunrise, sunset, currentTime) => {
      const current = convertToMinutes(currentTime);
      const rise = convertToMinutes(sunrise);
      const set = convertToMinutes(sunset);
      return current < rise || current > set;
    };

    const convertToMinutes = (time) => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    return {
      weatherData,
      weatherConditionIcons,
      isNight,
    };
  },

  template: `
    <div>
    <h1 class="title">Погода в Средиземье</h1>
    <ul class="weather-list unstyled-list">
      <WeatherCard
        v-for="item in weatherData"
        :key="item.geographic_name"
        :geographicName="item.geographic_name"
        :current="item.current"
        :alert="item.alert"
        :weatherConditionIcons="weatherConditionIcons"
        :isNight="isNight(item.current.sunrise, item.current.sunset, item.current.dt)"
      />
    </ul>
    </div>
  `,
})
