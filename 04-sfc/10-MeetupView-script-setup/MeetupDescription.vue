<template>
  <div class="meetup-description">{{ description }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  description: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.meetup-description {
  padding-top: 33px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-wrap;
}
</style>
