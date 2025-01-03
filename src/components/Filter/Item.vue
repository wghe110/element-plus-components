<template>
  <div class="wrap-filter-item" :style="{ width: width || symbolWidthParent, flex: buttonBox ? 1 : 'none' }">
    <em :style="{ width: symbolGapParent[0] - symbolGapParent[1] + 'px' }"></em>
    <span class="required" v-if="required">*</span>
    <label :style="{ width: labelWidth || labelWidthParent }" v-if="label">{{ label }}</label>
    <div :style="{ 'justify-content': justify }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { symbolWidth, symbolLabelWidth, symbolGap } from './symbol';

defineProps({
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String,
    default: ''
  },
  justify: {
    type: String,
    default: 'flex-start'
  },
  width: {
    type: String,
    default: ''
  },
  buttonBox: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  }
})

const labelWidthParent = inject(symbolLabelWidth);
const symbolWidthParent = inject(symbolWidth);
const symbolGapParent = inject(symbolGap);
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

.required {
  color: red;
  position: absolute;
  transform: translate3d(-10px, 0px, 0);
}
</style>