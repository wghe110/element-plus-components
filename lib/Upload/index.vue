<template>
  <div class="wrap-upload" ref="wrapRef">
    <div class="upload-box">
      <el-upload action="" :auto-upload="false" :show-file-list="false" class="upload" accept="image/png,image/jpeg"
        :on-change="changeFn" ref="uploadRef">
        <img v-if="modelValue" :src="modelValue" class="avatar" />
        <div v-else class="icon-box">
          <img src="./upload-default.png" class="icon" alt="">
          <span>点击上传</span>
        </div>
      </el-upload>

      <div class="actions" v-if="modelValue">
        <a @click="editFn">
          <el-icon :size="16" color="#fff">
            <Refresh />
          </el-icon>
          <span>修改</span>
        </a>
        <a @click="deleteFn">
          <el-icon :size="16" color="#fff">
            <Delete />
          </el-icon>
          <span>删除</span>
        </a>
      </div>
    </div>

    <p class="tips">文件格式为jpg、png，宽高比例3:4</p>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { drawCanvasFn } from './toBase64';
import { Refresh, Delete } from '@element-plus/icons-vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue', 'change']);

const wrapRef = ref();

const changeFn = (file) => {
  const { type } = file.raw;
  if (type !== 'image/jpeg' && type !== 'image/png') {
    return ElMessage.error('请选择jpg和png格式图片');
  }

  const url = URL.createObjectURL(file.raw);
  drawCanvasFn(url).then((val) => {
    emit('update:modelValue', val);
    emit('change', val);
  });
};
const deleteFn = () => {
  emit('update:modelValue', '');
  emit('change', '');
};
const editFn = () => {
  const eleInput = wrapRef.value.getElementsByClassName('el-upload__input');
  if (eleInput.length) {
    eleInput[0].click();
  }
};
</script>

<style lang="scss" scoped>
.wrap-upload {
  display: flex;
  flex-direction: column;
  align-items: center;

  >.upload-box {
    position: relative;

    >.upload {
      width: 120px;
      height: 160px;
      background: #F7F8FA;
      border-radius: 2px 2px 2px 2px;
      border: 1px solid #EAEBEC;
      overflow: hidden;
      position: relative;
    }

    >.actions {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, .6);
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 2px;
      opacity: 0;

      &:hover {
        opacity: 1;
      }

      >a {
        display: flex;
        flex-direction: column;
        align-items: center;

        &:hover {
          text-decoration: none;
          cursor: pointer;
        }

        >span {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
          line-height: 16px;
          padding-top: 6px;
        }
      }
    }
  }

  .avatar {
    width: 120px;
    height: 160px;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 2px;
  }

  .icon-box {
    width: 120px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
      width: 60px;
      margin-bottom: 9px;
    }

    >span {
      font-family: PingFang SC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #52555C;
      line-height: 14px;
    }
  }

}

.tips {
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 12px;
  color: #777575;
  line-height: 14px;
  margin: 0;
  padding-top: 18px;
}
</style>
