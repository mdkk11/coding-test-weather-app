import { useSuspenseQuery } from "@tanstack/react-query"

import { fetchMatchedLocation } from "@/features/weather/services/search"

type Props = Parameters<typeof fetchMatchedLocation>

export const useQueryMatchedLocation = (...props: Props) => {
  return useSuspenseQuery({
    queryKey: ["search", ...props],
    queryFn: () => fetchMatchedLocation(...props).then((data) => data),
  })
}
