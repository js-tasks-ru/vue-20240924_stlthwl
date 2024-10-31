import { defineComponent, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    // инициализируем реактивные переменные, устанавливаем по умолчанию id выбранного митапа = 1
    const selectedMeetupId = ref(1);
    const meetupTitle = ref('');

    // функция для получения данных митапа
    const fetchMeetup = async (id) => {
      const meetup = await getMeetup(id);
      meetupTitle.value = meetup.title;
    };

    // получаем данные митапа при инициализации
    fetchMeetup(selectedMeetupId.value);

    // отслеживаем изменения выбранного ID
    watch(selectedMeetupId, (newId) => {
      fetchMeetup(newId);
    });

    // функции для изменения выбранного ID
    const previousMeetup = () => {
      if (selectedMeetupId.value > 1) {
        selectedMeetupId.value--;
      }
    };

    const nextMeetup = () => {
      if (selectedMeetupId.value < 5) {
        selectedMeetupId.value++;
      }
    };

    return {
      selectedMeetupId,
      meetupTitle,
      previousMeetup,
      nextMeetup,
    };
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          @click="previousMeetup"
          :disabled="selectedMeetupId === 1"
        >Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button" v-for="id in [1, 2, 3, 4, 5]" :key="id">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedMeetupId"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          @click="nextMeetup"
          :disabled="selectedMeetupId === 5"
        >Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>

    </div>
  `,
})
