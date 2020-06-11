/** 模板 */
<template>
  <div class="base-container">
    <div id="chart" ref="chart" style="width: 100%; height: 100%; background: bisque;" />
  </div>
</template>

<script>
import zrender from 'zrender'
export default {
  name: 'Index',
  data() {
    return {
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const zr = zrender.init(this.$refs.chart)
      var circle = new zrender.Circle({
        shape: {
          cx: 150,
          cy: 50,
          r: 40
        },
        style: {
          fill: '#ff0000',
          stroke: '#F00'
        }
      })
      circle.on('click', function(e) {
        console.log(this)
        console.log(circle)
      })
      zr.add(circle)
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
}
</style>

