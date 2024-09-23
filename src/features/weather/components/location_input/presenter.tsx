import { ReactNode } from "react"

import { Input } from "@/components/ui/Input"

import * as styles from "./presenter.css"

export type PresenterProps = {
  inputLocation: string
  isFocused: boolean
  setInputLocation: (input: string) => void
  handleFocus: () => void
  isShowAutocomplete: boolean
  autocompleteNode: ReactNode
}

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <div className={styles.module}>
      <Input
        value={props.inputLocation}
        onChange={(e) => props.setInputLocation(e.target.value)}
        onFocus={props.handleFocus}
        placeholder="Location"
      />
      {props.isShowAutocomplete ? props.autocompleteNode : null}
    </div>
  )
}
