<template>
  <div :class="classes(BEM())">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { createNamespace } from '@/utils';

const { BEM, classes } = createNamespace('loading');

defineComponent({ name: 'VLoading' });
</script>

<style lang="less">
@import './index.less';
</style>
