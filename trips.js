/*
  YOUR MUSEUM'S CONTENT
  ---------------------
  This is the only file you need to edit to add trips.
  Copy one trip block { ... }, paste it below the last one, and change the values.

  id        short name with no spaces, used in the NFC tag link (never change it after writing a tag)
  keychain  photo of the keychain itself (optional; a gold medallion is shown if left blank)
  tagUid    only needed for the Raspberry Pi reader later; the Tags page shows how to find it
  photos    how many photos the trip has. Name the files <id>-1.jpg, <id>-2.jpg, <id>-3.jpg ...
            and upload them next to this file (no folders). photos: 40 means kyoto-1.jpg to kyoto-40.jpg.
            The first 3 get gold frames; all of them appear in the album below.
  colors    optional flag colors for the medallion, with stripes: "vertical" or "horizontal"
  cities    optional list of places, shown under the trip name
  when      use instead of start/end if you don't know exact dates: when: "Spring 2022", year: 2022
  visits    for places you went more than once: visits: [2016, 2023]
  mono      letters shown on the medallion (default: first letters of the place)
  stops     optional day-by-day route: { date: "2023-04-02", place: "Venice", note: "Train from Milan" }
  music     optional mp3 file, plays when a visitor taps the music button
*/

window.MUSEUM = {
  title: "Pran Travels",
  subtitle: "A Museum of Our Travels",
  owner: "Praveena",

  // After a trip opens on the museum screen, go back to the wall after this many minutes of no touches.
  kioskIdleMinutes: 3,

  trips: [
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "dubai",
      place: "Dubai",
      country: "UAE",
      visits: [2016, 2023],
      color: "#1d6b3f",
      colors: ["#00732F", "#FFFFFF", "#000000"],
      stripes: "horizontal",
      band: "#EF3340"
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "srilanka2018",
      place: "Sri Lanka",
      country: "Sri Lanka",
      when: "Summer 2018",
      year: 2018,
      color: "#8D153A",
      colors: ["#00534E", "#FF7300", "#8D153A"],
      stripeWeights: [1, 1, 4],
      stripes: "vertical",
      mono: "SL"
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "singapore2018",
      place: "Singapore",
      country: "Singapore",
      when: "Summer 2018",
      year: 2018,
      color: "#c8202f",
      colors: ["#EF3340", "#FFFFFF"],
      stripes: "horizontal"
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "laketahoe",
      place: "Lake Tahoe",
      country: "California",
      visits: [2009, 2011, 2017, 2018],
      color: "#1f6f8b",
      mono: "LT"
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "cruise2019",
      place: "Ensenada Cruise",
      country: "Mexico",
      year: 2019,
      when: "2019",
      color: "#1c4e80",
      mono: "EC",
      cities: ["Catalina Island", "Ensenada"],
      stops: [
        { "place":  "Catalina Island" },
        { "place":  "Ensenada, Mexico" }
      ]
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "catalina2021",
      place: "Catalina Island",
      country: "California",
      when: "Spring 2021",
      year: 2021,
      color: "#17808f",
      mono: "CI"
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "eastcoast2021",
      place: "East Coast",
      country: "USA",
      when: "2021",
      year: 2021,
      color: "#2b3a7a",
      mono: "EC",
      colors: ["#B22234", "#FFFFFF", "#3C3B6E"],
      stripes: "horizontal",
      cities: ["Niagara Falls", "New York City", "Pennsylvania", "Washington DC", "Virginia"],
      stops: [
        { "place":  "Niagara Falls" },
        { "place":  "New York City" },
        { "place":  "Statue of Liberty" },
        { "place":  "New Jersey" },
        { "place":  "Hershey's Chocolate World", "note":  "Pennsylvania" },
        { "place":  "Washington DC" },
        { "place":  "Smithsonian museums", "note":  "Washington DC" },
        { "place":  "Virginia" },
        { "place":  "Luray Caverns", "note":  "Virginia" }
      ]
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "disneyland2022",
      place: "Disneyland",
      country: "California",
      when: "Spring 2022",
      year: 2022,
      color: "#3a5fcd",
      mono: "D"
    },
    {
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      photos: 0,
      music: "",
      id: "universal2022",
      place: "Universal Studios",
      country: "USA",
      when: "Spring 2022",
      year: 2022,
      color: "#6b3fa0",
      mono: "U"
    },
    {
      id: "italy2023",
      place: "Italy",
      country: "Italy",
      cities: ["Milan", "Venice", "Florence", "Tuscany", "Amalfi Coast", "Rome"],
      start: "2023-03-31",
      end: "2023-04-10",
      color: "#1f7a4a",
      colors: ["#009246", "#F4F5F0", "#CE2B37"],
      stripes: "vertical",
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      stops: [
        { date: "2023-03-31", place: "San Francisco to Milan", note: "Evening flight from SFO" },
        { date: "2023-04-01", place: "Milan" },
        { date: "2023-04-02", place: "Venice", note: "Train from Milan" },
        { date: "2023-04-03", place: "Florence", note: "Train from Venice" },
        { date: "2023-04-04", place: "Florence", note: "Museums and monuments, then a rental car to the agriturismo" },
        { date: "2023-04-05", place: "Tuscany", note: "Siena, Chianti and the hill towns" },
        { date: "2023-04-06", place: "Amalfi Coast", note: "Car returned in Florence, on to the coast" },
        { date: "2023-04-07", place: "Amalfi Coast", note: "Bus ride along the coast" },
        { date: "2023-04-08", place: "Capri, then Rome" },
        { date: "2023-04-09", place: "Rome", note: "Colosseum, Roman Forum, Trevi Fountain, Vatican City" },
        { date: "2023-04-10", place: "Rome to San Francisco", note: "Morning flight home" }
      ],
      photos: 0,
      music: ""
    },
    {
      id: "spain2024",
      place: "Spain",
      country: "Spain",
      cities: ["Madrid", "Seville", "Granada", "Barcelona"],
      start: "2024-03-29",
      end: "2024-04-07",
      color: "#a3171d",
      colors: ["#AA151B", "#F1BF00", "#AA151B"],
      stripes: "horizontal",
      stripeWeights: [1, 2, 1],
      keychain: "",
      tagUid: "",
      story: "",
      highlights: [],
      stops: [
        { place: "Madrid" },
        { place: "Seville" },
        { place: "Granada" },
        { place: "Barcelona" }
      ],
      photos: 0,
      music: ""
    }
  ]
};
