import request from '@/utils/request'

export function agentArchivesList(query) {
  return request({
    baseURL: process.env.VUE_APP_TABLE_API,
    url: '/api/agent-archives',
    method: 'get',
    params: query
  })
}
