const searchResultNoHits = {
  collection: {
    metadata: {
      total_hits: 0,
    },
  },
}

const searchResultHits = {
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
}

export { searchResultHits, searchResultNoHits }
