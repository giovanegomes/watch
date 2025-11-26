type musicStyle =
  | "rock"
  | "pop"
  | "funk"
  | "jazz"
  | "samba"
  | "mpb"
  | "trap"
  | "rap";

const SINGERS = [
  { musicStyle: "rock", name: "Iron Maiden", image: "iron-maiden.png" },
  { musicStyle: "pop", name: "Alok", image: "alok.png" },
  { musicStyle: "pop", name: "Rita Ora", image: "rita-ora.png" },
  { musicStyle: "rock", name: "Dream Theater", image: "dream-theater.png" },
  { musicStyle: "", name: "announcement", image: "" },
  { musicStyle: "pop", name: "Dua Lipa", image: "dua-lipa.png" },
  { musicStyle: "rock", name: "Måneskin", image: "maneskin.png" },
  { musicStyle: "rap", name: "Emicida", image: "emicida.png" },
  { musicStyle: "pop", name: "Coldplay", image: "coldplay.png" },
  { musicStyle: "pop", name: "Justin Bieber", image: "justin-bieber.png" },
  { musicStyle: "pop", name: "Luísa Sonza", image: "luisa-sonza.png" },
  { musicStyle: "pop", name: "Marshmello", image: "marshmello.png" },
  { musicStyle: "mpb", name: "Djavan", image: "djavan.png" },
  { musicStyle: "rock", name: "Offspring", image: "offspring.png" },
  { musicStyle: "pop", name: "Avril Lavigne", image: "avril-lavigne.png" },
  { musicStyle: "rock", name: "Black Pantera", image: "black-pantera.png" },
  { musicStyle: "pop", name: "Ed Sheeran", image: "ed-sheeran.jpg" },
];

class Singers {
  fetch() {
    return SINGERS;
  }

  fetchByStyles(style: musicStyle) {
    return SINGERS.filter(({ musicStyle }) => musicStyle === style);
  }
}

export const singersService = new Singers();
