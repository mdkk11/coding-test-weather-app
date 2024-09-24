import { composeStories } from "@storybook/react"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { mock } from "@/features/weather/services/forecast/mock"
import { format } from "@/utils"

import * as stories from "./presenter.stories"

const { Default } = composeStories(stories)

const tableHead = mock.forecast.forecastday.map((d) => d.date)

describe("Features/Weather/WeatherForecast/Presenter", () => {
  test.each([tableHead])("$dateのLinkが存在する", async (date) => {
    render(<Default />)
    expect(screen.getByRole("link", { name: format(new Date(date), "MM/dd") })).toBeInTheDocument()
  })
})
