<template>
  <transition>
    <div class="car-item" v-if="selfIndex === currentIndex">
      <slot> </slot>
    </div>
  </transition>
</template>
<script>
import { getCurrentInstance, reactive, toRefs, watch } from "vue";
export default {
  name: "CarItem",
  setup() {
    const instance = getCurrentInstance();
    // console.log(instance)
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });
    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.car-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 1s linear;
}

.v-enter-active {
  transform: translateX(99%);
}

.v-enter-to {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(-99%);
}
</style>