<script lang="ts">
export default {
  name: 'TitleBox',
  components: {},
  data() {
    return {
      t: true,
      titleName: 'ARK'
    }
  }
}
</script>

<template>
  <div class="title-box">
    <h1>{{ titleName }}</h1>
    <RouterLink class="to-task" v-on:mouseover="t = false" v-on:mouseleave="t = true" to="/task">
      <div v-if="t">todo list</div>
      <div v-else>lets go</div>
    </RouterLink>
  </div>
</template>

<style>
.title-box {
  position: absolute;
  display: block;
  margin: auto;
  width: 50%;
  height: 200px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: forestgreen;
  outline: 3px solid white;
  font-family: 'Georgia';
}

.title-box {
  text-align: center;
}

.title-box h1 {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 50px;
}

.to-task {
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: visible;
  margin: auto;
  width: 100px;
  height: 50px;
  font-size: 25px;
  padding: 5px;
  outline: 3px solid white;
  background-color: green;
}
</style>
