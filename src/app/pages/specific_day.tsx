import { Section } from "@/components/ui/Section"
import * as LocationInput from "@/features/weather/components/location_input"
import { LocationContextProvider } from "@/features/weather/providers/location/provider"

export default function SpecificDay() {
  return (
    <LocationContextProvider>
      <Section>
        <LocationInput.Container />
      </Section>
    </LocationContextProvider>
  )
}
