<template>
  <div class="wrap-picker">
    <c-action-btns :actions="actions"></c-action-btns>

    <br><br>

    <el-table :data="tableData" height="100%">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="username" label="用户账号"> </el-table-column>
      <el-table-column prop="mobile" label="手机号"> </el-table-column>
      <el-table-column label="操作" width="160">
        <template #default="scope">
          <c-action-btns :actions="getActionsFn(scope.row)"></c-action-btns>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const actions = ref([
  {
    text: '删除',
    clickFn() {
      console.log('删除')
    },
  },
  {
    text: '编辑',
    clickFn() {
      console.log('编辑')
    },
  },
  {
    text: '禁用',
    clickFn() {
      console.log('禁用')
    },
  },
  {
    text: '保持原状',
    clickFn() {
      console.log('保持原状')
    },
  }
])
const tableData = [
  {
    name: '章三',
    username: 'zhangsan',
    mobile: 13938332123
  }
]

const getActionsFn = (row) => {
  return [
    {
      text: '删除',
      clickFn() {
        console.log('删除', row)
      },
    },
    {
      text: '编辑',
      clickFn() {
        console.log('编辑', row)
      },
    },
    {
      text: '禁用',
      clickFn() {
        console.log('禁用', row)
      },
    },
    {
      text: '保持原状',
      clickFn() {
        console.log('保持原状', row)
      },
    }
  ]
}
</script>