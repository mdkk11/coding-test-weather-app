import React, { useState } from "react"

import { LocationContext } from "./context"

export const LocationContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState("Tokyo")

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  )
}
