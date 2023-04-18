import { NitroFetchRequest } from 'nitropack'

export function apiRequest<T>(
    request: NitroFetchRequest,
    opts?: any
) {
    const config = useRuntimeConfig()

    return useFetch<T>(request, {
        baseURL: config.public.apiBase,
        ...opts,
    })
}