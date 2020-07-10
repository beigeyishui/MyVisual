<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
/* 隐藏横向滚动条 */
.el-scrollbar__wrap{
  overflow-x: hidden;
}
</style>
