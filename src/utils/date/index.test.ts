import { parseISO } from "date-fns"
import { describe, expect, test } from "vitest"

import { format } from "./"

describe("Date Functions", () => {
  test("format: 正常にフォーマットされること", () => {
    const date = parseISO("2024-09-30")
    const result = format(date, "yyyy-MM-dd")
    expect(result).toBe("2024-09-30")
  })
})
