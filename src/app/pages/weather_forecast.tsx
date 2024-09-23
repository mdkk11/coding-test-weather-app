import { Section } from "@/components/ui/Section"
import * as LocationInput from "@/features/weather/components/location_input"

export default function WeatherForecastPage() {
  return (
    <Section>
      <LocationInput.Container />
    </Section>
  )
}
