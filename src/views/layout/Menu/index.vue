<template>
  <div class="wrap-menu">
    <el-menu router default-active="/intro" style="height: 100%">
      <el-menu-item index="/intro">介绍</el-menu-item>
      <el-menu-item index="/upload">图片上传Base64</el-menu-item>
      <el-menu-item index="/address-select">地址选择</el-menu-item>
      <el-menu-item index="/car-number-input">车牌输入</el-menu-item>
      <el-menu-item index="/date-range-picker">日期</el-menu-item>
      <el-menu-item index="/custom-date-range-picker">自定义日期</el-menu-item>
      <el-menu-item index="/location">定位</el-menu-item>
      <el-menu-item index="/action-btns">按钮组</el-menu-item>
      <el-menu-item index="/car-color">车牌颜色</el-menu-item>
      <el-menu-item index="/emoji">emoji表情</el-menu-item>
      <el-menu-item index="/filter">查询条件</el-menu-item>
      <el-menu-item index="/watermark">水印</el-menu-item>
      <el-menu-item index="/table">表格</el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.wrap-menu {
  height: 100%;
}
</style>