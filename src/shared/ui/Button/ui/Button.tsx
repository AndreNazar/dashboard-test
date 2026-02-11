import type { PropsWithChildren } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {} & PropsWithChildren

const ButtonComponent = ({ children }: ButtonProps) => {
  return <div className={styles.button}>{children}</div>
}

export const Button = ButtonComponent
