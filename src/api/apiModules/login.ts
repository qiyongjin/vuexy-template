import axiosIns from '@/plugins/axios'

export const login = () => {
  return axiosIns.get('api/index')
}
