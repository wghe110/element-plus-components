<template>
  <div class="wrap-picker">
    <div class="demo">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="item">
      <h2>固定宽度</h2>
      <c-filter labelWidth="80px">
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="出生年月">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item justify="flex-end">
          <el-button>查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>自适应宽度(适合一行)</h2>
      <c-filter>
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item>
          <el-button>查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>自定义每个宽度</h2>
      <c-filter>
        <c-filter-item label="姓名" :col="12">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item :col="4">
          <el-button>查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>自定义间隔</h2>
      <c-filter :gap="24">
        <c-filter-item label="姓名" :col="12">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item :col="4">
          <el-button>查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>自定义按钮排列</h2>
      <c-filter :gap="24">
        <c-filter-item label="姓名" :col="8">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item :col="8" justify="flex-end">
          <el-button>查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>无label情况</h2>
      <c-filter :gap="24">
        <c-filter-item :col="8">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item>
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item :col="8" justify="flex-end">
          <el-button>查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
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

.item {
  margin-bottom: 24px;
}
</style>