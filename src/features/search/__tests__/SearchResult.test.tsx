import { screen, waitFor } from "@testing-library/react"
import SearchResult from "../SearchResult"
import { renderWithProviders } from "../../../utils/test-utils"
import { setupServer } from "msw/node"
import { http, HttpResponse } from "msw"
import {
  searchResponseHits,
  searchResponseNoHits,
} from "./__mocks__/searchMocks"
import { MemoryRouter } from "react-router-dom"

describe("SearchResult", () => {
  const server = setupServer()

  beforeAll(() => server.listen())

  afterAll(() => server.close())

  afterEach(() => server.resetHandlers())

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders Error message when server responds with error code", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.error(),
      ),
    )
    renderWithProviders(
      <MemoryRouter initialEntries={["/search?q=test"]}>
        <SearchResult />
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
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.json(searchResponseNoHits),
      ),
    )
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchResult />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement()
    })
  })

  test("renders No Result message when there are no search hits", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.json(searchResponseNoHits),
      ),
    )
    renderWithProviders(
      <MemoryRouter initialEntries={["/search?q=test"]}>
        <SearchResult />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.queryByText(/no results/i)).toBeInTheDocument()
    })
  })

  test("renders SearchResultItem when there are search hits", async () => {
    server.use(
      http.get("https://images-api.nasa.gov/search", () =>
        HttpResponse.json(searchResponseHits),
      ),
    )
    vi.mock("../SearchResultItem.tsx", () => ({
      default: () => <div>SearchResultItemMock</div>,
    }))
    renderWithProviders(
      <MemoryRouter initialEntries={["/search?q=test"]}>
        <SearchResult />
      </MemoryRouter>,
    )

    await waitFor(() => {
      expect(screen.queryByText(/searchResultItemMock/i)).toBeInTheDocument()
    })
  })
})
