<template>
  <div class="wrap-addrss-select">
    <c-address-select v-model="addr"></c-address-select>

    <br>

    <el-input :value="addr" type="textarea"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const addr = ref([])
</script>