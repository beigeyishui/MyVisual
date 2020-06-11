/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const zrenderRouter = {
  path: '/zrender',
  component: Layout,
  redirect: 'noRedirect',
  name: 'zrender',
  meta: {
    title: 'ZRender',
    icon: 'chart'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/zrender/index'),
      name: 'index',
      meta: { title: 'ZRender', noCache: true }
    }
  ]
}

export default zrenderRouter
