<template>
  <div class="wrap-filter" :style="{ gap: gap + 'px', 'width': `calc(100% + ${gap}px)` }">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { symbolGap, symbolLabelWidth } from './symbol';

const props = defineProps({
  labelWidth: {
    type: String,
    default: ''
  },
  gap: {
    type: Number,
    default: 12
  }
})

provide(symbolLabelWidth, props.labelWidth)
provide(symbolGap, props.gap)
</script>

<style lang="scss" scoped>
.wrap-filter {
  display: flex;
  flex-wrap: wrap;
}
</style>