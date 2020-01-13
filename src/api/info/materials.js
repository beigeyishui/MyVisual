import request from '@/utils/request2'

export function fetchList(query) {
  return request({
    url: '/material/list',
    method: 'get',
    params: query
  })
}
