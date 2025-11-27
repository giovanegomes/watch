const STAGES = [
  {
    stage: "Stage Sunset",
    image: "stage-sunset.png",
  },
  {
    stage: "Stage World",
    image: "stage-world.png",
  },
  {
    stage: "Stage Favela",
    image: "stage-favela.png",
  },
  {
    stage: "Stage Supernova",
    image: "stage-supernova.png",
  },
  {
    stage: "Stage Rock Street",
    image: "stage-rock-street.png",
  },
  {
    stage: "Stage Rock District",
    image: "stage-rock-district.png",
  },
];

class Stage {
  fetch() {
    return STAGES;
  }
}

export const stageService = new Stage();
