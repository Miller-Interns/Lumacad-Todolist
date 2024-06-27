<script setup lang="ts">
import { ref } from 'vue'
import AddIcon from '../icons/add-icon.vue'
import SetCategory from './set-category.vue'

const show = ref(false)

const set = () => {
  show.value = true
}
const unset = () => {
  show.value = false
}
</script>

<template>
  <div class="category">
    <div id="container">
      <h1>Create Category</h1>
      <div id="add" v-if="!show"><AddIcon @click="set" /></div>
      <div id="cancel" v-else><AddIcon @click="unset" /></div>
    </div>
  </div>

  <div id="set-category" v-if="show">
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
  border: 3px solid black;
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
  height: 48px;
  width: 48px;
  float: right;
}

#cancel {
  height: 48px;
  width: 48px;
  float: right;
  rotate: 45deg;
}
</style>
