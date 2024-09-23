import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import * as stories from "./presenter.stories"

const { Default } = composeStories(stories)

describe("Features/Weather/AutoComplete/Presenter", () => {
  test("Textboxが表示される", () => {
    render(<Default />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
})
