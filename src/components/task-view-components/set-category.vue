<script lang="ts">
// import ComputerIcon from '../icons/computer-icon.vue'
// import HomeIcon from '../icons/home-icon.vue'
// import SchoolIcon from '../icons/school-icon.vue'
// import GroceryIcon from '../icons/grocery-icon.vue'
// import ProgrammingIcon from '../icons/programming-icon.vue'
// import CustomIcon from '../icons/custom-icon.vue'
// import { defineComponent, ref } from 'vue'
import { addCategory } from '../../composables/categories'
import { isShown } from './create-category-panel.vue'

const categoryTitle = ''

export default {
  // components: {
  //   ComputerIcon,
  //   HomeIcon,
  //   SchoolIcon,
  //   GroceryIcon,
  //   ProgrammingIcon,
  //   CustomIcon
  // },
  setup() {
    return { addCategory, categoryTitle, isShown }
  }
}
</script>

<template>
  <div class="set">
    <div id="container">
      <div id="wrapper">
        <h1>Category name:</h1>
        <input
          type="text"
          id="category-name"
          v-model="categoryTitle"
          maxlength="16"
          placeholder="New category"
        />
      </div>
      <!--
      <div id="wrapper">
        <h1 id="select-icon-text">Select icon</h1>
        <div id="icon-container">
          <label>
            <input type="radio" name="category-icon" value="computer" />
            <ComputerIcon aria-selected="false" />
          </label>
          <label>
            <input type="radio" name="category-icon" value="home" />
            <HomeIcon aria-selected="false" />
          </label>

          <label>
            <input type="radio" name="category-icon" value="school" checked />
            <SchoolIcon aria-selected="false" />
          </label>

          <label>
            <input type="radio" name="category-icon" value="grocery" />
            <GroceryIcon aria-selected="false" />
          </label>

          <label>
            <input type="radio" name="category-icon" value="programming" />
            <ProgrammingIcon aria-selected="false" />
          </label>

          <label>
            <input type="radio" name="category-icon" value="custom" />
            <CustomIcon aria-selected="false" />
          </label>
        </div>
      </div>   -->
    </div>
    <label>
      <div
        id="add-button"
        @click="
          () => {
            addCategory(categoryTitle)
            isShown = false
          }
        "
      >
        Create
      </div>
    </label>
  </div>
</template>

<style scoped>
#icon-container input {
  margin: 0;
  padding: 0;
}

input[type='radio'] {
  appearance: none;
}

.set #container {
  display: block;
  margin-top: 0px;
}

#wrapper {
  width: 100%;
  margin-bottom: 30px;
  height: 100%;
  padding-bottom: 15px;
}

#category-name {
  height: 48px;
  font-size: 32px;
  margin-left: 24px;
  position: relative;
  color: #416d19;
  border: 3px solid #9bcf53;
  background-color: #bfea7c;
}
#select-icon-text {
  height: 48px;
  width: 100%;
  margin-right: 24px;
}
#icon-container {
  display: inline-flex;
  margin-top: 1em;
}
.icon {
  margin: 1em;
}
#add-button {
  width: 100px;
  height: 50px;
  margin-left: 50%;
  left: 0;
  place-content: center;
  text-align: center;
  font-size: 24px;
  right: 0;
  border: 3px solid #9bcf53;
  background-color: #bfea7c;
  transition: 0.5s;
}

#add-button:hover {
  background-color: white;
  opacity: 75%;
  cursor: pointer;
}
</style>
