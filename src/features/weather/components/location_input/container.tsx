import { Suspense, useCallback, useState } from "react"

import { useDebouncedValue } from "@/hooks"

import * as Autocomplete from "../autocomplete"
import { Presenter, PresenterProps } from "./presenter"

export const Container = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputLocation, setInputLocation] = useState<string>("")
  const [debouncedValue] = useDebouncedValue(inputLocation, 300)

  const onClickHandler = useCallback((location: string) => {
    setInputLocation(location)
    setIsFocused(false)
  }, [])

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
