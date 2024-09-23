import { describe, expect, test } from "vitest"

import { getWeatherCategory } from "./"

describe("getWeatherCategory", () => {
  test("sunny", () => {
    expect(getWeatherCategory(1000)).toBe("sunny")
  })

  test("cloudy", () => {
    expect(getWeatherCategory(1003)).toBe("cloudy")
    expect(getWeatherCategory(1006)).toBe("cloudy")
  })

  test("rainy", () => {
    expect(getWeatherCategory(1063)).toBe("rainy")
    expect(getWeatherCategory(1072)).toBe("rainy")
  })

  test("snowy", () => {
    expect(getWeatherCategory(1066)).toBe("snowy")
    expect(getWeatherCategory(1069)).toBe("snowy")
  })
})
