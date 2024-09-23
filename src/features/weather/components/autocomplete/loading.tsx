import { Loader } from "@/components/ui/Loader"

import * as styles from "./loading.css"

export const Loading = () => {
  return (
    <div className={styles.module}>
      <Loader size="sm" />
    </div>
  )
}
