import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import App from "../App"

describe("App.tsx", () => {
  test("should first", () => {
    render(<App />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Vite + React")
  })
})
