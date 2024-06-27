<script lang="ts"></script>

<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 240px) {
  .item {
    padding: 24px;
    width: 240px;
    height: 100%;
    display: inline-;
    position: relative;
    background-color: purple;
    border: 3px solid white;
    margin: 1em;
  }

  i {
    background-color: purple;
  }
}
</style>
