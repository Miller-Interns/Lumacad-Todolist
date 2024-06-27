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
.item {
  margin-top: 2rem;
  padding: 24px;
  width: 240px;
  height: 100%;
  display: inline-grid;
  position: relative;
  background-color: purple;
  border: 3px solid white;
}

.details h3 {
}

i {
  display: inline-flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}
</style>
