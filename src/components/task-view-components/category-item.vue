<script lang="ts">
export default {}
</script>

<template>
  <div class="container">
    <div class="content">
      <div id="heading">
        <!-- <slot name="icon"> </slot> -->
        <h3>
          <slot name="category"></slot>
        </h3>
      </div>
      <p class="details">
        <slot name="tasks"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 100px) {
  .container {
    padding: 1rem;
    width: 100%;
    border: 3px solid #9bcf53;
    background-color: #bfea7c;
    margin: 1em;
    resize: both;
    overflow: auto;
  }

  #heading {
    border: 3px solid #9bcf53;
  }

  .details {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows 1s;
  }

  .details > div {
    overflow: none;
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
    margin-left: 0px;
    font-size: 24px;
  }
}
</style>
