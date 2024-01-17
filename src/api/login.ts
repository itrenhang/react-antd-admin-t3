import request from './index';

// 用户登录
export const login = (data: any) => {
  return request({
    method: 'post',
    url: `/api/admin/auth/token`,
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'get',
    url: `/api/admin/auth/me/`
  })
}
