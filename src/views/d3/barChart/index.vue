/** 模板 */
<template>
  <div class="base-container">
    <div ref="chartContainer" class="chart-container">
      <div ref="chart" :style="{'width': `${chart_width}px`, 'height': `${chart_height}px`}" />
    </div>
  </div>
</template>
<script>
import json from './components/data.json'
import * as Chart from './components/chart/chart.js'
export default {
  name: 'Index',
  data() {
    return {
      chart_width: null,
      chart_height: null
    }
  },
  mounted() {
    this.chart_width = this.$refs.chartContainer.clientWidth
    this.chart_height = this.$refs.chartContainer.clientHeight
    this.init()
  },
  methods: {
    init() {
      console.log(json)

      Chart.setCfg({
        container: this.$refs.chart,
        width: this.chart_width,
        height: this.chart_height,
        background: '#ffffff'
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
  background: #F3F3F3;
}

.chart-container {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
}
</style>

