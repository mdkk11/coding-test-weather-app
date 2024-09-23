import { act, renderHook } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"

import { useDebouncedValue } from "./"

describe("useDebouncedValue", () => {
  test("初期値が反映されていること", () => {
    const { result } = renderHook(() => useDebouncedValue("initial", 1000))
    expect(result.current[0]).toBe("initial")
  })

  test("期待通り値が変化すること", async () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(({ value, wait }) => useDebouncedValue(value, wait), {
      initialProps: { value: "initial", wait: 1000 },
    })

    expect(result.current[0]).toBe("initial")

    rerender({ value: "changed", wait: 1000 })
    expect(result.current[0]).toBe("initial")

    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current[0]).toBe("initial")

    act(() => {
      vi.advanceTimersByTime(500)
    })
    expect(result.current[0]).toBe("changed")

    vi.useRealTimers()
  })

  test("Loadingオプションが動作すること", () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(
      ({ value, wait, options }) => useDebouncedValue(value, wait, options),
      { initialProps: { value: "initial", wait: 1000, options: { leading: true } } },
    )

    expect(result.current[0]).toBe("initial")

    rerender({ value: "changed", wait: 1000, options: { leading: true } })
    expect(result.current[0]).toBe("changed")

    rerender({ value: "changed again", wait: 1000, options: { leading: true } })
    expect(result.current[0]).toBe("changed")

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current[0]).toBe("changed again")

    vi.useRealTimers()
  })

  test("アンマウント時にキャンセルされること", () => {
    vi.useFakeTimers()
    const { result, unmount } = renderHook(() => useDebouncedValue("initial", 1000))

    expect(result.current[0]).toBe("initial")

    act(() => {
      result.current[1]()
    })

    unmount()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(result.current[0]).toBe("initial")

    vi.useRealTimers()
  })
})
