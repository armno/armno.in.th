export interface Frontmatter {
  title: string;
  pubDate: Date;
  url: string;
  description?: string;
  thumbnail?: string;
  cover?: string;
  tags?: string[];
  categories?: string[];
}
