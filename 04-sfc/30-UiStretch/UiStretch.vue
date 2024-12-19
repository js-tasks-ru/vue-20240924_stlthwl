<script setup></script>

<template>
  <div class="stretch-container">
    <slot />
  </div>
</template>

<style scoped>
.stretch-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.stretch-container > * {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

::v-deep .stretch-container img,
::v-deep .stretch-container video,
::v-deep .stretch-container picture {
  object-fit: scale-down;
  width: 100%;
  height: 100%;
}
</style>
