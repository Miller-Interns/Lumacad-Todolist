<script setup lang="ts">
import TitleBox from '@/views/title-box.vue'
import CreateCategory from './views/create-category.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <nav>
        <RouterLink to="/">Title Screen</RouterLink>
        <RouterLink to="/about">Todo List Screen</RouterLink>
      </nav>
      <RouterView />
    </header>
    <TitleBox />
    <CreateCategory />
  </main>
</template>

<style scoped>
main {
  background-color: purple;
}
</style>
