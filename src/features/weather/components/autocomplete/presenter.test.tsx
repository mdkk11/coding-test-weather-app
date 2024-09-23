import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import * as stories from "./presenter.stories"

const { Default, NoLocationList } = composeStories(stories)

describe("Features/Weather/AutoComplete/Presenter", () => {
  test("Locationリストが表示される", () => {
    render(<Default />)
    expect(screen.getByRole("list")).toBeInTheDocument()
  })

  test("「一致する地名がありません」と表示される", async () => {
    render(<NoLocationList />)

    expect(screen.getByText("一致する地名がありません")).toBeInTheDocument()
  })
})
