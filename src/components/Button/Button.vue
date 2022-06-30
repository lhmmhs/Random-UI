<script setup>
import { defineComponent } from 'vue';
defineComponent({
  name: 'VButton',
});

defineProps({
  type: { type: String, default: '' },
});
</script>

<template>
  <button v-ripple :class="`v-button v-button--primary v-elevation--2`">
    <slot />
  </button>
</template>

<style lang="less">
.v-button {
  width: 94px;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  border: 0 none;
  color: var(--color-body);
  border-radius: 4px;

  &:active {
    box-shadow: 0 3px 5px -1px var(--shadow-key-umbra-opacity), 0 5px 8px 0 var(--shadow-key-penumbra-opacity),
      0 1px 14px 0 var(--shadow-key-ambient-opacity);
  }

  &--primary {
    background-color: var(--color-primary);
  }

  &--success {
    background-color: var(--color-success);
  }

  &--warning {
    background-color: var(--color-warning);
  }

  &--info {
    background-color: var(--color-info);
  }

  &--disabled {
    background-color: var(--color-disabled);
  }

  &--danger {
    background-color: var(--color-danger);
  }

  &--default {
    border: 1px solid;
    color: var(--color-primary);
    background-color: transparent;

    &:active {
      box-shadow: none;
    }
  }
}
</style>
