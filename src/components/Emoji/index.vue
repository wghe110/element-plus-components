<template>
  <div class="wrap-emoji">
    <slot name="prefix"></slot>
    <span :class="`emoji ${type}`"></span>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'sweet',
  },
});
</script>

<style lang="scss" scoped>
.wrap-emoji {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  >.emoji {
    margin: 0 6px;

    &.sweet {
      min-width: 60px;

      &::after {
        content: '';
        animation: emoji-sweet 1s steps(2) infinite;
      }
    }

    &.think {
      min-width: 60px;

      &::after {
        content: '';
        animation: emoji-think 5s steps(4) infinite;
      }
    }

    &.love {
      min-width: 60px;

      &::after {
        content: '';
        animation: emoji-love 4s steps(4) infinite;
      }
    }
  }
}

@keyframes emoji-sweet {

  0%,
  100% {
    content: '(๑•́ ₃•̀๑ ) ';
  }

  50% {
    content: '(ฅ•́ ₃•̀ฅ ) ';
  }
}

@keyframes emoji-think {

  0%,
  100% {
    content: '( ´◑ ‸◑`) ';
  }

  20% {
    content: '( ´◒ ‸◒`) ';
  }

  40% {
    content: '( ´◐ ‸◐`) ';
  }

  60% {
    content: '( ´◓ ‸◓`) ';
  }

  80% {
    content: '( ´◉ ‸◉`) ';
  }
}

@keyframes emoji-love {

  0%,
  100% {
    content: '(˘❥˘)✿';
  }

  50% {
    content: '(◕‿◕✿)';
  }

  75% {
    content: '(◡‿◡✿)';
  }
}
</style>
