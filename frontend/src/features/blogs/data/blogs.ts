import { blogFlashcards } from "@/features/blogs/data/flashcards";
import type { Blog } from "@/features/blogs/types/blog";

export const blogs = [
  {
    slug: "conservation-of-knowledge",
    title: "Conservation of Knowledge",
    kicker: "Preserving experience, growing people, building better teams",
    summary:
      "A knowledge-sharing session on how strong teams preserve experience, reduce dependency on a few people, and create a culture where mentorship, feedback, and recognition keep knowledge moving.",
    format: "Knowledge-sharing session",
    audience: "Teams, managers, mentors, and growing contributors",
    readTime: "9 min read",
    tone: "signal",
    tags: [
      "Knowledge sharing",
      "Mentorship",
      "Feedback",
      "Psychological safety",
      "Team growth",
    ],
    bannerImage: {
      label: "Conservation of Knowledge session banner",
      src: "/blogs/conservation-of-knowledge.webp",
      alt: "Banner image for the Conservation of Knowledge session",
    },
    takeaways: [
      "Experience becomes more valuable when it is shared, not trapped.",
      "Mentorship and feedback are part of knowledge transfer, not side conversations.",
      "Teams weaken when key know-how depends on one dependable person.",
      "Recognition and psychological safety make people more willing to teach, ask, and improve.",
    ],
    sections: [
      {
        title: "Why knowledge has to be preserved",
        paragraphs: [
          "The opening idea behind this session is simple: workplace knowledge is not only information. It includes judgment, practical lessons, decision context, and the small discoveries people make after doing the work repeatedly. That kind of experience often lives in people long before it ever becomes documentation.",
          "When that experience remains inside one person, the team is exposed. If they are unavailable, change roles, or leave, the team can lose years of accumulated understanding. Knowledge conservation is about making sure wisdom does not disappear with the person who currently carries it.",
        ],
      },
      {
        title: "Learning from others and building a mentorship culture",
        paragraphs: [
          "One of the fastest ways to grow at work is to learn from people who have already gone further in the journey. Formal training matters, but there is also a kind of knowledge that only shows up through practice: hidden challenges, recurring patterns, better judgment, and the shortcuts people earn over time.",
          "That is where mentorship becomes powerful. It does not always need a formal program to exist. In strong teams, mentorship can happen through everyday explanations, reviews, walkthroughs, and handoffs. A good mentor helps someone think better, and a good mentee listens, asks, and applies what they learn.",
        ],
      },
      {
        title: "Why knowledge must be passed forward",
        paragraphs: [
          "Teams become fragile when everyone depends on one reliable person for a critical process, tool, or decision area. That setup may look efficient in the short term, but it creates bottlenecks, slows onboarding, and increases the cost of every absence or transition.",
          "Passing knowledge forward creates shared capability. It helps new people settle faster, reduces avoidable mistakes, and keeps the organization from restarting old lessons from zero. In that sense, knowledge transfer is not a nice extra; it is part of building a sustainable team.",
        ],
      },
      {
        title: "Feedback is part of preserving standards",
        paragraphs: [
          "The next step in the flow is feedback. Feedback helps teams notice what is working, what is weak, and what needs to change before poor habits become normal. It preserves better standards because it keeps learning active instead of passive.",
          "Receiving feedback well takes maturity. It means listening before defending yourself, asking questions when something is unclear, and trying to understand impact rather than hiding behind intention. Growth gets faster when people can hear uncomfortable truth without treating it like personal rejection.",
        ],
      },
      {
        title: "How good feedback and recognition strengthen people",
        paragraphs: [
          "Giving feedback well matters just as much as receiving it well. Useful feedback is specific, respectful, and practical. It helps the other person understand what happened, why it matters, and what can be done better next time. When correction is careless, people shut down. When it is thoughtful, people improve.",
          "Recognition supports that same culture from another angle. When people share useful knowledge, explain patiently, or help reduce confusion, it matters that they are seen. Recognition reinforces the message that teaching, supporting, and contributing to team clarity are valuable forms of work.",
        ],
      },
      {
        title: "Psychological safety keeps knowledge moving",
        paragraphs: [
          "People do not share honestly when they are afraid. If asking a question leads to embarrassment, if admitting a mistake invites punishment, or if feedback becomes a weapon, knowledge gets trapped and problems stay hidden for longer than they should.",
          "Psychological safety does not remove standards. It creates an environment where honesty is possible around those standards. When people feel safe enough to ask, admit, and contribute, teams surface issues earlier, learn faster, and improve more consistently.",
        ],
      },
      {
        title: "How the whole system works together",
        paragraphs: [
          "These ideas reinforce one another. When people feel safe, they ask more. When they ask more, knowledge moves more freely. When knowledge moves, people improve faster. When that effort is recognized and guided through good feedback, the culture becomes stronger instead of more dependent on individual heroes.",
          "That is why the closing takeaway of the session is bigger than documentation alone. Strong teams are built by habits: sharing what is learned, mentoring deliberately, correcting with care, recognizing contribution, and making it easier for the next person to grow from what the previous person already discovered.",
        ],
      },
    ],
    practicalPrompts: [
      "Capture useful lessons after major tasks, incidents, or team decisions.",
      "Turn specialist knowledge into short notes, walkthroughs, or checklists that others can reuse.",
      "Ask earlier instead of waiting until confusion becomes expensive.",
      "Recognize people who reduce friction by explaining clearly or helping others grow.",
      "Treat feedback as part of quality and growth, not as a personal contest.",
    ],
    questionsToContinue: [
      "What are practical ways we can preserve useful knowledge in our teams?",
      "How can we make it easier for people to ask questions and learn from others?",
      "What can we do better in the way we give feedback and recognize contribution?",
    ],
    flashcards: blogFlashcards["conservation-of-knowledge"],
    scriptDownload: {
      label: "Download full session script (PDF)",
      href: "/blogs/conservation-of-knowledge-script.pdf",
    },
  },
] as const satisfies readonly Blog[];
