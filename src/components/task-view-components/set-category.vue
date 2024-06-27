<script setup>
import AddIcon from '../icons/icon-add.vue'
</script>

<template>
  <div class="category">
    <div id="container">
      <h1>Select Icon</h1>
      <button id="create-category" v-on:click="console.log('test')"><AddIcon /></button>
    </div>
  </div>
</template>

<style scoped>
.category {
  position: sticky;
  display: block;
  width: 800px;
  height: 1000px;
  float: top;
  border: 3px solid white;
  background-color: green;
}
</style>
