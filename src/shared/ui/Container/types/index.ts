import type { PropsWithChildren, ReactNode } from "react"

export type ContainerProps = {
  title: string
  feature?: ReactNode
} & PropsWithChildren
