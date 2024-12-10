import { defineComponent, createApp } from 'vue/dist/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',
  setup() {
    let date = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })

    return {
      date: date,
    }
  },
  template: `<div>Сегодня {{ date }}</div>`,
});

createApp(App).mount('#app');
