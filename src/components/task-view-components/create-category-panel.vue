<script lang="ts">
import { ref } from 'vue'
import AddIcon from '../icons/add-icon.vue'
import SetCategory from './set-category.vue'

export const isShown = ref(false)

export default {
  components: {
    AddIcon,
    SetCategory
  },
  setup() {
    const set = () => (isShown.value = !isShown.value)
    return {
      AddIcon,
      SetCategory,
      set,
      isShown
    }
  }
}
</script>

<template>
  <div class="category">
    <div id="container">
      <h1>Create Category</h1>
      <div id="add" class="add-icon" v-bind:aria-expanded="isShown ? 'true' : 'false'">
        <AddIcon @click="set" />
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
  border: 3px solid #9bcf53;
  border-radius: 25px;
  background-color: #bfea7c;
  padding: 24px;
}

#set-category {
  width: inherit;
  position: relative;
  overflow: hidden;
  display: block;
  border: 3px solid #9bcf53;
  border-radius: 25px;
  background-color: #bfea7c;
  margin-top: 1rem;
  padding: 24px;
  overflow: hidden;
  height: auto;
  transition: transform 2s;
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

.add-icon {
  width: 48px;
  height: 48px;
  display: inline;
  float: right;
  rotate: 90deg;
  transition: transform 500ms;
}

.add-icon[aria-expanded='true'] {
  transform: rotate(45deg);
}
</style>
