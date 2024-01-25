import type { SearchItem } from "./searchApiSlice"
import "./SearchResultItem.css"

interface SearchResultItemProps {
  item: SearchItem
}
function SearchResultItem({ item }: SearchResultItemProps) {
  const data = item.data[0]
  const previewImgHref = item.links ? item.links[0].href : undefined

  return (
    <div className="SearchResultItem">
      <h3 className="SearchResultItem__heading">{data.title}</h3>
      <img
        src={previewImgHref}
        alt={data.description_508}
        className="SearchResultItem__img"
      />
    </div>
  )
}

export default SearchResultItem
