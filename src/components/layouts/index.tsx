import { Outlet } from "react-router-dom"

import { Header } from "./Header"
import * as styles from "./index.css"

export const Layout = () => {
  return (
    <div className={styles.module}>
      <Header />
      <div className={styles.layout}>
        <Outlet />
      </div>
    </div>
  )
}
