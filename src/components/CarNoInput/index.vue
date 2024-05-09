<template>
  <el-popover :visible="visible" :width="popWidth">
    <template #reference>
      <el-input v-model.trim="cacheValue" v-bind="$attrs" clearable @input="fetchSuggestionsFn" @focus="focusFn"
        @blur="blurFn" ref="inputRef" maxlength="8"></el-input>
    </template>

    <div class="wrap-car-input">
      <ul class="list">
        <li v-for="item in aList" :key="item.value" @click="selectFn(item)">{{ item.value }}</li>
      </ul>
    </div>
  </el-popover>
</template>

<script setup>
import {
  ref, computed, onMounted,
} from 'vue';
import carNoRules from './rules'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  carPlace: {
    type: Object,
    default() {
      return carNoRules
    }
  }
});
const emit = defineEmits(['update:modelValue', 'change']);

const visible = ref(false);
const pPlace = computed(() => Object.keys(props.carPlace).map((value) => ({
  value,
  label: value,
})));
const inputRef = ref();
const popWidth = ref(200);
const aList = ref([]);
const cacheValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    const newVal = val.toUpperCase();
    emit('update:modelValue', newVal);
    emit('change', newVal);
  },
});

const fetchSuggestionsFn = (query) => {
  aList.value = [];
  if (query.length === 0) aList.value = pPlace.value;
  if (query.length === 1) {
    aList.value = (props.carPlace[query] || []).map((item) => ({
      value: item,
      label: `${query}${item}`,
    }));
  }

  visible.value = aList.value.length > 0;
};
const focusFn = () => {
  fetchSuggestionsFn(props.modelValue);
};
const blurFn = () => {
  visible.value = false;
};

const initPopWidthFn = () => {
  setTimeout(() => {
    const w = inputRef.value.ref.clientWidth;
    popWidth.value = w ? w + 22 : 200;
  });
};
const selectFn = (item) => {
  cacheValue.value = item.label;
  inputRef.value.focus();
};

onMounted(() => {
  initPopWidthFn();
});
</script>

<style lang="scss" scoped>
.wrap-car-input {
  >.list {
    margin: 0 -12px;
    max-height: 260px;
    overflow: auto;
    padding: 0;

    >li {
      padding: 0 20px;
      height: 34px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: #f5f7fa;
      }
    }
  }
}
</style>
