<template>
  <div class="wrap-action-btns">
    <div v-if="actions.length <= limit">
      <el-button link type="primary" v-for="item in actions" :key="item.text" @click="item.clickFn">{{ item.text
        }}</el-button>
    </div>

    <div v-else>
      <el-button link type="primary" v-for="item in showList" :key="item.text" @click="item.clickFn">{{ item.text
        }}</el-button>

      <el-dropdown @command="commandFn">
        <el-button link type="primary" class="more-btn">更多</el-button>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="opt-drop" :command="hItem.text" v-for="hItem in hideList" :key="hItem.text">{{
              hItem.text }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    actions: {
      type: Array,
      default() {
        return [];
      },
    },
    limit: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    showList() {
      const { actions, limit } = this;
      return actions.slice(0, limit - 1);
    },
    hideList() {
      const { actions, limit } = this;
      return actions.slice(limit - 1);
    },
  },
  methods: {
    commandFn(val) {
      const obj = this.hideList.find((item) => item.text === val);
      obj && obj.clickFn();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-action-btns {
  >div {
    display: flex;
    align-items: center;
  }
}

.opt-drop {
  color: #0084ff;
}

.more-btn {
  margin-left: 12px;
}
</style>
