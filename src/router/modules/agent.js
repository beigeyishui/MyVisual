/** When your routing agent is too long, you can split it into small modules **/

import Layout from '@/layout'

const agentRouter = {
  path: '/agent',
  component: Layout,
  redirect: '/agent/archives-table',
  name: 'Agent',
  meta: {
    title: '干员',
    icon: 'table'
  },
  children: [
    {
      path: 'archives-table',
      component: () => import('@/views/agent/archives-table'),
      name: 'AgentArchivesTable',
      meta: { title: '干员档案' }
    }
  ]
}
export default agentRouter
