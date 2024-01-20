import { render, screen } from "@testing-library/react"
import App from "./App"

describe("SearchResult", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders SearchResultItem when there are search hits", () => {
    vi.mock("./features/search/Search.tsx", () => ({
      default: () => <div>SearchMock</div>,
    }))
    render(<App />)
    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("alt", "ISS")
    expect(img).toHaveAttribute(
      "src",
      "/src/assets/img/ISS_spacecraft_model_1.png",
    )
  })

  test("renders SearchResultItem when there are search hits", () => {
    vi.mock("./features/search/Search.tsx", () => ({
      default: () => <div>SearchMock</div>,
    }))
    render(<App />)
    expect(screen.queryByText(/searchMock/i)).toBeInTheDocument()
  })
})
