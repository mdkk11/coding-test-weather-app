import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import * as stories from "./presenter.stories"

const { Sunny, Cloudy, Rainy, Snowy } = composeStories(stories)

describe("Features/Weather/WeatherInfo/Presenter", () => {
  test("sunny", () => {
    const { getByTestId } = render(<Sunny />)
    const container = getByTestId("weather-container")
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent("Sunny")
  })

  test("cloudy", () => {
    const { getByTestId } = render(<Cloudy />)
    const container = getByTestId("weather-container")
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent("Cloudy")
  })

  test("rainy", () => {
    const { getByTestId } = render(<Rainy />)
    const container = getByTestId("weather-container")
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent("Rainy")
  })

  test("snowy", () => {
    const { getByTestId } = render(<Snowy />)
    const container = getByTestId("weather-container")
    expect(container).toBeInTheDocument()
    expect(container).toHaveTextContent("Snowy")
  })
})
