const MUSIC_STYLES = [
  {
    musicStyle: "Rock",
    gradientClass: "bg-gradient-to-b from-[#2433C0] to-[#4F60FF]",
  },
  {
    musicStyle: "Pop",
    gradientClass: "bg-gradient-to-b from-[#06DE03] to-[#016500]",
  },
  {
    musicStyle: "Jazz",
    gradientClass: "bg-gradient-to-b from-[#FF6100] to-[#BF4900]",
  },
  {
    musicStyle: "Samba",
    gradientClass: "bg-gradient-to-b from-[#FF009A] to-[#A30062]",
  },
  {
    musicStyle: "MPB",
    gradientClass: "bg-gradient-to-b from-[#FFA801] to-[#7A5000]",
  },
  {
    musicStyle: "Trap",
    gradientClass: "bg-gradient-to-b from-[#00C0FF] to-[#006A8D]",
  },
  {
    musicStyle: "Rap",
    gradientClass: "bg-gradient-to-b from-[#FF0100] to-[#A80100]",
  },
];

class MusicStyles {
  fetch() {
    return MUSIC_STYLES;
  }
}

export const musicStylesService = new MusicStyles();
