import { screen, waitFor } from "@testing-library/react"
import Entry from "../Entry"
import { renderWithProviders } from "../../../utils/test-utils"
import { setupServer } from "msw/node"
import { http, HttpResponse } from "msw"
import { MemoryRouter } from "react-router-dom"
import {
  assetResponseImage,
  assetResponseVideo,
  entryResponseImage,
  entryResponseVideo,
} from "./__mocks__/searchMocks"

describe("Entry", () => {
  const server = setupServer()

  beforeAll(() => server.listen())

  afterAll(() => server.close())

  afterEach(() => server.resetHandlers())

  test("renders error message when the query to the getEntry endpoint gets an error response.", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.error(),
      ),
      http.get("https://images-api.nasa.gov/asset/test", () =>
        HttpResponse.json(assetResponseVideo),
      ),
    )
    renderWithProviders(
      <MemoryRouter initialEntries={["/search?nasa_id=test"]}>
        <Entry />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.getByRole("heading").textContent).toMatch(
        /there was an error!!!/i,
      )
    })
  })

  test("renders error message when the query to the getAsset endpoint gets an error response", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.json(entryResponseVideo),
      ),
      http.get("https://images-api.nasa.gov/asset/test", () =>
        HttpResponse.error(),
      ),
    )
    renderWithProviders(
      <MemoryRouter initialEntries={["/entry?nasa_id=test"]}>
        <Entry />
      </MemoryRouter>,
    )
    await waitFor(() => {
      expect(screen.getByRole("heading").textContent).toMatch(
        /there was an error!!!/i,
      )
    })
  })

  test("renders null when query was not initialized because of missing searchParam for example", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/asset", () =>
        HttpResponse.json(assetResponseVideo),
      ),
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.json(entryResponseVideo),
      ),
    )
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={["/entry"]}>
        <Entry />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement()
    })
  })

  test("renders image when the response has a media_type image.", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/asset/test", () =>
        HttpResponse.json(assetResponseImage),
      ),
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.json(entryResponseImage),
      ),
    )
    renderWithProviders(
      <MemoryRouter initialEntries={["/entry?nasa_id=test"]}>
        <Entry />
      </MemoryRouter>,
    )
    await waitFor(() => {
      expect(screen.getByRole("img")).toBeInTheDocument()
      expect(screen.getByAltText("Moon seen from the East")).toBeInTheDocument()
    })
  })
})
