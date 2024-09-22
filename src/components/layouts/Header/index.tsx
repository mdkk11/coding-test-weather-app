import { Link } from "react-router-dom"

import * as styles from "./index.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        Weather App
      </Link>
    </header>
  )
}
