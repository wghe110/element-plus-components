<template>
  <div class="wrap-car">
    <c-car-number-input v-model="val"></c-car-number-input>

    <br>
    <br>

    <el-input :value="val" type="textarea"></el-input>

    推荐正则表达式:
    <code>
      <pre>
        /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[a-zA-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))|[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1})$/
      </pre>
    </code>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const val = ref('')
</script>