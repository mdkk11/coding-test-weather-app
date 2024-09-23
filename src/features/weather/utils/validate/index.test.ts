import { describe, expect, test } from "vitest"

import { validateDayRange } from "."

describe("validateDayRange", () => {
  test("有効範囲内であれば、その日の範囲を返すこと", () => {
    expect(validateDayRange(1)).toBe(1)
    expect(validateDayRange(14)).toBe(14)
  })

  test("有効範囲内外の場合場合、エラーになること。", () => {
    expect(() => validateDayRange(0)).toThrow("Day is out of specified range")
    expect(() => validateDayRange(15)).toThrow("Day is out of specified range")
  })
})
