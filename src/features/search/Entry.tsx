import Card from "../../components/ui/Card"
import { useGetAssetQuery, useGetEntryQuery } from "./searchApiSlice"
import { useSearchParams } from "react-router-dom"
import "./Entry.css"
import Table from "../../components/ui/Table"

function Entry() {
  const [searchParams] = useSearchParams()
  const {
    data: dataAsset,
    isError: isErrorAsset,
    isLoading: isLoadingAsset,
    isFetching: isFetchingAsset,
    isUninitialized: isUninitializedAsset,
  } = useGetAssetQuery(searchParams.get("nasa_id") as string, {
    skip: !searchParams.get("nasa_id"),
  })
  const {
    data: dataEntry,
    isError: isErrorEntry,
    isLoading: isLoadingEntry,
    isFetching: isFetchingEntry,
    isUninitialized: isUninitializedEntry,
  } = useGetEntryQuery(searchParams.get("nasa_id") as string, {
    skip: !searchParams.get("nasa_id"),
  })

  if (isErrorEntry || isErrorAsset) {
    return <h2>There was an error!!!</h2>
  }

  if (isLoadingEntry || isFetchingEntry || isLoadingAsset || isFetchingAsset) {
    return <h2>Loading...</h2>
  }

  if (isUninitializedEntry || isUninitializedAsset) {
    return <></>
  }

  if (dataEntry.collection.metadata.total_hits === 0) {
    return <h2>Not Found</h2>
  }

  const getUrl = (
    data: { collection: { items: { href: string }[] } } | undefined,
    regularExpression: RegExp,
  ) => {
    const item = data?.collection.items.find(element =>
      regularExpression.test(element.href),
    )
    return item?.href
  }

  const infoEntry = dataEntry.collection.items[0].data[0]

  const media =
    infoEntry.media_type === "image" ? (
      <img
        className="Entry__media"
        src={getUrl(dataAsset, /\.(jpg)$/i)}
        alt={infoEntry.title}
      />
    ) : (
      <video className="Entry__media" controls>
        <source src={getUrl(dataAsset, /\.(mp4|mov)$/i)} />
      </video>
    )

  return (
    <Card className="Entry">
      <div className="Entry__media-container">{media}</div>
      <div className="Entry__info">
        <h2>{infoEntry.title}</h2>
        <p>{infoEntry.description}</p>
        <Table
          entries={[
            ["Title:", infoEntry.title || "Not Provided"],
            ["Photographer:", infoEntry.photographer || "Not Provided"],
            ["Location:", infoEntry.location || "Not Provided"],
            [
              "Created on:",
              new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(infoEntry.date_created)) || "Not Provided",
            ],
          ]}
        ></Table>
      </div>
    </Card>
  )
}

export default Entry
