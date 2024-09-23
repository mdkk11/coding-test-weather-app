import { LocationData } from "@/features/weather/models"

import * as styles from "./presenter.css"

export type PresenterProps = {
  locationList: LocationData
  onClickHandler: (location: string) => void
}

export const Presenter = ({ ...props }: PresenterProps) => {
  if (props.locationList.length === 0) {
    return <div className={styles.noLocation}>一致する地名がありません</div>
  }

  return (
    <LocationList>
      {props.locationList.map(({ id, name }) => (
        <LocationListItem key={id}>
          <button
            onClick={() => props.onClickHandler(name)}
            type="button"
            className={styles.listItemButton}
          >
            {name}
          </button>
        </LocationListItem>
      ))}
    </LocationList>
  )
}

const LocationList = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>
}

const LocationListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className={styles.listItem}>{children}</li>
}
