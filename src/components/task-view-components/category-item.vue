<script setup lang="ts"></script>

<template>
  <div class="item">
    <div id="heading">
      <slot name="icon"> </slot>
      <h3>
        <slot name="category"></slot>
      </h3>
    </div>
    <p id="details">
      <slot name="tasks"></slot>
    </p>
  </div>
</template>

<style scoped>
@media (min-width: 100px) {
  .item {
    padding: 24px;
    width: auto;
    height: 200px;
    display: block;
    position: relative;
    background-color: purple;
    border: 3px solid white;
    margin: 1em;
  }

  #heading {
    display: flex;
    height: 48px;
  }

  #details {
    display: block;
    height: 48px;
  }

  h3 {
    margin-left: 24px;
    font-size: 24px;
  }
}
</style>
