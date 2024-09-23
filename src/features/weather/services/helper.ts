const errors = {
  400: { message: "Bad Request", status: 400 },
  401: { message: "Unauthorized", status: 401 },
  404: { message: "Not Found", status: 404 },
  409: { message: "Conflict", status: 409 },
  500: { message: "Internal Server Error", status: 500 },
}

type ErrorStatus = keyof typeof errors

class FetchError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = "FetchError"
    this.status = status
  }
}

export const fetchWrapper = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      const errorStatus = response.status

      const error = isErrorStatus(errorStatus)
        ? errors[errorStatus]
        : { message: "Unknown Error", status: response.status }
      throw new FetchError(error.message, error.status)
    }

    const data = await response.json()

    return data
  } catch (error) {
    if (error instanceof FetchError) {
      throw error
    } else if (error instanceof Error) {
      throw new FetchError("Network error or other error occurred", 500)
    } else {
      throw new FetchError("An unknown error occurred", 500)
    }
  }
}

function isErrorStatus(status: number): status is ErrorStatus {
  return Object.prototype.hasOwnProperty.call(errors, status)
}
