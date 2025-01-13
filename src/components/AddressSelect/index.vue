<template>
  <div class="wrap-address-select">
    <div class="item">
      <el-select placeholder="省份" filterable style="width: 100%" clearable v-model="province"
        @change="provinceChangeFn">
        <el-option :label="item.label" :value="item.value" v-for="item in optsProvince" :key="item.value"></el-option>
      </el-select>
    </div>

    <div class="item">
      <el-select placeholder="市" filterable style="width: 100%" clearable v-model="city" @change="cityChangeFn"
        v-show="optsCity.length">
        <el-option :label="item.label" :value="item.value" v-for="item in optsCity" :key="item.value"></el-option>
      </el-select>
    </div>

    <div class="item">
      <el-select placeholder="区/县" filterable style="width: 100%" clearable v-model="county" v-show="optsCounty.length">
        <el-option :label="item.label" :value="item.value" v-for="item in optsCounty" :key="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
} from 'vue';
import { patTreeFn } from './tool';
import defaultSource from './source'

const props = defineProps({
  modelValue: {
    type: Array,
    default() {
      return [];
    },
  },
  sourceTree: {
    type: Array,
    default() {
      return defaultSource
    }
  }
});
const emit = defineEmits(['update:modelValue', 'change']);

const province = computed({
  get() {
    return props.modelValue[0] || '';
  },
  set(val) {
    updateValueFn({ type: 'province', newValue: val });
  },
});
const city = computed({
  get() {
    return props.modelValue[1] || '';
  },
  set(val) {
    updateValueFn({ type: 'city', newValue: val });
  },
});
const county = computed({
  get() {
    return props.modelValue[2] || '';
  },
  set(val) {
    updateValueFn({ type: 'county', newValue: val });
  },
});
const sourcePat = computed(() => {
  const arr = patTreeFn(props.sourceTree);
  return arr.map((item) => {
    const { areaId, areaName, areaParentId } = item;
    return {
      ...item,
      value: String(areaId),
      label: areaName,
      pid: String(areaParentId),
    };
  });
});

const optsProvince = computed(() => sourcePat.value.filter((item) => item.pid === '0'));
const optsCity = computed(() => sourcePat.value.filter((item) => item.pid === province.value));
const optsCounty = computed(() => sourcePat.value.filter((item) => item.pid === city.value));


const updateValueFn = ({ type, newValue }) => {
  setTimeout(() => {
    const arr = [...props.modelValue];

    switch (type) {
      case 'province':
        arr[0] = newValue || '';
        break;
      case 'city':
        arr[1] = newValue || '';
        break;
      case 'county':
        arr[2] = newValue || '';
        break;
      default:
        break;
    }

    // 如果区/县 没有值，则去处掉第三项
    if (optsCounty.value.length === 0) {
      arr.splice(2, 1);
    }

    emit('update:modelValue', arr);
    emit('change', arr);
  });
};
const provinceChangeFn = () => {
  city.value = '';
  county.value = '';
};
const cityChangeFn = () => {
  county.value = '';
};
</script>

<style lang="scss" scoped>
.wrap-address-select {
  display: flex;
  gap: 8px;
  width: 100%;

  >.item {
    flex: 1;
  }
}
</style>
