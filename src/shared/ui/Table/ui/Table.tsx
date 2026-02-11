import type { ReactNode } from "react"
import styles from "./Table.module.scss"

type TableProps = {
  data: {
    headers: string[]
    items: ReactNode[][]
  }
}

const TableComponent = ({ data }: TableProps) => {
  const styleColumns = { gridTemplateColumns: `repeat(${data.headers.length}, 1fr)` }

  return (
    <div className={styles.table}>
      <div className={styles.header} style={styleColumns}>
        {data.headers.map((header, index) => (
          <div className={styles.cell} key={index}>
            {header}
          </div>
        ))}
      </div>
      <div className={styles.items}>
        {data.items.map((row, index) => (
          <div className={styles.row} style={styleColumns} key={index}>
            {row.map((item, index) => (
              <div className={styles.cell} key={index}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export const Table = TableComponent
