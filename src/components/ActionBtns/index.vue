<template>
  <div class="wrap-action-btns">
    <div v-if="actions.length <= limit">
      <template v-for="(item, idx) in actions" :key="item.text">
        <el-divider direction="vertical" v-if="idx > 0" />
        <el-link type="primary" @click="item.clickFn">{{ item.text }}</el-link>
      </template>
    </div>

    <div v-else>
      <template v-for="item in showList" :key="item.text">
        <el-link type="primary" @click="item.clickFn">{{ item.text }}</el-link>
        <el-divider direction="vertical" />
      </template>
      <el-dropdown @command="commandFn">
        <el-link type="primary" class="more-btn">更多</el-link>

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
      if (obj) obj.clickFn();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-action-btns {
  >div {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
}

.opt-drop {
  color: #0084ff;
}
</style>
