"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogToneStyles } from "@/features/blogs/config/blogToneStyles";
import type { Blog, BlogFlashcard } from "@/features/blogs/types/blog";

export function BlogFlashcardsSection({
  flashcards,
  tone,
}: {
  flashcards: readonly BlogFlashcard[];
  tone: Blog["tone"];
}) {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const card = flashcards[index];
  const styles = blogToneStyles[tone];

  const progressLabel = useMemo(
    () => `${index + 1} / ${flashcards.length}`,
    [index, flashcards.length],
  );

  const goTo = (nextIndex: number) => {
    setShowAnswer(false);
    setIndex(nextIndex);
  };

  const goPrev = () =>
    goTo((index - 1 + flashcards.length) % flashcards.length);

  const goNext = () => goTo((index + 1) % flashcards.length);

  return (
    <div className="rounded-[2rem] border border-border/70 bg-card/72 p-5 sm:p-7 lg:p-8">
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            Flashcards
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
            Quick recall for the main ideas
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Use these cards to revisit the strongest ideas from the session
            without rereading the entire script.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] ${styles.badge}`}
          >
            {progressLabel}
          </span>
          <span className="text-sm text-muted-foreground">
            {showAnswer ? "Answer side" : "Question side"}
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-6">
        <div
          className={`relative overflow-hidden rounded-[1.7rem] border p-5 sm:p-6 ${styles.border} ${styles.surface}`}
        >
          <div
            className={`pointer-events-none absolute -right-12 -top-12 size-32 rounded-full blur-3xl ${styles.glow}`}
            aria-hidden="true"
          />

          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {showAnswer ? "Answer" : "Question"}
              </span>
              <button
                type="button"
                onClick={() => setShowAnswer((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <RotateCw className="size-3.5" aria-hidden="true" />
                {showAnswer ? "Show question" : "Reveal answer"}
              </button>
            </div>

            <div className="mt-8 min-h-52 rounded-[1.4rem] border border-border/70 bg-background/84 p-5 sm:min-h-60 sm:p-6">
              <p className="text-lg leading-8 text-foreground sm:text-xl">
                {showAnswer ? card.answer : card.question}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <Button type="button" variant="outline" onClick={goPrev}>
                <ChevronLeft data-icon="inline-start" aria-hidden="true" />
                Previous
              </Button>
              <Button type="button" variant="outline" onClick={goNext}>
                Next
                <ChevronRight data-icon="inline-end" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {flashcards.map((flashcard, flashcardIndex) => {
            const isActive = flashcardIndex === index;

            return (
              <button
                key={flashcard.question}
                type="button"
                onClick={() => goTo(flashcardIndex)}
                className={`rounded-[1.4rem] border p-4 text-left transition-all ${
                  isActive
                    ? `${styles.border} bg-surface shadow-sm`
                    : "border-border/70 bg-background/55 hover:border-border"
                }`}
              >
                <div className="flex items-start gap-3 cursor-pointer hover:scale-102 transition-all">
                  <span
                    className={`mt-1 size-2 shrink-0 rounded-full ${styles.dot}`}
                  />
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground font-medium">
                      Card {flashcardIndex + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-foreground/84">
                      {flashcard.question}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
