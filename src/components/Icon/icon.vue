<template>
  <svg
    :class="classes(BEM())"
    :style="{
      color: props.color,
      fontSize: props.size,
    }"
    aria-hidden="true"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineComponent } from 'vue';
import { createNamespace } from '@/utils';
import './font/iconfont';
import { iconProps } from './props';

const { BEM, classes } = createNamespace('icon');

defineComponent({ name: 'RandomIcon' });
const props = defineProps(iconProps);

const iconName = computed(() => `#random-${props.name}`);
</script>

<style lang="less">
@import './index.less';
</style>
