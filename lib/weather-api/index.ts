const url = (path: string) => `http://api.weatherapi.com/v1/${path}`

export const fetchWeatherApiOnVercel = async (path: string) => {
  const response = await fetch(`${url(path)}`)

  if (!response.ok) {
    const error = await response.json().then(({ error }) => error)
    throw new Error(`${error.message}`)
  }

  return response.json()
}
