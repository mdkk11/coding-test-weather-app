import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { Section } from "@/components/ui/Section"
import * as LocationInput from "@/features/weather/components/location_input"
import * as WeatherOverview from "@/features/weather/components/weather_overview"
import { LocationContextProvider } from "@/features/weather/providers/location/provider"

export default function WeatherForecastPage() {
  return (
    <LocationContextProvider>
      <Section>
        <LocationInput.Container />
        <ErrorBoundary fallbackRender={WeatherOverview.Error}>
          <Suspense fallback={<WeatherOverview.Loading />}>
            <WeatherOverview.Container />
          </Suspense>
        </ErrorBoundary>
      </Section>
    </LocationContextProvider>
  )
}
