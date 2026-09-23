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
  music     optional mp3 in the trip folder, plays when a visitor taps the music button
*/

window.MUSEUM = {
  title: "Pran Travels",
  subtitle: "A Museum of Our Travels",
  owner: "Praveena",

  // After a trip opens on the museum screen, go back to the wall after this many minutes of no touches.
  kioskIdleMinutes: 3,

  trips: [
    {
      id: "kyoto",
      place: "Kyoto",
      country: "Japan",
      start: "2025-04-02",
      end: "2025-04-09",
      color: "#b3342f",
      keychain: "",
      tagUid: "",
      story:
        "Cherry blossoms were a week early, so every street felt like a party. We walked through thousands of torii gates at Fushimi Inari before sunrise and had the mountain almost to ourselves.",
      highlights: ["Fushimi Inari at 6am", "Matcha everything in Uji", "Getting lost in Gion at night"],
      photos: 12,
      music: ""
    },
    {
      id: "hanoi",
      place: "Hanoi",
      country: "Vietnam",
      start: "2024-11-14",
      end: "2024-11-20",
      color: "#c2477a",
      keychain: "",
      tagUid: "",
      story:
        "Egg coffee, scooters in every direction, and a night cruise through Ha Long Bay. The lotus keychain came from a tiny stall near Hoan Kiem Lake.",
      highlights: ["Egg coffee at Giang", "Ha Long Bay overnight", "Train Street"],
      photos: 4,
      music: ""
    },
    {
      id: "lisbon",
      place: "Lisbon",
      country: "Portugal",
      start: "2024-06-01",
      end: "2024-06-06",
      color: "#2f6fb3",
      keychain: "",
      tagUid: "",
      story:
        "Yellow trams, blue tiles, and a pastel de nata at every stop. We timed the Miradouro sunsets every single evening.",
      highlights: ["Tram 28", "Pastéis de Belém", "Sintra day trip"],
      photos: 4,
      music: ""
    }
  ]
};
