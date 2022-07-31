<template>
  <i :class="bem.b()" :style="style"><slot>ƒ</slot></i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { iconProps } from './icon';
import { createNamespace } from '../../../utils/create';

const bem = createNamespace('icon');

defineOptions({
  name: 'w-icon',
});

// 计算属性 计算一个样式来处理
const props = defineProps(iconProps);

const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size
      ? {
          'font-size': props.size + 'px',
        }
      : {}),
    ...(props.color
      ? {
          color: props.color,
        }
      : {}),
  };
});
</script>
