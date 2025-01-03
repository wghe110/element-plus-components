<template>
  <div class="wrap-pagination">
    <el-pagination background :page-sizes="[10, 20, 30, 40]" :layout="layout" v-bind="$attrs">
    </el-pagination>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  simple: {
    type: Boolean,
    default: false
  }
})

const layout = computed(() => {
  let str = 'total, prev, pager, next, sizes, jumper'
  if (props.simple) {
    str = 'total, prev, pager, next'
  }
  return str;
})
</script>

<style lang="scss" scoped>
.wrap-pagination {
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
}
</style>
