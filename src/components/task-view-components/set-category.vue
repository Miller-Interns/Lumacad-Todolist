<script language="ts">
import ComputerIcon from '../icons/computer-icon.vue'
import HomeIcon from '../icons/home-icon.vue'
import SchoolIcon from '../icons/school-icon.vue'
import GroceryIcon from '../icons/grocery-icon.vue'
import ProgrammingIcon from '../icons/programming-icon.vue'
import CustomIcon from '../icons/custom-icon.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ComputerIcon,
    HomeIcon,
    SchoolIcon,
    GroceryIcon,
    ProgrammingIcon,
    CustomIcon
  },
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="set">
    <div id="container">
      <div id="wrapper">
        <h1>Category name:</h1>
        <input type="text" id="category-name" name="category-title" maxlength="16" />
      </div>
      <div id="wrapper">
        <h1 id="select-icon-text">Select icon</h1>
        <div id="icon-container">
          <label>
            <input type="radio" name="category-icon" value="computer" checked />
            <ComputerIcon />
          </label>
          <label>
            <input type="radio" name="category-icon" value="home" checked />
            <HomeIcon />
          </label>

          <label>
            <input type="radio" name="category-icon" value="school" checked />
            <SchoolIcon />
          </label>

          <label>
            <input type="radio" name="category-icon" value="grocery" checked />
            <GroceryIcon />
          </label>

          <label>
            <input type="radio" name="category-icon" value="programming" checked />
            <ProgrammingIcon />
          </label>

          <label>
            <input type="radio" name="category-icon" value="custom" checked />
            <CustomIcon />
          </label>
        </div>
      </div>
    </div>
    <label>
      <div id="add-button">Create</div>

    </label>
  </div>
</template>

<style scoped>
#icon-container input {
  margin: 0;
  padding: 0;
}

input[type='radio']:checked {
  background-color: white;
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
  border: black;
}
#select-icon-text {
  height: 48px;
  padding-top: 24px;
  width: 100%;
  margin-right: 24px;
}
#icon-container {
  display: inline-flex;
  margin-top: 1em;
}
.icon {
  margin-top: 24px;
  margin-right: 24px;
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
  border: 3px solid black;
  background-color: green;
  transition: 0.5s;
}

#add-button:hover {
  background-color: white;
  opacity: 75%;
}
</style>
