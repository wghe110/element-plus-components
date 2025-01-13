<template>
  <div class="wrap-upload">
    <c-upload v-model="photo"></c-upload>

    <el-input :value="photo" type="textarea"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const photo = ref('')
</script>