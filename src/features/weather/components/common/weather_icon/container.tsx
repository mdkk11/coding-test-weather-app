import { Cloud, CloudRain, LucideIcon, Snowflake, Sun } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"

import { WeatherCategoryType } from "@/features/weather/const"

import { Presenter, PresenterProps } from "./presenter"

type ContainerProps = {
  weatherCategory: WeatherCategoryType
} & Omit<ComponentPropsWithoutRef<"svg">, "ref">

export const Container = ({ weatherCategory, ...props }: ContainerProps) => {
  const icons = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: CloudRain,
    snowy: Snowflake,
  } as const satisfies Record<WeatherCategoryType, LucideIcon>

  const Icon = icons[weatherCategory]

  const presenterProps = {
    Icon,
    ...props,
  } satisfies PresenterProps

  return <Presenter {...presenterProps} />
}
