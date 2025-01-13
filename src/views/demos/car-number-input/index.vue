<template>
  <div class="wrap-car">
    <c-car-number-input v-model="val"></c-car-number-input>

    <br>
    <br>

    <el-input :value="val" type="textarea"></el-input>

    推荐正则表达式:
    <code>
      <pre>
        /((^(京|津|沪|渝|冀|豫|云|辽|黑|湘|皖|鲁|新|苏|浙|赣|鄂|桂|甘|晋|蒙|陕|吉|闽|贵|粤|青|藏|川|宁|琼)[A-Z]{1}[A-Z0-9]{5}[A-Z0-9挂学警港澳试超使领北南军海空外]{1}$)|(^(京|津|沪|渝|冀|豫|云|辽|黑|湘|皖|鲁|新|苏|浙|赣|鄂|桂|甘|晋|蒙|陕|吉|闽|贵|粤|青|藏|川|宁|琼)[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳试超使领北南军海空外]{1}$))/
      </pre>
    </code>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const val = ref('')
</script>