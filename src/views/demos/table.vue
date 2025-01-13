<template>
  <div class="wrap-picker">
    <div class="demo">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>

  <div class="item">
    <div class="table-box">
      <c-table :data="tableData">
        <el-table-column align="center" label="序号" type="index" width="60" />
        <el-table-column label="派单号" min-width="180" prop="dispId" show-overflow-tooltip />
        <el-table-column label="车牌号" show-overflow-tooltip width="160">
          <template #default="{ row }">
            <c-car-no :car-no="row['carNo']" :type="row['carColor']" />
          </template>
        </el-table-column>
        <el-table-column label="预警时间" min-width="180" prop="warningTime" show-overflow-tooltip></el-table-column>
        <el-table-column label="企业名称" prop="enterpriseName" show-overflow-tooltip />
        <el-table-column label="SIM卡号" prop="sim" show-overflow-tooltip />
        <el-table-column label="ICCID" prop="iccid" show-overflow-tooltip />
        <el-table-column label="平台服务商" prop="plantName" show-overflow-tooltip width="180px" />
        <el-table-column label="联系人" prop="plantContactPerson" show-overflow-tooltip />
        <el-table-column label="联系方式" prop="plantContactPhone" show-overflow-tooltip width="120" />
      </c-table>
    </div>
    <c-pagination v-model:current-page="page.current" v-model:page-size="page.size" :total="page.total" />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const tableData = ref([])
const page = reactive({
  current: 1,
  size: 10,
  total: 1000,
})
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 24px;
}

.table-box {
  height: 300px;
}

.demo {
  width: 100%;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  >div {
    width: 33.33%;
    height: 20px;
    background-color: #ccc;
  }
}
</style>