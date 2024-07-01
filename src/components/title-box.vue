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
    <div>
      <h1>{{ titleName }}</h1>
    </div>
    <RouterLink
      class="to-task"
      v-on:mouseover="
        () => {
          t = false
          titleName = 'GO TO TODO-LIST'
        }
      "
      v-on:mouseleave="
        () => {
          t = true
          titleName = 'Ark Faith Lumacad'
        }
      "
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
  width: 50%;
  height: 200px;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #bfea7c;
  outline: 3px solid #9bcf53;
  text-align: center;
  font-family: 'Georgia';
}

.title-box h1 {
  display: block;
  font-weight: bold;
  margin-top: 10px;
  left: 0px;
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
  color: #416d19;
  outline: 3px solid #9bcf53;
  background-color: #bfea7c;
}
</style>
