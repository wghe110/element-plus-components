<template>
  <div class="wrap-car-color" :style="{ 'font-size': size }" v-if="picUrl">
    <img :src="picUrl" :alt="color">
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Lan from './images/lan.svg'
import Bai from './images/bai.svg'
import Hei from './images/hei.svg'
import Huang from './images/huang.svg'
import Lv from './images/lv.svg'
import HuangLv from './images/huanglv.svg'
import other from './images/qita.svg'
import Hong from './images/hong.svg'
import LinShi from './images/linshi.svg'
import LanBai from './images/lanbai.svg'
import JianBianLv from './images/jianbianlv.svg'
import NongHuang from './images/nonghuang.svg'
import NongLv from './images/nonglv.svg'

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

const picUrl = computed(() => {
  let val;
  if (props.color.includes('蓝')) val = Lan;
  if (props.color.includes('白')) val = Bai;
  if (props.color.includes('黑')) val = Hei;
  if (props.color.includes('黄')) val = Huang;
  if (props.color.includes('绿')) val = Lv;
  if (props.color.includes('红')) val = Hong;
  if (props.color.includes('黄绿')) val = HuangLv;
  if (props.color.includes('农黄')) val = NongHuang;
  if (props.color.includes('临时')) val = LinShi;
  if (props.color.includes('蓝白')) val = LanBai;
  if (props.color.includes('渐变绿')) val = JianBianLv;
  if (props.color.includes('农绿')) val = NongLv;
  if (props.color.includes('其他')) val = other;

  return val;
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