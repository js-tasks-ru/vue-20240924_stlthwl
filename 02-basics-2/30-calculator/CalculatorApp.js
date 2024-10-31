import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operand1 = ref(0)
    const operand2 = ref(0)
    const operator = ref('sum')
    const result   = ref(0)

    function calculate() {
      switch (operator.value) {
        case 'sum':
          result.value = operand1.value + operand2.value
          break
        case 'subtract':
          result.value = operand1.value - operand2.value
          break
        case 'multiply':
          result.value = operand1.value * operand2.value
          break
        case 'divide':
          result.value = operand2.value !== 0 ? operand1.value / operand2.value : 'Error: division by zero'
          break
      }
    }

    return {
      operand1,
      operand2,
      operator,
      result,
      calculate,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="operand1" @input="calculate" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator" @change="calculate" />➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator" @change="calculate" />➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator" @change="calculate" />✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator" @change="calculate" />➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="operand2" @input="calculate" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
