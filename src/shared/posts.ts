import { getCollection, type CollectionEntry } from "astro:content";
import { format } from "date-fns";

export type BlogPost = CollectionEntry<"blog">;

export type PostRow = {
  id: string;
  title: string;
  language: string;
  date: string;
  day: string;
  tags: string[];
  minutes: number;
};
export type MonthGroup = { month: number; label: string; posts: PostRow[] };
export type YearGroup = { year: number; count: number; months: MonthGroup[] };

const WORDS_PER_MINUTE = 200;

// Word-level segmentation handles Thai text, which has no spaces between words.
const segmenter = new Intl.Segmenter("th", { granularity: "word" });

export function readingMinutes(body = "") {
  let words = 0;
  for (const segment of segmenter.segment(body)) {
    if (segment.isWordLike) words++;
  }
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function postTags(post: BlogPost) {
  return [...new Set((post.data.tags ?? []).map((tag) => tag.toLowerCase()))];
}

export async function getSortedPosts() {
  const allPosts = await getCollection("blog");
  return allPosts.sort((a, b) => {
    return (
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
    );
  });
}

export function tagCounts(posts: BlogPost[]) {
  const counts: Record<string, number> = {};
  for (const post of posts) {
    for (const tag of postTags(post)) counts[tag] = (counts[tag] ?? 0) + 1;
  }
  return counts;
}

// Posts must arrive sorted newest first, so consecutive posts sharing a
// year/month form one group.
export function groupByYearMonth(posts: BlogPost[]) {
  const postsByYear: YearGroup[] = [];

  for (const post of posts) {
    const date = new Date(post.data.pubDate);
    const year = date.getFullYear();
    const month = date.getMonth();

    let yearGroup = postsByYear.at(-1);
    if (!yearGroup || yearGroup.year !== year) {
      yearGroup = { year, count: 0, months: [] };
      postsByYear.push(yearGroup);
    }
    yearGroup.count++;

    let monthGroup = yearGroup.months.at(-1);
    if (!monthGroup || monthGroup.month !== month) {
      monthGroup = { month, label: format(date, "MMMM"), posts: [] };
      yearGroup.months.push(monthGroup);
    }

    monthGroup.posts.push({
      id: post.id,
      title: post.data.title,
      language: post.data.language ?? "th",
      date: format(date, "yyyy-MM-dd"),
      day: format(date, "dd"),
      tags: postTags(post),
      minutes: readingMinutes(post.body),
    });
  }

  return postsByYear;
}
