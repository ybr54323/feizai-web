<script setup>
import HeaderVue from "@/components/Header.vue";
import { ref, onMounted, nextTick } from "vue";

const list = ref(new Array(1e4).fill(0).map((z, i) => i));
const visibleList = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {};
onMounted(() => {
  visibleList.value = list.value.slice(0, 20);
});
</script>

<template>
  <header-vue></header-vue>
  <div class="wrap text-gray-600 font-mono">
    <div class="con p-4">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          v-for="item in visibleList"
          class="item p-4 overflow-auto shadow-lg mb-4 w-11/12 mx-auto rounded-lg"
        >
          <img
            class="mx-auto object-contain w-4/5"
            src="@/assets/img.png"
            alt="img"
          />
          <div class="pt-6">
            <blockquote>
              <p class="text-lg">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <div class="flex items-center justify-center">
              <van-icon class="cursor-pointer" name="like-o" />
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .con {
    overflow: auto;
    .item {
    }
  }
}
</style>
