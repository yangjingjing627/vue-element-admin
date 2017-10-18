import fetch from '@/utils/fetch'

export function apiGroupList() {
  return fetch({
    url: '/api_groups',
    method: 'get'
  })
}

export function fetchArticle() {
  return fetch({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return fetch({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}
