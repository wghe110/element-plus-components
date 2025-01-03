<template>
  <div class="wrap-table">
    <el-table v-bind="$attrs" ref="tableRef" height="100%">
      <slot></slot>
      <template #empty>
        <slot name="empty">
          <Emoji type="sweet">暂无数据</Emoji>
        </slot>
      </template>
    </el-table>
  </div>
</template>

<script setup>
import Emoji from '../Emoji/index.vue';
import { ref } from 'vue'

const tableRef = ref()
</script>

<style lang="scss" scoped>
.wrap-table {
  height: 100%;
}
</style>
