import { Presenter, PresenterProps } from "./presenter"

export type ContainerProps = Pick<PresenterProps, "weatherInfo">

export const Container = ({ ...props }: ContainerProps) => {
  const presenterProps = {
    weatherInfo: props.weatherInfo,
  } satisfies PresenterProps
  return <Presenter {...presenterProps} />
}
