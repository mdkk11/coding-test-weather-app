import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { HeadGroup } from "@/components/ui/HeadGroup"
import { Section } from "@/components/ui/Section"
import * as BackButton from "@/features/weather/components/back_button"
import * as LocationInput from "@/features/weather/components/location_input"
import * as SpecificDate from "@/features/weather/components/specific_date"
import * as WeatherSpecificDay from "@/features/weather/components/weather_specific_day"
import { LocationContextProvider } from "@/features/weather/providers/location/provider"

export default function SpecificDay() {
  return (
    <LocationContextProvider>
      <Section>
        <HeadGroup>
          <BackButton.Container />
          <SpecificDate.Container />
        </HeadGroup>
        <ErrorBoundary fallbackRender={LocationInput.Error}>
          <LocationInput.Container />
        </ErrorBoundary>
        <ErrorBoundary fallbackRender={WeatherSpecificDay.Error}>
          <Suspense fallback={<WeatherSpecificDay.Loading />}>
            <WeatherSpecificDay.Container />
          </Suspense>
        </ErrorBoundary>
      </Section>
    </LocationContextProvider>
  )
}
