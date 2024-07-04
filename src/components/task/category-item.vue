<template>
  <div class="p-3 max-w-1/10 min-h-28 h-auto rounded-xl m-2 bg-nice-c shadow-xl">
    <div class="content">
      <div class="flex rounded-md p-3 pl-3 mb-3 bg-white justify-between ">
        <slot name="header"> </slot>
      </div>
      <div class="block rounded-md p-3 pl-3 mb-2 bg-white">
        <slot name="content"> </slot>
        <slot name="footer"> </slot>
      </div>
      <div>
        <slot name="id"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

