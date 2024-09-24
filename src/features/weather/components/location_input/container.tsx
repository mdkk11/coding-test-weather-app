import { Suspense, useCallback, useState } from "react"

import { useWeatherParams } from "@/features/weather/hooks"
import { useLocationContext } from "@/features/weather/providers/location/useLocationContext"
import { useDebouncedValue } from "@/hooks"

import * as Autocomplete from "../autocomplete"
import { Presenter, PresenterProps } from "./presenter"

export const Container = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputLocation, setInputLocation] = useState<string>("")
  const [debouncedValue] = useDebouncedValue(inputLocation, 300)

  const { setSearchParams, date } = useWeatherParams({})

  const { setLocation } = useLocationContext()

  const onClickHandler = useCallback(
    (location: string) => {
      setLocation(location)
      setInputLocation(location)
      setIsFocused(false)
      setSearchParams({ location, date })
    },
    [setLocation, setSearchParams, date],
  )

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const isShowAutocomplete = !!(isFocused && debouncedValue.length)

  const autoCompleteContainerProps = {
    location: debouncedValue,
    onClickHandler,
  } satisfies Autocomplete.ContainerProps

  const props = {
    inputLocation,
    isFocused,
    setInputLocation,
    handleFocus,
    isShowAutocomplete,
    autocompleteNode: (
      <Suspense fallback={<Autocomplete.Loading />}>
        <Autocomplete.Container {...autoCompleteContainerProps} />
      </Suspense>
    ),
  } satisfies PresenterProps
  return <Presenter {...props} />
}
