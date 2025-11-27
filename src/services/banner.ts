const BANNERS = [
  {
    image: "heineken.png",
    slogan: "get a taste of Amsterdam",
    url: "https://www.heinekenbrasil.com.br/",
    color: "#008630",
  },
  {
    image: "coca.png",
    slogan: "get a taste of the new coke",
    url: "https://www.coca-cola.com/us/en/offerings/coca-cola-spiced",
    color: "#DA0302",
  },
];

class Banner {
  fetch() {
    return BANNERS;
  }
}

export const bannerService = new Banner();
