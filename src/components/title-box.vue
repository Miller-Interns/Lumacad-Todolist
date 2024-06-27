<script lang="ts">
export default {
  name: 'TitleBox',
  components: {},
  data() {
    return {
      t: true,
      titleName: 'Ark Faith Lumacad'
    }
  }
}
</script>

<template>
  <div class="title-box">
    <div>    <h1>{{ titleName }}</h1></div>
    <RouterLink
      class="to-task"
      v-on:mouseover="
        () => {
          t = false
          titleName = 'GO TO TODO-LIST'
        }
      "
      v-on:mouseleave="()=>{
        t = true
        titleName = 'Ark Faith Lumacad'}"
      to="/task"
    >
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
  width: 25%;
  height: 200px;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: forestgreen;
  outline: 3px solid white;
  text-align: center;
  font-family: 'Georgia';
}

.title-box h1 {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 50px;
  
}

.to-task {
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: visible;
  margin: auto;
  width: 100px;
  font-size: 25px;
  padding: 5px;
  outline: 3px solid white;
  background-color: green;
}
</style>
