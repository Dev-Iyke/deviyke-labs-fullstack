import type { BlogFlashcardMap } from "@/features/blogs/types/blog";

export const blogFlashcards = {
  "conservation-of-knowledge": [
    {
      question: "What does conservation of knowledge mean in a workplace?",
      answer:
        "It means preserving useful experience, sharing it clearly, and making sure it does not disappear when people change roles or leave.",
    },
    {
      question: "Why should teams learn from people ahead of them?",
      answer:
        "Because experience carries lessons, judgment, and shortcuts that help others avoid avoidable mistakes and grow faster.",
    },
    {
      question: "What does mentorship look like in everyday work?",
      answer:
        "It shows up in walkthroughs, reviews, pairing, questions, explanations, and the willingness to help someone else move forward.",
    },
    {
      question: "Why is it risky when one person knows everything important?",
      answer:
        "The team becomes fragile. Work slows down, mistakes increase, and progress depends too heavily on one person staying available.",
    },
    {
      question: "What makes feedback useful instead of discouraging?",
      answer:
        "Useful feedback is specific, respectful, timely, and clear about what happened, why it matters, and what could change next time.",
    },
    {
      question: "How should good feedback be received?",
      answer:
        "With listening, curiosity, and a willingness to understand the lesson before rushing into self-defense.",
    },
    {
      question: "Why does recognition matter in knowledge-sharing culture?",
      answer:
        "People repeat what is appreciated. Recognition makes contribution visible and encourages people to keep teaching and supporting others.",
    },
    {
      question: "What is psychological safety in simple terms?",
      answer:
        "It is the sense that you can ask questions, admit mistakes, and share ideas honestly without being mocked or shut down.",
    },
    {
      question: "What is one practical way to preserve knowledge immediately?",
      answer:
        "Turn lessons into shared notes, quick guides, mentoring conversations, or short summaries after key work happens.",
    },
  ],
} as const satisfies BlogFlashcardMap;
