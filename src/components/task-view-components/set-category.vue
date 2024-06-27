<script language="ts">
import ComputerIcon from '../icons/computer-icon.vue'
import HomeIcon from '../icons/home-icon.vue'
import SchoolIcon from '../icons/school-icon.vue'
import GroceryIcon from '../icons/grocery-icon.vue'
import ProgrammingIcon from '../icons/programming-icon.vue'
import CustomIcon from '../icons/add-icon.vue'
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
        <h1>Name Icon</h1>
        <input id="category-name-input" />
      </div>
      <div id="wrapper">
        <div>
          <div id="select-icon-text">
            <h1>Select Icon</h1>
          </div>
          <div id="icon-container">
            <ComputerIcon /> <HomeIcon /> <SchoolIcon /> <GroceryIcon /> <ProgrammingIcon />
            <CustomIcon />
          </div>
        </div>
      </div>
    </div>
    <button>Add</button>
  </div>
</template>

<style scoped>
.set #container {
  display: block;
  margin-top: 0px;
}

button {
  margin-left: 50%;
  left: 0;
  right: 0;
}

#wrapper {
  width: 100%;
  margin-bottom: 30px;
  height: 100%;
  padding-bottom: 30px;
}

#category-name-input {
  margin-left: 24px;
  position: relative;
}
#select-icon-text {
  width: 100%;
  margin-right: 24px;
}
#icon-container {
  display: inline;
  margin-top: 1em;
}
</style>
