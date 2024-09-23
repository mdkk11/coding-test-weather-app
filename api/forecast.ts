import { fetchWeatherApiOnVercel } from "../lib/weather-api"

export const config = {
  runtime: "edge",
}

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url)

  const q = searchParams.get("q")
  const days = searchParams.get("days")

  if (!q || !days || !process.env.WEATHER_API_KEY) {
    return new Response(JSON.stringify({ error: "Invalid query parameter or missing API key" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const params = new URLSearchParams({
    q,
    days,
    key: process.env.WEATHER_API_KEY,
  })
  try {
    const data = await fetchWeatherApiOnVercel(`forecast.json?${params}`)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
