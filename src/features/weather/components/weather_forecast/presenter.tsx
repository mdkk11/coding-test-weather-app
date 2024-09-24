import { Link } from "react-router-dom"

import { Table, TBody, Td, Th, THead, Tr } from "@/components/ui/Table"
import { LinkProps } from "@/hooks"
import { format } from "@/utils"

import * as styles from "./presenter.css"

export type PresenterProps = {
  tableHead: string[]
  tableBody: { code: number; icon: JSX.Element }[]
  linkProps: (date: string) => LinkProps
}

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <Table className={styles.module}>
      <THead>
        <Tr>
          {props.tableHead.map((v) => (
            <Th key={v.toString()}>
              <Link className={styles.link} {...props.linkProps(v)}>
                {format(new Date(v), "MM/dd")}
              </Link>
            </Th>
          ))}
        </Tr>
      </THead>
      <TBody>
        <Tr>
          {props.tableBody.map((v, i) => (
            <Td key={`${v.code * i}`.toString()}>
              <div className={styles.icon}>{v.icon}</div>
            </Td>
          ))}
        </Tr>
      </TBody>
    </Table>
  )
}
