import { render, screen } from "@testing-library/react"
import SearchResult from "../SearchResult"

describe("SearchResult", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders Error message when result.isError", () => {
    const result = {
      isError: true,
    }
    render(<SearchResult result={result} />)

    expect(screen.getByRole("heading").textContent).toMatch(
      /there was an error!!!/i,
    )
  })

  test("renders Loading message when result.isLoading is true", () => {
    const result = {
      isLoading: true,
    }
    render(<SearchResult result={result} />)

    expect(screen.getByRole("heading").textContent).toMatch(/loading.../i)
  })

  test("renders Loading message when result.isFetching is true", () => {
    const result = {
      isFetching: true,
    }
    render(<SearchResult result={result} />)

    expect(screen.getByRole("heading").textContent).toMatch(/loading.../i)
  })

  test("renders No Result message when there are no search hits", () => {
    const result = {
      data: {
        collection: {
          metadata: {
            total_hits: 0,
          },
        },
      },
    }
    render(<SearchResult result={result} />)

    expect(screen.queryByText(/no results/i)).toBeInTheDocument()
  })

  test("renders SearchResultItem when there are search hits", () => {
    vi.mock("../SearchResultItem.tsx", () => ({
      default: () => <div>SearchResultItemMock</div>,
    }))
    const result = {
      data: {
        collection: {
          items: [
            {
              data: [
                {
                  nasa_id: "test",
                },
              ],
            },
          ],
          metadata: {
            total_hits: 1,
          },
        },
      },
    }
    render(<SearchResult result={result} />)

    expect(screen.queryByText(/searchResultItemMock/i)).toBeInTheDocument()
  })
})
