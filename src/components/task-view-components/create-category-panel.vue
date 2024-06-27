<script setup lang="ts">
import AddIcon from '../icons/add-icon.vue'
import SetCategory from './set-category.vue'
import CreateCategory from '../scripts/create-category'
</script>

<template>
  <div class="category">
    <div id="container">
      <h1>Create Category</h1>
      <div id="add">
        <AddIcon />
      </div>
    </div>
  </div>

  <div id="set-category">
    <SetCategory />
  </div>
</template>

<style>
.category {
  position: relative;
  display: block;
  width: 100%;
  height: 100px;
  float: top;
  border: 3px solid white;
  background-color: green;
  padding: 24px;
}

#set-category {
  width: inherit;
  position: relative;
  overflow: hidden;
  display: block;
  margin-top: 1rem;
  border: 3px solid white;
  background-color: green;
  padding: 24px;
}

#container {
  position: relative;
  top: 50%;
  margin-top: -25px;
}

h1 {
  float: left;
  font-weight: bold;
}

#add {
  float: right;
}
</style>
