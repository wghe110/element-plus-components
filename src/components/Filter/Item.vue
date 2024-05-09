<template>
  <div class="wrap-filter-item" :style="{ width: swidth }">
    <label :style="{ width: labelWidth || labelWidthParent }" v-if="label">{{ label }}</label>
    <div :style="{ 'justify-content': justify }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { symbolGap, symbolLabelWidth } from './symbol';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String,
    default: ''
  },
  col: {
    type: [Number, String],
    default: 8
  },
  justify: {
    type: String,
    default: 'flex-start'
  }
})

const labelWidthParent = inject(symbolLabelWidth);
const gapParent = inject(symbolGap);

const swidth = computed(() => {
  const per = (props.col / 24 * 100).toFixed(2);
  return `calc(${per}% - ${gapParent}px)`;
})
</script>

<style lang="scss" scoped>
.wrap-filter-item {
  display: flex;
  align-items: center;

  >label {
    white-space: nowrap;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    line-height: 1.2;
    margin-right: 12px;
  }

  >div {
    flex: 1;
    min-width: 20px;
    display: flex;
  }
}
</style>