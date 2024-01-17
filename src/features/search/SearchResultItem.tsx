import type { SearchResultItemInterface } from "./searchApiSlice"

interface SearchResultItemProps {
  item: SearchResultItemInterface
}
function SearchResultItem({ item }: SearchResultItemProps) {
  return (
    <div>
      <h3>{item.data[0].title}</h3>
    </div>
  )
}

export default SearchResultItem
