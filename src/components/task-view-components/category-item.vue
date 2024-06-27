<script setup lang="ts"></script>

<template>
  <div class="item">
    <div id="heading">
      <slot name="icon"> </slot>
      <h3>
        <slot name="category"></slot>
      </h3>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 240px) {
  .item {
    padding: 24px;
    width: auto;
    height: 100%;
    display: inline-flex;
    position: relative;
    background-color: purple;
    border: 3px solid white;
    margin: 1em;
  }

  #heading{
    display: flex;
  }

  h3{
    margin-left: 24px;
    font-size: 24px;
  }

}
</style>
