/** 模板 */
<template>
  <div class="base-container">
    <div id="chart" ref="chart" style="width: 100%; height: 100%;" />
  </div>
</template>

<script>
import json from '@/json/tree.json'
import G6 from '@antv/g6'
export default {
  name: 'Index',
  data() {
    return {
    }
  },
  mounted() {
    console.log(json)
    this.initChart()
  },
  methods: {
    initChart() {
      const width = this.$refs.chart.scrollWidth
      const height = this.$refs.chart.scrollHeight || 500
      const graph = new G6.TreeGraph({
        container: 'chart',
        width,
        height,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                const data = item.get('model').data
                data.collapsed = collapsed
                return true
              }
            },
            'drag-canvas',
            'zoom-canvas'
          ]
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5]
          ],
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9'
          }
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#A3B1BF'
          }
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId(d) {
            return d.id
          },
          getHeight: function getHeight() {
            return 16
          },
          getWidth: function getWidth() {
            return 16
          },
          getVGap: function getVGap() {
            return 10
          },
          getHGap: function getHGap() {
            return 100
          }
        }
      })

      graph.node(function(node) {
        return {
          label: node.id,
          labelCfg: {
            offset: 10,
            position: node.children && node.children.length > 0 ? 'left' : 'right'
          }
        }
      })

      graph.data(json)
      graph.render()
      graph.fitView()
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

