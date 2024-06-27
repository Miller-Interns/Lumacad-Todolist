<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
.icon {
  width: 48px;
  height: 48px;
  border-radius: 25px;
  background-color: green;
  background-size: contain;
  place-items: center;
}

.icon:hover {
  background-color: white;
}
</style>
