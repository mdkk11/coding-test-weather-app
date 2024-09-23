import { useQueryMatchedLocation } from "@/features/weather/hooks"

import { Presenter, PresenterProps } from "./presenter"

export type ContainerProps = {
  location: string
  onClickHandler: (location: string) => void
}

export const Container = ({ ...props }: ContainerProps) => {
  const { data: locationList } = useQueryMatchedLocation(props.location)

  const presenterProps = {
    locationList,
    onClickHandler: props.onClickHandler,
  } satisfies PresenterProps

  return <Presenter {...presenterProps} />
}
