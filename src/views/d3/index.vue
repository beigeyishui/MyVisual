/** 模板 */
<template>
  <div class="base-container">
    <div ref="chartContainer" class="chart-container" />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      width: null,
      height: null
    }
  },
  mounted() {
    this.width = this.$refs.chartContainer.clientWidth
    this.height = this.$refs.chartContainer.clientHeight
  },
  methods: {

  }
}
</script>

<style scoped>
.base-container{
  position: relative;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 84px);
  background: #F3F3F3;
}

.chart-container {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
}
</style>
