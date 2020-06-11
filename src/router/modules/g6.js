/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const g6Router = {
  path: '/g6',
  component: Layout,
  redirect: 'noRedirect',
  name: 'g6',
  meta: {
    title: 'G6',
    icon: 'chart'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/g6/index'),
      name: 'index',
      meta: { title: '首页', noCache: true }
    },
    {
      path: 'tree',
      component: () => import('@/views/g6/tree/index'),
      name: 'tree',
      meta: { title: '树图', noCache: true }
    }
  ]
}

export default g6Router
