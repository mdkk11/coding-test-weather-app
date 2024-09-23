import { DayRange } from "@/features/weather/services/forecast"

function isDaysRange(value: number): value is DayRange {
  return value >= 1 && value <= 14
}

export function validateDayRange(dayRange: number): DayRange {
  if (!isDaysRange(dayRange)) {
    throw new Error("Day is out of specified range")
  }
  return dayRange
}
