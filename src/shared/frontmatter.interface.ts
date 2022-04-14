export interface Frontmatter {
  title: string;
  date: Date;
  url: string;
  description?: string;
  thumbnail?: string;
  cover?: string;
  tags?: string[];
  categories?: string[];
}