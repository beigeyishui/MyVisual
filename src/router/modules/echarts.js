/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const echartsRouter = {
  path: '/echarts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ECharts',
  meta: {
    title: 'ECharts',
    icon: 'chart'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/echarts/index'),
      name: 'index',
      meta: { title: '首页', noCache: true }
    },
    {
      path: 'lineChart',
      component: () => import('@/views/echarts/lineChart/index'),
      name: 'lineChart',
      meta: { title: '折线图', noCache: true }
    },
    {
      path: 'barChart',
      component: () => import('@/views/echarts/barChart/index'),
      name: 'barChart',
      meta: { title: '柱状图', noCache: true }
    }
  ]
}

export default echartsRouter
