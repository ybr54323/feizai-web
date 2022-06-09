<script setup></script>

<template>
  <header
    class="flex items-center justify-center bg-white text-gray-600 text-2xl font-mono sticky outer"
  >
    <header class="top-0 sticky inner">feizai</header>
  </header>
</template>
<style scoped lang="less">
* {
  --outer: 80px;
  --inner: 60px;
}
.outer {
  height: var(--outer);
  top: calc(var(--inner) - var(--outer));
  .inner {
    line-height: var(--inner);
  }
}
</style>
