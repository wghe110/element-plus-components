<template>
  <div class="wrap-picker">
    <c-location :lon="123.2323" :lat="24.23242" :getAddrFn="getAddrFn"></c-location>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref([])

const getAddrFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('计算机房老司机疯狂撒娇方式付款时间看看精神科飞机上看风景的身份')
    }, 2000)
  })
}
</script>