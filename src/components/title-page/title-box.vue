<template>
  <div
    class="absolute block m-auto w-1/2 h-fit inset-0 border-2 rounded-xl text-center p items-center justify-center"
  >
    <div>
      <h1 class="block font-bold m-2">{{ titleName }}</h1>
      <h1 class="block text-xs m-2">Today is: {{ today }}</h1>
    </div>
    <div class="block inset-0 m-2">
      <RouterLink class="border-2 rounded-xl p-1" to="/task">Go to app</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
let titleName = 'Ark Faith Lumacad'
const now: Date = new Date()
const today = now.toDateString()
</script>
