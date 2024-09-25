import { DayRange } from "@/features/weather/services/forecast"
import { addDays, isWithinInterval } from "@/utils"

function isDaysRange(value: number): value is DayRange {
  return value >= 1 && value <= 14
}

export function validateDayRange(dayRange: number): DayRange {
  if (!isDaysRange(dayRange)) {
    throw new Error("Day is out of specified range")
  }
  return dayRange
}

function isWithinDaysRange(target: Date, start: Date, range: number): boolean {
  return isWithinInterval(target, {
    start,
    end: addDays(start, range),
  })
}

export function validateDateRange(target: Date, start: Date, range: number): void {
  if (!isWithinDaysRange(target, start, range)) {
    throw new Error(`Date must be within ${range} days`)
  }
}
