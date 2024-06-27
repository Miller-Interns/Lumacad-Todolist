<script setup>
import ComputerIcon from '../icons/icon-add.vue'
import HomeIcon from '../icons/icon-add.vue'
import SchoolIcon from '../icons/icon-add.vue'
import GroceryIcon from '../icons/icon-add.vue'
import ProgrammingIcon from '../icons/icon-add.vue'
import CustomIcon from '../icons/icon-add.vue'
import SetCategory from './set-category.vue'
const set = false
</script>

<template>
  <div class="category">
    <div id="container">
      <h1>Create Category</h1>
      <i class="icon" id="add-button" @click="set = true"></i>
    </div>
    <div class="set-category" v-if="set">
      <SetCategory />
    </div>
  </div>
</template>

<style scoped>
.category {
  position: sticky;
  display: block;
  width: 100%;
  height: 100px;
  float: top;
  border: 3px solid white;
  background-color: green;
}

#container {
  position: relative;
  top: 50%;
  margin-top: -25px;
  padding: 0px 25px;
}

h1 {
  float: left;
  font-weight: bold;
}

.icon {
  float: right;
  width: 48px;
  height: 48px;
  border-radius: 25px;
  background-color: green;
  background-image: url('https://www.svgrepo.com/show/524226/add-circle.svg');
  background-size: contain;
  place-items: center;
}

.icon:hover {
  background-color: white;
  opacity: 50%;
}
</style>
