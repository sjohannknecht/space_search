import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import "./ErrorPage.css"

function ErrorPage() {
  const error = useRouteError()

  function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`
    } else if (error instanceof Error) {
      return error.message
    } else if (typeof error === "string") {
      return error
    } else {
      console.error(error)
      return "Unknown error"
    }
  }

  return (
    <div className="ErrorPage">
      <h1>{errorMessage(error)}</h1>
    </div>
  )
}

export default ErrorPage
