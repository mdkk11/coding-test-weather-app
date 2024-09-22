import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Suspense } from "react"

import { queryConfig } from "@/libs/react-query"

import { Loading } from "./loading"

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: queryConfig,
  })

  return (
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        {import.meta.env.DEV && <ReactQueryDevtools />}
        {children}
      </QueryClientProvider>
    </Suspense>
  )
}
