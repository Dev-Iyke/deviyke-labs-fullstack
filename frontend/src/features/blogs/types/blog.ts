export type BlogTone = "signal" | "chart-2" | "chart-3" | "chart-4";

export interface BlogBannerImage {
  readonly label: string;
  readonly src?: string;
  readonly alt?: string;
}

export interface BlogSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
}

export interface BlogFlashcard {
  readonly question: string;
  readonly answer: string;
}

export type BlogFlashcardMap = Record<string, readonly BlogFlashcard[]>;

export interface BlogScriptDownload {
  readonly label: string;
  readonly href: string;
}

export interface Blog {
  readonly slug: string;
  readonly title: string;
  readonly kicker: string;
  readonly summary: string;
  readonly format: string;
  readonly audience: string;
  readonly readTime: string;
  readonly tone: BlogTone;
  readonly tags: readonly string[];
  readonly bannerImage?: BlogBannerImage;
  readonly takeaways: readonly string[];
  readonly sections: readonly BlogSection[];
  readonly practicalPrompts?: readonly string[];
  readonly questionsToContinue?: readonly string[];
  readonly flashcards?: readonly BlogFlashcard[];
  readonly scriptDownload?: BlogScriptDownload;
}
