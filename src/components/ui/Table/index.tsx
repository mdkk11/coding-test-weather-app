import { ComponentPropsWithRef, createContext, forwardRef, ReactNode, useContext } from "react"

import * as styles from "./index.css"

const TableContext = createContext<boolean | null>(null)

type Props = React.HTMLAttributes<HTMLDivElement>

const Table = forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <TableContext.Provider value={true}>
      <div {...props} ref={ref}>
        <table className={styles.table}>{children}</table>
      </div>
    </TableContext.Provider>
  )
})

const useTableContext = () => {
  const context = useContext(TableContext)
  if (context === null) {
    throw new Error("This component must be used within a <Table> component.")
  }
  return context
}

const THead = ({
  children,
  ...props
}: { children: ReactNode } & ComponentPropsWithRef<"thead">) => {
  useTableContext()
  return <thead {...props}>{children}</thead>
}

const TBody = ({
  children,
  ...props
}: { children: ReactNode } & ComponentPropsWithRef<"tbody">) => {
  useTableContext()
  return <tbody {...props}>{children}</tbody>
}

const Tr = ({ children, ...props }: { children: ReactNode } & ComponentPropsWithRef<"tr">) => {
  useTableContext()
  return <tr {...props}>{children}</tr>
}

const Th = ({ children, ...props }: { children: ReactNode } & ComponentPropsWithRef<"th">) => {
  useTableContext()
  return <th {...props}>{children}</th>
}

const Td = ({ children, ...props }: { children: ReactNode } & ComponentPropsWithRef<"td">) => {
  useTableContext()
  return <td {...props}>{children}</td>
}

export { Table, TBody, Td, Th, THead, Tr }
