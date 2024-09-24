import { renderHook } from "@testing-library/react"
import { useLocation } from "react-router-dom"
import { describe, expect, MockedFunction, test, vitest } from "vitest"

import { useLinkProps } from "./"

vitest.mock("react-router-dom", () => ({
  useLocation: vitest.fn(),
}))

describe("useLinkProps", () => {
  test("paramが追加されること", () => {
    // useLocationのモックを設定
    const mockUseLocation = useLocation as MockedFunction<typeof useLocation>
    mockUseLocation.mockReturnValue({ search: "?existingParam=value" } as ReturnType<
      typeof useLocation
    >)

    const { result } = renderHook(() => useLinkProps())

    const linkProps = result.current.generateLinkProps({
      pathname: "/test",
      newParams: { newParam: "newValue" },
    })

    expect(linkProps).toEqual({
      to: {
        pathname: "/test",
        search: "?existingParam=value&newParam=newValue",
      },
    })
  })

  test("指定したparamが削除されること", () => {
    const mockUseLocation = useLocation as MockedFunction<typeof useLocation>
    mockUseLocation.mockReturnValue({
      search: "?param1=value1&param2=value2&param3=value3",
    } as ReturnType<typeof useLocation>)

    const { result } = renderHook(() => useLinkProps())

    const linkProps = result.current.generateLinkProps({
      pathname: "/test",
      removeParams: ["param2"],
    })

    expect(linkProps).toEqual({
      to: {
        pathname: "/test",
        search: "?param1=value1&param3=value3",
      },
    })
  })

  test("存在するparamの場合は上書きをすること", () => {
    const mockUseLocation = useLocation as MockedFunction<typeof useLocation>
    mockUseLocation.mockReturnValue({ search: "?existingParam=oldValue" } as ReturnType<
      typeof useLocation
    >)

    const { result } = renderHook(() => useLinkProps())

    const linkProps = result.current.generateLinkProps({
      pathname: "/test",
      newParams: { existingParam: "newValue" },
    })

    expect(linkProps).toEqual({
      to: {
        pathname: "/test",
        search: "?existingParam=newValue",
      },
    })
  })
})
