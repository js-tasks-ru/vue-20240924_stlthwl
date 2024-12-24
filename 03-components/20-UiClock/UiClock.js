import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date());

    const updateTime = () => {
      currentTime.value = new Date();
    };

    const formattedTime = computed(() => {
      return new Intl.DateTimeFormat(navigator.language, { timeStyle: 'medium' }).format(currentTime.value);
    });

    let timer;
    onMounted(() => {
      updateTime();
      timer = setInterval(updateTime, 1000);
    });

    onBeforeUnmount(() => {
      clearInterval(timer);
    });

    return {
      formattedTime,
    };
  },

  template: `<div class="clock">{{ formattedTime }}</div>`,
});

