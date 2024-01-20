import { render, screen } from "@testing-library/react"
import SearchResultItem from "../SearchResultItem"

const testData = {
  href: "https://images-assets.nasa.gov/image/PIA16889/collection.json",
  data: [
    {
      center: "JPL",
      title: "Kepler-62 and the Solar System",
      nasa_id: "PIA16889",
      date_created: "2013-04-18T18:42:41Z",
      keywords: ["Kepler"],
      media_type: "image",
      description_508:
        "This diagram compares the planets of the inner solar system to Kepler-62, a five-planet system about 1,200 light-years from Earth in the constellation Lyra. At seven billion years old, the star is somewhat older than the sun.",
      secondary_creator: "NASA/Ames/JPL-Caltech",
      description:
        "This diagram compares the planets of the inner solar system to Kepler-62, a five-planet system about 1,200 light-years from Earth in the constellation Lyra. At seven billion years old, the star is somewhat older than the sun.",
    },
  ],
  links: [
    {
      href: "https://images-assets.nasa.gov/image/PIA16889/PIA16889~thumb.jpg",
      rel: "preview",
      render: "image",
    },
  ],
}

describe("SearchResultItem", () => {
  test("should render the title as heading", () => {
    render(<SearchResultItem item={testData} />)

    expect(screen.getByRole("heading")).toHaveTextContent(
      /Kepler-62 and the Solar System/i,
    )
  })

  test("should render the img with the correct URL and description_508 as alt text", () => {
    render(<SearchResultItem item={testData} />)
    const img = screen.getByRole("img")

    expect(img).toHaveAttribute(
      "src",
      "https://images-assets.nasa.gov/image/PIA16889/PIA16889~thumb.jpg",
    )
    expect(img).toHaveAttribute(
      "alt",
      "This diagram compares the planets of the inner solar system to Kepler-62, a five-planet system about 1,200 light-years from Earth in the constellation Lyra. At seven billion years old, the star is somewhat older than the sun.",
    )
  })
})
