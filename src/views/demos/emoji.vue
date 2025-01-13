<template>
  <div class="wrap-picker">
    <c-emoji></c-emoji>
    <br><br>

    <c-emoji type="think"></c-emoji>
    <br><br>

    <c-emoji type="love"></c-emoji>
    <br><br>

    <div class="demo">
      <div></div>
      <div></div>
      <div></div>
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

  >div {
    width: 33.33%;
    height: 20px;
    background-color: #ccc;
  }
}
</style>