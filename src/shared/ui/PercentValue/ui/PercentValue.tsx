import { DownIcon, UpIcon } from "@assets/index"
import styles from "./PercentValue.module.scss"

type PercentValueProps = {
  value: number
  size?: "small" | "medium"
  position?: "left" | "right"
  status?: "up" | "down"
}

const PercentValueComponent = ({ value, size = "medium", position = "left", status = "up" }: PercentValueProps) => {
  return (
    <div className={styles.container + " " + styles[size] + " " + styles[position]}>
      {status === "down" ? <DownIcon /> : <UpIcon />}
      <p className={styles.percent}>{value}%</p>
    </div>
  )
}

export const PercentValue = PercentValueComponent
