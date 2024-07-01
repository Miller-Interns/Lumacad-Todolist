<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main><RouterView /></main>
</template>

<style>
.icon {
  width: 48px;
  height: 48px;
  border-radius: 25px;
  border: 3px solid #416d19;
  background-size: contain;
  place-items: center;
}

.icon:hover {
  cursor: pointer;
  background-color: white;
  transition: 0.5s;
}

.icon:checked {
  background-color: white;
}
</style>
