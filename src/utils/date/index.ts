import { format as dateFnsFormat } from "date-fns"

export function format(...props: Parameters<typeof dateFnsFormat>) {
  return dateFnsFormat(...props)
}
