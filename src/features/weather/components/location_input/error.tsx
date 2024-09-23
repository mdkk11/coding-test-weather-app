import { FallbackProps } from "react-error-boundary"

import { Alert } from "@/components/ui/Alert"

export const Error = (props: FallbackProps) => {
  return (
    <Alert>
      <pre>{props.error.message}</pre>
    </Alert>
  )
}
