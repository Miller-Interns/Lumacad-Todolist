<script lang="ts">

export default {
  name: 'TitleBox',
  components: {},
  data() {
    return {
      t: true,
      title: true,
      titleName: 'ARK'
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<template>
  <div class="title-box">
    <h1>{{ titleName }}</h1>
    <div class="to-todo" v-on:mouseover="t = false" v-on:mouseleave="t = true" @click="close">
      <h2 v-if="t">todo list</h2>
      <h2 v-else>lets go</h2>
    </div>
  </div>
</template>

<style>
.title-box {
  position: absolute;
  display: block;
  margin: auto;
  width: 50%;
  height: 200px;
  top : 0;
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

.to-todo {
  margin: auto;
  width: 50%;
  height: 50px;
  border: 3px solid white;
  padding: 5px;
  background-color: green;
}
</style>
