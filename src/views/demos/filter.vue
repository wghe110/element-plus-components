<template>
  <div class="wrap-picker">
    <div class="demo">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div class="item">
      <h2>全部默认</h2>
      <c-filter>
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
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="性别">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item>
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>按钮靠右</h2>
      <c-filter>
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box justify="flex-end">
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>required</h2>
      <c-filter>
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄" required>
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box justify="flex-end">
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>定义全部labelWidth=100px</h2>
      <c-filter label-width="100px">
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box>
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>定义个别labelWidth=100px</h2>
      <c-filter>
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄" label-width="100px">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box>
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>设置间隔gap=[68, 16]（默认[36, 16]）</h2>
      <c-filter :gap="[68, 16]">
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box>
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>设置每个过滤条件宽度=248px（默认160px）</h2>
      <c-filter item-width="248px">
        <c-filter-item label="姓名">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item label="年龄">
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box>
          <el-button type="primary">查询</el-button>
        </c-filter-item>
      </c-filter>
    </div>

    <div class="item">
      <h2>无label情况</h2>
      <c-filter>
        <c-filter-item>
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item>
          <el-input style="width: 100%"></el-input>
        </c-filter-item>
        <c-filter-item button-box justify="flex-end">
          <el-button type="primary">查询</el-button>
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