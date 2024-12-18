import { toString as mdToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";

export function remarkReadingTime() {
  return (tree, { data }) => {
    const textOnPage = mdToString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutes = Math.max(
      1,
      Math.round(readingTime.minutes),
    );
    data.astro.frontmatter.words = readingTime.words;
  };
}
