import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const counter = ref(0)

    const increment = () => {
      if (counter.value < 5) {
        counter.value++
      }
    }

    const decrement = () => {
      if (counter.value > 0) {
        counter.value--
      }
    }

    return {
      counter,
      increment,
      decrement,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="decrement"
        :disabled="counter === 0"
      >➖</button>

      <span class="count" data-testid="count"> {{ counter }} </span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="increment"
        :disabled="counter === 5"
      >➕</button>
    </div>
  `,
})
