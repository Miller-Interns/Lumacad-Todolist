<script setup lang="ts">
import { onMounted } from 'vue'
import { useLocalStorage } from './stores/store-local'
import { RouterView } from 'vue-router'
onMounted(() => {
  useLocalStorage()
})
</script>

<template>
  <main><RouterView /></main>
</template>
