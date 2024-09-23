import { createContext } from "react"

export type LocationContextType = {
  location: string
  setLocation: (location: string) => void
}

const initialState = {
  location: "Tokyo",
  setLocation: () => {},
} satisfies LocationContextType

export const LocationContext = createContext<LocationContextType>(initialState)
