<template>
  <div class="wrap-car-color" :style="{ 'font-size': size }">
    <img src="./lan.svg" v-if="val === 1" alt="蓝牌"></img>
    <img src="./bai.svg" v-if="val === 2" alt="白牌"></img>
    <img src="./hei.svg" v-if="val === 3" alt="黑牌"></img>
    <img src="./huang.svg" v-if="val === 4" alt="黄牌"></img>
    <img src="./lv.svg" v-if="val === 5" alt="绿牌"></img>
    <img src="./huanglv.svg" v-if="val === 6" alt="黄绿"></img>
    <img src="./qita.svg" v-if="val === -1" alt="其他"></img>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: ''
  }
});

const val = computed(() => {
  let num = -1;
  if (props.color.includes('蓝')) num = 1;
  if (props.color.includes('白')) num = 2;
  if (props.color.includes('黑')) num = 3;
  if (props.color.includes('黄')) num = 4;
  if (props.color.includes('绿')) num = 5;
  if (props.color.includes('黄绿')) num = 6;

  return num;
});

</script>

<style lang="scss" scoped>
.wrap-car-color {
  height: 1em;
  display: flex;
  align-items: center;

  >img {
    height: 1em;
  }
}
</style>