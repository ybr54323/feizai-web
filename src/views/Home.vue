<script setup>
import { ref, onMounted, nextTick } from "vue";

const list = ref(new Array(1e4).fill(0).map((z, i) => i));
const visibleList = ref([]);
const viewH = ref(500);
const itemH = ref(60);
const scrollH = ref(0);
const showNum = ref(0);
const offsetY = ref(0);

onMounted(() => {
  scrollH.value = list.value.length * itemH.value;
  showNum.value = Math.floor(viewH.value / itemH.value) + 4;

  visibleList.value = list.value.slice(0, showNum.value);
});
function handleScroll(e) {
  const scrollTop = e.target.scrollTop;

  offsetY.value = scrollTop - (scrollTop % itemH.value);
  console.log(scrollTop, scrollTop % itemH.value);
  visibleList.value = list.value.slice(
    Math.floor(scrollTop / itemH.value),
    Math.floor(scrollTop / itemH.value) + showNum.value
  );
}
</script>

<template>
  <div class="wrap">
    <div :style="`height:${viewH}px`" class="con" @scroll="handleScroll">
      <div
        v-for="item in visibleList"
        :style="`transform:translateY(${offsetY}px)`"
        class="item"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  max-height: 100%;

  .con {
    height: 100%;

    overflow: auto;
    .item {
      height: 60px;
    }
  }
}
</style>
