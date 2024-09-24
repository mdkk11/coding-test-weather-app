import { type LinkProps as ReactRouterLinkProps, useLocation } from "react-router-dom"

export type LinkProps = ReactRouterLinkProps

type GenerateLinkPropsOptions = {
  pathname: string
  newParams?: Record<string, string>
  removeParams?: string[]
}

export function useLinkProps() {
  const location = useLocation()

  function generateLinkProps({
    pathname,
    newParams = {},
    removeParams = [],
  }: GenerateLinkPropsOptions): LinkProps {
    const currentParams = new URLSearchParams(location.search)
    const newParamsObj = new URLSearchParams(newParams)

    removeParams.forEach((param) => currentParams.delete(param))

    for (const [key, value] of newParamsObj.entries()) {
      if (currentParams.has(key) && currentParams.get(key) === value) {
        continue
      }
      currentParams.set(key, value)
    }

    const mergedSearch = currentParams.toString()

    return {
      to: {
        pathname,
        search: mergedSearch ? `?${mergedSearch}` : "",
      },
    }
  }

  return { generateLinkProps }
}
