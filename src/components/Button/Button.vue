<template>
  <button
    :class="
      classes(
        BEM(),
        BEM(`--${size}`),
        [disabled, BEM('--disabled')],
        [text, `${BEM(`--text-${type}`)} ${BEM('--text')}`, `${BEM(`--${type}`)} v-elevation--2`],
        [text && disabled, BEM('--text-disabled')],
        [round, BEM('--round')],
        [block, BEM('--block')],
      )
    "
    :disabled="disabled"
    @click="handleClick"
  >
    <Icon v-if="loading" name="loading"></Icon>
    <span :class="classes(BEM('content'))">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { buttonProps } from './props';
import { createNamespace } from '@/utils';
import Icon from '@/components/Icon';

const { BEM, classes } = createNamespace('button');

defineComponent({ name: 'RandomButton' });
defineProps(buttonProps);
const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  emit('click', event);
};
</script>

<style lang="less">
@import './index.less';
</style>
