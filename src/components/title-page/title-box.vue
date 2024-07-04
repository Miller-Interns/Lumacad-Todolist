<template>
  <div class="absolute block m-auto w-1/2 h-fit inset-0 text-center p items-center justify-center">
    <div>
      <h1 class="block font-bold my-4 text-nice-e">{{ titleName }}</h1>
      <h1 class="block text-xs my-4">Today is: {{ today }}</h1>
    </div>
    <div class="block inset-0 my-4">
      <RouterLink class="rounded-md p-2 bg-nice-a text-white" to="/task">Go to app</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
let titleName = 'Ark Faith Lumacad'
const now: Date = new Date()
const today = now.toDateString()
</script>
