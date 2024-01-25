import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

describe("App", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders the background image of the ISS", () => {
    vi.mock("./features/search/SearchBar.tsx", () => ({
      default: () => <div>SearchBarMock</div>,
    }))
    render(<App />, { wrapper: BrowserRouter })

    const img = screen.getByRole("img")
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("alt", "ISS")
    expect(img).toHaveAttribute(
      "src",
      "/src/assets/img/ISS_spacecraft_model_1.png",
    )
  })

  test("renders Heading", () => {
    vi.mock("./features/search/SearchBar.tsx", () => ({
      default: () => <div>SearchBarMock</div>,
    }))
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByRole("heading").textContent).toMatch(/space search/i)
  })

  test("renders SearchBar", () => {
    vi.mock("./features/search/SearchBar.tsx", () => ({
      default: () => <div>SearchBarMock</div>,
    }))
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.queryByText(/searchBarMock/i)).toBeInTheDocument()
  })
})
