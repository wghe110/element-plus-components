<template>
  <div class="wrap-el-picker">
    <el-date-picker v-bind="$attrs" type="datetimerange" range-separator="至" start-placeholder="开始日期"
      end-placeholder="结束日期" format="YYYY-MM-DD HH:mm" :default-time="defaultTime" :shortcuts="shortcuts"
      value-format="YYYY-MM-DD HH:mm:ss" style="width: 100%" />
  </div>
</template>

<script setup>
import shortcuts from './shortcuts';

const defaultTime = [
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
];

</script>

<style lang="scss" scoped>
.wrap-el-picker {
  width: 100%;
}
</style>
