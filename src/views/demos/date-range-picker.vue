<template>
  <div class="wrap-picker">
    <c-date-range-picker v-model="val"></c-date-range-picker>

    <br><br>

    <el-input :value="val" type="textarea"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref([])
</script>