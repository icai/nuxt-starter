import type { NitroFetchRequest } from 'nitropack'
import type { KeyOfRes } from 'nuxt/dist/app/composables/asyncData'
import type { UseFetchOptions } from '#app'

type FetchOptions<T> = UseFetchOptions<
  T extends void ? unknown : T,
  (res: T extends void ? unknown : T) => T extends void ? unknown : T,
  KeyOfRes<(res: T extends void ? unknown : T) => T extends void ? unknown : T>>
| undefined



export async function useMyFetch<T>(
  request: NitroFetchRequest,
  opts?: FetchOptions<T>,
) {
  const router = useRouter()
  const config = useRuntimeConfig()
  const token = useCookie<string>('token')

  const options: FetchOptions<T> = {
    ...opts,
    baseURL: config.public.baseURL,
    onResponseError: ({ response }) => {
      if (response.status === 401)
        router.push('/auth/login')
    },
  }
  if (token.value) {
    options.headers = {
      'Authorization': `Bearer ${token.value}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }


  const res = await useFetch<T>(request, options)
  // only return response data
  return res?.data?.value
}



export const request = {
  get: <T>(url: string, opts?: FetchOptions<T>) => useMyFetch<T>(url, opts),
  post: <T>(url: string, opts?: FetchOptions<T>) => useMyFetch<T>(url, { ...opts, method: 'POST' }),
}
