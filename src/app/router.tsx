import { lazy } from "react"
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom"

import { Layout } from "@/components/layouts"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  )
}

const WeatherForecastPage = lazy(() => import("@/app/pages/weather_forecast"))
const SpecificDayPage = lazy(() => import("@/app/pages/specific_day"))
const Page404 = lazy(() => import("@/app/pages/page_404"))

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <WeatherForecastPage />,
        },
        {
          path: "specific_day",
          element: <SpecificDayPage />,
        },
        {
          path: "*",
          element: <Page404 />,
        },
      ],
    },
  ]
  const element = useRoutes(routes)
  return element
}
