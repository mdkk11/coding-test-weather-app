import { renderHook } from "@testing-library/react"
import { useSearchParams } from "react-router-dom"
import { describe, expect, it, Mock, vitest } from "vitest"

import { format } from "@/utils"

import { useWeatherParams } from "./"

vitest.mock("react-router-dom", () => ({
  useSearchParams: vitest.fn(),
}))

describe("useWeatherParams", () => {
  it("初期値を返すこと", () => {
    const setSearchParams = vitest.fn()
    ;(useSearchParams as Mock).mockReturnValue([new URLSearchParams(), setSearchParams])

    const { result } = renderHook(() => useWeatherParams({ defaultLocation: "Tokyo" }))

    expect(result.current.location).toBe("Tokyo")
    expect(result.current.date).toBe(format(new Date(), "yyyy-MM-dd"))
    expect(result.current.setSearchParams).toBe(setSearchParams)
  })

  it("引数で渡した値が正常に処理される", () => {
    const setSearchParams = vitest.fn()
    const searchParams = new URLSearchParams()
    searchParams.set("location", "Sapporo")
    searchParams.set("date", "2024-09-30")
    ;(useSearchParams as Mock).mockReturnValue([searchParams, setSearchParams])

    const { result } = renderHook(() => useWeatherParams({ defaultLocation: "Tokyo" }))

    expect(result.current.location).toBe("Sapporo")
    expect(result.current.date).toBe("2024-09-30")
    expect(result.current.setSearchParams).toBe(setSearchParams)
  })
})
