import { useContext } from "react"

import { LocationContext } from "./context"

export const useLocationContext = () => {
  const context = useContext(LocationContext)
  if (!context) {
    throw new Error("LocationContext must be used within a LocationProvider")
  }

  return context
}
