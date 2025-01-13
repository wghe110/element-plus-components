<template>
  <div class="wrap-datepicker">
    <DatePicker v-model="pickerVal" class="custom-picker" v-bind="$attrs" @change="pickerChangeFn">
    </DatePicker>

    <div class="item">
      <label>起</label>
      <span>{{ modelValue[0] || "--" }}</span>
      <img src="./icon-date.svg" alt="" />
    </div>
    <div class="line"></div>
    <div class="item">
      <label>止</label>
      <span>{{ modelValue[1] || "--" }}</span>
      <img src="./icon-date.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DatePicker from '../DateRangePicker/index.vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return [];
    },
  },
});
const emit = defineEmits(['update:modelValue']);

const pickerVal = ref([]);


const pickerChangeFn = (val) => {
  pickerVal.value = val;

  emit('update:modelValue', val);
  emit('change', val);
};

onMounted(() => {
  pickerVal.value = props.modelValue;
});
</script>

<style lang="scss" scoped>
.wrap-datepicker {
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background: #f7f8fa;
  padding: 0 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  >.item {
    flex: 1;
    min-height: 36px;
    display: flex;
    align-items: center;

    >label {
      width: 16px;
      height: 16px;
      border-radius: 2px;
      background: #5b6c79;
      margin-right: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: #fff;
      font-family: PingFang SC;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px;
    }

    >span {
      flex: 1;
      min-width: 100px;
      white-space: nowrap;
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #242627;
      line-height: 14px;
    }

    >img {
      margin-left: 14px;
    }
  }

  >.line {
    border-top: 1px solid #edeeef;
  }
}
</style>

<style lang="scss">
.custom-picker {
  width: 100% !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: auto !important;
  opacity: 0;
  cursor: pointer;
}
</style>
