/** 模板 */
<template>
  <div ref="base" class="base-container">
    <div ref="chartContainer" class="chart-container">
      <div ref="legend" style="border: 1px solid #CCC;" />
    </div>

  </div>
</template>

<script>
import { legends } from './components/legend'
export default {
  name: 'Index',
  data() {
    return {
      width: null,
      height: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.width = this.$refs.chartContainer.clientWidth
      this.height = this.$refs.chartContainer.clientHeight
      this.init()
    })
  },
  methods: {
    init() {
      legends({
        container: this.$refs.legend,
        width: this.width,
        height: 30
      })
    }
  }
}
</script>

<style scoped>
.base-container{
  position: relative;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 84px);
  background: #F9FAFF;
}

.chart-container {
  width: 100%;
  height: 100%;
}
</style>

