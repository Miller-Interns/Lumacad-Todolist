<template>
  <div
    class="absolute block m-auto w-1/2 h-fit inset-0 bg-sgreen border-2 rounded-xl text-center p-3 items-center justify-center border-dgreen " 
  >
    <div>
      <h1 class="block font-bold">{{ titleName }}</h1>
      <h1 class="block text-xs">{{ today }}</h1>
    </div>
    <div class="block inset-0 overflow-visible bg-mgreen border-2 rounded-xl">
      <RouterLink to="/task">go to do list </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
let titleName = 'Ark Faith Lumacad'
const now: Date = new Date()
const today = now.toDateString()
</script>
