export const getDashBoard = async () => {
  return useFetch('/api/admin/dashboard');
}
