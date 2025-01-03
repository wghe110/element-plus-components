<template>
  <div class="wrap-filter" :style="{ gap: gap[1] + 'px' }">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { symbolWidth, symbolLabelWidth, symbolGap } from './symbol';

const props = defineProps({
  labelWidth: {
    type: String,
    default: ''
  },
  gap: {
    type: Array,
    default() {
      return [36, 16];
    }
  },
  itemWidth: {
    type: String,
    default: '160px'
  }
})

provide(symbolLabelWidth, props.labelWidth)
provide(symbolWidth, props.itemWidth)
provide(symbolGap, props.gap)
</script>

<style lang="scss" scoped>
.wrap-filter {
  display: flex;
  flex-wrap: wrap;
}
</style>