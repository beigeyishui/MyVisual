/** 柱状图 */
<template>
  <div class="chart-container">
    <div id="main" style="width: 100%; height: 100%;" />
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'LineChart',
  data() {
    return {
      chart: null,
      width: null,
      height: null
    }
  },
  mounted() {
    this.width = document.querySelector('.chart-container').offsetWidth
    this.height = document.querySelector('.chart-container').offsetHeight

    this.initChart()
  },
  methods: {
    getSize() {
      // const
    },
    initChart() {
      this.chart = echarts.init(document.querySelector('#main'))
      this.chart.setOption({
        title: {
          text: '简单的柱状图示例'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar'
        }]
      })
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  padding: 20px;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

