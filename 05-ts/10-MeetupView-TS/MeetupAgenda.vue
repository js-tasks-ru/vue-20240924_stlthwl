<script setup lang="ts">
import type { MeetupAgendaItemDTO } from '@shgk/vue-course-ui'
import MeetupAgendaItem from './MeetupAgendaItem.vue'

// Определяем пропсы с типом массива объектов типа MeetupAgendaItemDTO
const props = defineProps<{
  agenda: MeetupAgendaItemDTO[]
}>()
</script>

<template>
  <ul class="agenda">
    <li v-for="agendaItem in props.agenda" :key="agendaItem.id" class="agenda__item">
      <MeetupAgendaItem :agenda-item="agendaItem" />
    </li>
  </ul>
</template>

<style scoped>
.agenda {
  margin: 0;
  padding: 0;
  list-style: none;
}

.agenda__item {
  border-top: 1px solid var(--grey-3);
}

.agenda__item:first-child {
  border-top: none;
}
</style>
