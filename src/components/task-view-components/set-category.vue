<script setup>
import ComputerIcon from '../icons/computer-icon.vue'
import HomeIcon from '../icons/add-icon.vue'
import SchoolIcon from '../icons/add-icon.vue'
import GroceryIcon from '../icons/add-icon.vue'
import ProgrammingIcon from '../icons/add-icon.vue'
import CustomIcon from '../icons/add-icon.vue'
</script>

<template>
  <div class="set">
    <div id="container">
      <div>
        <h1>Select Icon</h1>
      </div>
      <div><p>test</p></div>
      <div class="icon-container">
        <ComputerIcon /> computer <HomeIcon /> home <SchoolIcon /> school <GroceryIcon /> grocery
        <ProgrammingIcon /> programming <CustomIcon /> custom
      </div>
    </div>
  </div>
</template>

<style scoped>
.set #container {
  margin-top: -4rem;
}

.icon-container {
  display: block;
  margin-top: 4em;
  float: none;
}
</style>
