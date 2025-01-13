<template>
  <div class="wrap-location">
    <template v-if="lon && lat">
      <img src="./icon.svg" alt="">
      <template v-if="!addr">
        <span class="lonlat">{{ lon }},{{ lat }}</span>
        <el-button link type="primary" @click="getAddressFn" size="small" :loading="loading">具体位置</el-button>
      </template>

      <p class="address" v-else>{{ addr || '--' }}</p>
    </template>

    <span v-else>--</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  lon: {
    type: [Number, String],
    default: '',
  },
  lat: {
    type: [Number, String],
    default: '',
  },
  getAddrFn: {
    type: Function,
    default() {
      return Promise.resolve('')
    }
  }
});

const loading = ref(false);
const addr = ref('');

const getAddressFn = () => {
  loading.value = true;
  props.getAddrFn().then((res) => {
    addr.value = res;
  }).finally(() => {
    loading.value = false;
  });
};

</script>

<style lang="scss" scoped>
.wrap-location {
  display: flex;
  font-size: inherit;
  align-items: center;

  >img {
    width: 1em;
    margin-right: 4px;
  }

  >.lonlat {
    font-family: PingFang SC, PingFang SC;
    margin-right: 4px;
  }

  >.address {
    margin: 0;
  }
}
</style>