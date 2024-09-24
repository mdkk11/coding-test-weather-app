import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import * as stories from "./presenter.stories"

const { Default } = composeStories(stories)

describe("Features/Weather/SpecificDate/Presenter", () => {
  test("should render Heading & time ", () => {
    const date = "2024-10-01"
    render(<Default />)
    const time = screen.getByTestId("datetime")
    expect(time).toBeInTheDocument()
    expect(time).toHaveAttribute("datetime", date)
  })
})
