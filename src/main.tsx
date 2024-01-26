import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./normalize.css"
import "./index.css"
import SearchResult from "./features/search/SearchResult"
import ErrorPage from "./components/ErrorPage"
import Entry from "./features/search/Entry"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <SearchResult />,
      },
      {
        path: "entry",
        element: <Entry />,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
])

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
