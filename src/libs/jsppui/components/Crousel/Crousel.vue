<template>
  <div class="crousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="inner">
      <CarDot
        :hasDot="true"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
        :itemLen="itemLen"
      ></CarDot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {
  getCurrentInstance,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
} from "vue";
import CarDot from "./Dot.vue";
export default {
  name: "Crousel",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    initial: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor: String,
  },
  components: { CarDot },
  setup(props) {
    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0,
    });
    let t = null;
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          // 灵界点和方向
          setIndex("prev");
        }, props.duration);
      }
    };
    // dir方向
    const setIndex = (dir) => {
      switch (dir) {
        case "next":
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case "prev":
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
        default:
          break;
      }
    };
    const dotClick = (index) => {
      state.currentIndex = index;
    };
    const mouseEnter = () => {
      clearInterval(t);
      t=null;
    };
    const mouseLeave = () => {
      autoPlay();
    };
    onMounted(() => {
      let instance = getCurrentInstance();
      state.itemLen = instance.slots.default()[0].children.length;
      console.log(state);
      autoPlay();
    });
    onBeforeUnmount(() => {
      clearInterval(t);
      t = null;
    });
    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
    };
  },
};
</script>
<style lang="less" scoped>
.crousel {
  height: 100%;
  width: 100%;
  .inner {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>