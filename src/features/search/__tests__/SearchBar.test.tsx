import { render, screen } from "@testing-library/react"
import SearchBar from "../SearchBar"
import userEvent from "@testing-library/user-event"

describe("SearchBar", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("renders input and button", () => {
    const mockFn = vi.fn()
    render(<SearchBar fetchResults={mockFn} />)

    expect(screen.queryByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("button").textContent).toMatch(/search/i)
  })

  test("has fetchResults function that gets invoked on button click", async () => {
    const user = userEvent.setup()
    const mockFn = vi.fn()
    render(<SearchBar fetchResults={mockFn} />)

    await user.click(screen.getByRole("button"))

    expect(mockFn).toHaveBeenCalledOnce()
  })
})
