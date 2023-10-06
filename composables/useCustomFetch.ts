import type { UseFetchOptions } from 'nuxt/app';
import { defu } from 'defu';

export function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const {
    public: { apiUrl },
  } = useRuntimeConfig();
  const defaults: UseFetchOptions<T> = {
    key: url,
    headers: {
      'Content-Type': 'application/json',

      // Accept: 'application/json',
    },
    mode: 'no-cors',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cache: false,
  };
  const requestUrl = new URL(url, apiUrl as string);
  const params = defu(options, defaults);
  return useFetch(requestUrl.href, params);
}
