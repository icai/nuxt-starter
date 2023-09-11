// import { request } from '@/composables/request';

export const getDashBoard = async () => {
  return request.get('/api/admin/dashboard/dashboard');
}

export const getPermissions = () => {
  return request.get('/api/auth/admin/permissions')
}

export const useLogin = async (data: object) => {
  return request.post('/api/auth/admin/login', { body: data })
}

export const useLogout = async () => {
  return request.post('/api/auth/admin/logout')
}

export const getUser = async () => {
  return request.get('/api/auth/admin/user')
}
