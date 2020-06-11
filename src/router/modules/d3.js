/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const d3Router = {
  path: '/d3',
  component: Layout,
  redirect: 'noRedirect',
  name: 'd3',
  meta: {
    title: 'D3',
    icon: 'chart'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/d3/index'),
      name: 'd3-index',
      meta: { title: '首页', noCache: true }
    },
    {
      path: 'barChart',
      component: () => import('@/views/d3/barChart/index'),
      name: 'd3-barChart',
      meta: { title: '柱状图', noCache: true }
    },
    {
      path: 'legend',
      component: () => import('@/views/d3/legend/index'),
      name: 'd3-legend',
      meta: { title: '图例', noCache: true }
    }
  ]
}

export default d3Router
