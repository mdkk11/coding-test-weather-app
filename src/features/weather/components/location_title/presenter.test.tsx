import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import * as stories from "./presenter.stories"

const { Default } = composeStories(stories)
describe("Features/Weather/LocationTitle/Presenter", () => {
  test("should render heading", () => {
    render(<Default />)
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
  })
})
