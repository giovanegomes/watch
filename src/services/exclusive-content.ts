const CONTENT = [
  { content: "Back Stage", backgroundImage: "back-stage.jpg" },
  { content: "Interviews", backgroundImage: "interviews.jpg" },
  { content: "Latest News", backgroundImage: "latest-news.jpg" },
  { content: "Last Editions", backgroundImage: "last-editions.jpg" },
];

class ExclusiveContent {
  fetch() {
    return CONTENT;
  }
}

export const exclusiveContentService = new ExclusiveContent();
