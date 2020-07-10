/** 模板 */
<template>
  <div>
    span
    <slot>bbb</slot>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    $_private_update() {
      // ... 私有方法
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

