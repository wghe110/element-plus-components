<template>
  <div class="wrap">
    <aside class="menus">
      <Menu></Menu>
    </aside>

    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script setup>
import Menu from './Menu/index.vue'

</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  display: flex;

  >.menus {
    width: 320px;
  }

  >.content {
    flex: 1;
    min-width: 800px;
  }
}
</style>