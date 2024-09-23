import { Location } from "@/features/weather/models/common"

import { Presenter, PresenterProps } from "./presenter"

export type ContainerProps = {
  location: Location
}

export const Container = ({ ...props }: ContainerProps) => {
  const presenterProps = {
    name: props.location.name,
    region: props.location.region,
    country: props.location.country,
  } satisfies PresenterProps
  return <Presenter {...presenterProps} />
}
