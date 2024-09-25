import {
  addDays as dateFnsAddDays,
  format as dateFnsFormat,
  isSameDay as dateFnsIsSameDay,
  isWithinInterval as dateFnsIsWithinInterval,
} from "date-fns"
import { toZonedTime as dateFnsTzToZonedTime } from "date-fns-tz"

export function format(...props: Parameters<typeof dateFnsFormat>) {
  return dateFnsFormat(...props)
}

export function isSameDay(...props: Parameters<typeof dateFnsIsSameDay>) {
  return dateFnsIsSameDay(...props)
}

export function isWithinInterval(...props: Parameters<typeof dateFnsIsWithinInterval>) {
  return dateFnsIsWithinInterval(...props)
}

export function toZonedTime(...props: Parameters<typeof dateFnsTzToZonedTime>) {
  return dateFnsTzToZonedTime(...props)
}

export function addDays(...props: Parameters<typeof dateFnsAddDays>) {
  return dateFnsAddDays(...props)
}

/** Tokyo時間に変換 */
export function convertToTokyoTime(date: Date) {
  return toZonedTime(date, "Asia/Tokyo")
}
