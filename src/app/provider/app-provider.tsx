import { Suspense } from "react"

import { Loading } from "./loading"

type Props = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: Props) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}
