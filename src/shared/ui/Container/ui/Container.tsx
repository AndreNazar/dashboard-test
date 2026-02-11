import type { PropsWithChildren, ReactNode } from "react"
import styles from "./Container.module.scss"

type ContainerProps = {
  title: string
  feature?: ReactNode
} & PropsWithChildren

const ContainerComponent = ({ title, feature, children }: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{title}</h2>
        {feature && <div>{feature}</div>}
      </div>
      {children}
    </div>
  )
}

export const Container = ContainerComponent
