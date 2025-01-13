<template>
  <div class="wrap-picker">
    <c-custom-date-range-picker v-model="val"></c-custom-date-range-picker>

    <br><br>

    <el-input :value="val" type="textarea"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref([])
</script>