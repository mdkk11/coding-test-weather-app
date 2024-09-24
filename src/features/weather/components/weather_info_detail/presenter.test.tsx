import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import * as stories from "./presenter.stories"

const { Current } = composeStories(stories)

describe("Features/Weather/WeatherInfoDetail/Presenter", () => {
  test("天気詳細情報のリストが表示される", () => {
    render(<Current />)
    expect(screen.getByRole("list")).toBeInTheDocument()
  })
})
