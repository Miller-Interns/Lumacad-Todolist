<template>
  <div
    class="p-4 min-w-max min-h-28 h-auto border-2 border-mgreen rounded-xl bg-sgreen text-dgreen m-2"
  >
    <div class="content">
      <div class="flex border-2 border-mgreen rounded-md p-1 pl-3 mb-2" id="heading">
        <h3>
          <slot name="category"></slot>
        </h3>
      </div>
      <div class="block" id="details">
        <p class="grid grid-rows-1">
          <slot name="tasks"></slot>
        </p>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
