<script setup lang="ts">
import { ref, watch } from 'vue'
import AddIcon from '../icons/add-icon.vue'
import SetCategory from './set-category.vue'

const isShown = ref(false)

const set = () => {
  isShown.value = !isShown.value
}
const Shown = window.localStorage.getItem('isShown');

if (Shown)
{ 
  isShown.value = JSON.parse(Shown);
}

watch(isShown, (val)=>{
  window.localStorage.setItem('isShown', JSON.stringify(val))
})

</script>

<template>
  <div class="category">
    <div id="container">
      <h1>Create Category</h1>
      <div id="add" class="add-icon" v-bind:aria-expanded="isShown ? 'true' : 'false'">
        <AddIcon @click="set"/>
      </div>
    </div>  
  </div>

  <div id="set-category" v-if="isShown">
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
  overflow: hidden;
  height: auto;
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

.add-icon{
  width: 48px;
  height:48px;
  display: inline;
  float: right;
  rotate: 90deg;
  transition: transform 500ms;
}

.add-icon[aria-expanded="true"]{
  transform: rotate(45deg);
}
</style>
