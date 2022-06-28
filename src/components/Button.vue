<script setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'LhButton',
});

console.log(1);
</script>

<template>
  <button class="l-button">
    <slot />
  </button>
</template>

<style lang="less">
.l-button {
  background: #ccc;
}
</style>
