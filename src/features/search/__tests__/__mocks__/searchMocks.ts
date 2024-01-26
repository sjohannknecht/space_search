const searchResponseNoHits = {
  collection: {
    metadata: {
      total_hits: 0,
    },
  },
}

const searchResponseHits = {
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

const assetResponseImage = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/asset/PIA13516",
    items: [
      {
        href: "http://images-assets.nasa.gov/image/PIA13516/PIA13516~orig.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/PIA13516/PIA13516~small.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/PIA13516/PIA13516~thumb.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/PIA13516/metadata.json",
      },
    ],
  },
}

const entryResponseImage = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?nasa_id=PIA13516",
    items: [
      {
        href: "https://images-assets.nasa.gov/image/PIA13516/collection.json",
        data: [
          {
            center: "JPL",
            title: "Moon seen from the East",
            nasa_id: "PIA13516",
            date_created: "2010-09-08T22:24:40Z",
            keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
            media_type: "image",
            description_508: "Moon seen from the East",
            secondary_creator: "NASA/GSFC/Arizona State University",
            description: "Moon seen from the East",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13516/PIA13516~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: {
      total_hits: 1,
    },
  },
}

const assetResponseVideo = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/asset/Moon%20and%20Saturn",
    items: [
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~orig.mp4",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn.srt",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large.mp4",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium.mp4",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~mobile.mp4",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~preview.mp4",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small.mp4",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/metadata.json",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small_1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small_2.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small_3.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small_4.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~small_5.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb_1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb_2.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb_3.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb_4.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb_5.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium_1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium_2.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium_3.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium_4.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~medium_5.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large_1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large_2.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large_3.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large_4.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~large_5.jpg",
      },
    ],
  },
}

const entryResponseVideo = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?nasa_id=Moon%20and%20Saturn",
    items: [
      {
        href: "https://images-assets.nasa.gov/video/Moon and Saturn/collection.json",
        data: [
          {
            center: "JSC",
            date_created: "2022-11-19T00:00:00Z",
            description:
              "art001m1013232148 (Nov. 19, 2022) On flight day 4, Orion caught this view of our Moon juxtaposed with Saturn toward the upper left of the frame by using one of the cameras mounted on its solar arrays.",
            keywords: [
              "Artemis I resource reel",
              "Artemis",
              "Artemis I",
              "Orion",
              "Moon",
              "Saturn",
            ],
            media_type: "video",
            nasa_id: "Moon and Saturn",
            title: "Orion Sees the Moon and Saturn",
            album: ["Artemis_I"],
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Moon and Saturn/Moon and Saturn.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/NHQ_2019_0628_Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019/collection.json",
        data: [
          {
            center: "HQ",
            title:
              "Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019",
            nasa_id:
              "NHQ_2019_0628_Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019",
            media_type: "video",
            keywords: ["This Week at NASA", "TW@N", "Dragon Fly"],
            date_created: "2019-06-28T00:00:00Z",
            description:
              "The latest about our new mission to Saturn’s largest Moon, Launching new missions and landing astronauts … on the same night! And …restoring the glory to the Apollo Mission Control Room … a few of the stories to tell you about – This Week at NASA!",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_0628_Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019/NHQ_2019_0628_Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_0628_Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019/NHQ_2019_0628_Announcing a New Mission to Saturn’s Largest Moon on This Week @NASA – June 28, 2019.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon",
            keywords: [
              "JPL",
              "Jet Propulsion Laboratory",
              "NASA",
              "Saturn",
              "Enceladus",
              "Aurora",
              "Hiss Emissions",
              "Eerie",
              "Science",
              "Space",
              "Audio",
              "Sounds",
              "Weird",
            ],
            nasa_id:
              "JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon",
            date_created: "2018-07-09T00:00:00Z",
            media_type: "video",
            description:
              "New research from the up-close Grand Finale orbits of NASA’s Cassini mission shows a surprisingly powerful interaction of plasma waves moving from Saturn to its moon Enceladus. Researchers converted the recording of plasma waves into a “whooshing” audio file that we can hear -- in the same way a radio translates electromagnetic waves into music. Much like air or water, plasma (the fourth state of matter) generates waves to carry energy. The recording was captured by the Radio Plasma Wave Science (RPWS) instrument Sept. 2, 2017, two weeks before Cassini was deliberately plunged into the atmosphere of Saturn.   For more information, visit: Saturn.jpl.nasa.gov",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon/JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon/JPL-20180709-CASSINf-0001-Sounds of Saturn Hear Radio Emissions of a Planet and Its Moon.vtt",
            rel: "captions",
          },
        ],
      },
    ],
    metadata: {
      total_hits: 3,
    },
  },
}

export {
  searchResponseHits,
  searchResponseNoHits,
  entryResponseVideo,
  entryResponseImage,
  assetResponseVideo,
  assetResponseImage,
}
