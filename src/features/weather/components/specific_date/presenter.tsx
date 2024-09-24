import * as styles from "./presenter.css"

export type PresenterProps = {
  date: string
}

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <time data-testid="datetime" dateTime={props.date} className={styles.module}>
      {props.date}
    </time>
  )
}
