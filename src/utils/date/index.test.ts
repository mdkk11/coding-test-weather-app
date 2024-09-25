import { parseISO } from "date-fns"
import { describe, expect, test } from "vitest"

import { addDays, format, isSameDay, isWithinInterval, toZonedTime } from "./"

describe("Date Functions", () => {
  test("format: 正常にフォーマットされること", () => {
    const date = parseISO("2024-09-30")
    const result = format(date, "yyyy-MM-dd")
    expect(result).toBe("2024-09-30")
  })
  test("isSameDay: 同日の比較が正常に行われること", () => {
    const date1 = parseISO("2024-09-30")
    const date2 = parseISO("2024-09-30")
    const result = isSameDay(date1, date2)
    expect(result).toBe(true)
  })

  test("isSameDay: 同日の比較が正常に行われること（異常系）", () => {
    const date1 = parseISO("2024-09-30")
    const date2 = parseISO("2024-09-31")
    const result = isSameDay(date1, date2)
    expect(result).toBe(false)
  })

  test("isWithinInterval: 日付が区間内にあるか正常に判定されること", () => {
    const date = parseISO("2024-09-30")
    const interval = {
      start: parseISO("2024-09-01"),
      end: parseISO("2024-09-30"),
    }
    const result = isWithinInterval(date, interval)
    expect(result).toBe(true)
  })

  test("isWithinInterval: 日付が区間内にあるか正常に判定されること（異常系）", () => {
    const date = parseISO("2024-08-31")
    const interval = {
      start: parseISO("2024-09-01"),
      end: parseISO("2024-09-30"),
    }
    const result = isWithinInterval(date, interval)
    expect(result).toBe(false)
  })

  test("toZonedTime: 指定のタイムゾーンに正常に変換されていること", () => {
    const date = parseISO("2024-09-25T00:00:00Z")
    const timeZone = "Asia/Tokyo"
    const zonedDate = toZonedTime(date, timeZone)
    expect(zonedDate.getHours()).toBe(9) // 東京時間で9時
  })

  test("addDays: 指定日数が正常にプラスされること", () => {
    const date = parseISO("2024-09-20")
    const result = addDays(date, 5)
    const expectedDate = parseISO("2024-09-25")
    expect(result).toEqual(expectedDate)
  })
})
