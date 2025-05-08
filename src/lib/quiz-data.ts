export interface AnswerOption {
  text: string;
  scores: Partial<Record<PersonalityId, number>>;
}

export interface QuizQuestion {
  id: string;
  text: string;
  answers: AnswerOption[];
}

export interface Personality {
  id: PersonalityId;
  name: string;
  emoji: string;
  description: string;
  image: string;
  imageHint: string;
}

export type PersonalityId =
  | 'openSourceOverlord'
  | 'startupSadboi'
  | 'dataGremlin'
  | 'featureFlagFairy'
  | 'productPirate'
  | 'funnelWitch';

export const personalities: Personality[] = [
  {
    id: 'openSourceOverlord',
    name: 'The Open Source Overlord',
    emoji: '👑',
    description:
      'You read changelogs for fun. You believe in documentation, collaboration, and owning your code like a majestic Linux warlock.',
    image: 'https://picsum.photos/seed/overlord/400/300',
    imageHint: 'code computer',
  },
  {
    id: 'startupSadboi',
    name: 'The Startup Sadboi',
    emoji: '🫠',
    description:
      "You cry in TypeScript. But you care deeply. You’re driven by vision, VC fear, and vibes. You make memes and MVPs with equal passion.",
    image: 'https://picsum.photos/seed/sadboi/400/300',
    imageHint: 'sad computer',
  },
  {
    id: 'dataGremlin',
    name: 'The Data Gremlin',
    emoji: '🐀',
    description:
      'Your natural habitat is the analytics dashboard. You find bugs by sniffing out anomalies like a bloodhound in a datacenter.',
    image: 'https://picsum.photos/seed/gremlin/400/300',
    imageHint: 'chart graph',
  },
  {
    id: 'featureFlagFairy',
    name: 'The Feature Flag Fairy',
    emoji: '🧚',
    description:
      'You sprinkle toggles and magic all over your codebase. Risk mitigation is your love language. You believe nothing should go live without a kill switch.',
    image: 'https://picsum.photos/seed/fairy/400/300',
    imageHint: 'magic sparkle',
  },
  {
    id: 'productPirate',
    name: 'The Product Pirate',
    emoji: '🏴‍☠️',
    description:
      'MVP now, iterate later. You love breaking rules and deploying straight to prod. You’ve been banned from staging more times than GitHub can count.',
    image: 'https://picsum.photos/seed/pirate/400/300',
    imageHint: 'ship pirate',
  },
  {
    id: 'funnelWitch',
    name: 'The Funnel Witch',
    emoji: '🔮',
    description:
      'You conjure conversions with mysterious rituals (and event tracking). Your superpower is finding where users drop off before anyone else.',
    image: 'https://picsum.photos/seed/witch/400/300',
    imageHint: 'crystal ball',
  },
];

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    text: "What's your preferred debugging tool?",
    answers: [
      { text: 'Console.log forever 🐒', scores: { startupSadboi: 1 } },
      { text: 'The browser DevTools 🔍', scores: { dataGremlin: 1 } },
      { text: 'Unit tests, baby 💪', scores: { featureFlagFairy: 1 } },
      { text: 'Debugging is for cowards, just ship it 🚀', scores: { productPirate: 1 } },
    ],
  },
  {
    id: 'q2',
    text: 'How do you name your feature flags?',
    answers: [
      { text: 'test-flag-123-final-v2', scores: { funnelWitch: 1 } }, // Originally Funnel Witch, seems a bit off, maybe sadboi? Keeping as per spec.
      { text: 'feature_autoplay_destroyer', scores: { featureFlagFairy: 1 } },
      { text: 'plswork', scores: { startupSadboi: 1 } },
      { text: 'I use random emoji + chaos', scores: { productPirate: 1 } },
    ],
  },
  {
    id: 'q3',
    text: 'You just shipped a new feature. What next?',
    answers: [
      { text: 'Wait for support tickets to roll in 😅', scores: { startupSadboi: 1 } },
      { text: 'Add a PostHog event and monitor the funnel 📈', scores: { funnelWitch: 1 } },
      { text: 'Use a session replay to see what breaks 🕵️', scores: { dataGremlin: 1 } },
      { text: 'Flag it off for 90% of users, A/B test the rest', scores: { featureFlagFairy: 1 } },
    ],
  },
  {
    id: 'q4',
    text: 'Which task are you most excited about?',
    answers: [
      { text: 'Deleting dead code 🪦', scores: { openSourceOverlord: 1 } },
      { text: 'Writing spicy changelog copy 🌶️', scores: { productPirate: 1 } },
      { text: 'Tracking drop-off in onboarding funnel 🔍', scores: { funnelWitch: 1 } },
      { text: 'Building memes for the team Slack 🤪', scores: { startupSadboi: 1 } },
    ],
  },
  {
    id: 'q5',
    text: 'Your PR just got 19 comments. How do you feel?',
    answers: [
      { text: 'Enlightened 🧘', scores: { openSourceOverlord: 1 } },
      { text: 'Attacked 😤', scores: { startupSadboi: 1 } },
      { text: 'Ready to fix, boss 💼', scores: { featureFlagFairy: 1 } },
      { text: 'I rebased and force pushed. It\'s their problem now 🔫', scores: { productPirate: 1 } },
    ],
  },
  {
    id: 'q6',
    text: 'Which of these is your vibe?',
    answers: [
      { text: '“Move fast and break analytics”', scores: { productPirate: 1 } },
      { text: '“Every click counts”', scores: { funnelWitch: 1 } },
      { text: '“Open source everything”', scores: { openSourceOverlord: 1 } },
      { text: '“I built a dashboard for my cat’s mood”', scores: { dataGremlin: 1 } },
    ],
  },
  {
    id: 'q7',
    text: 'Which quote would you print on your hoodie?',
    answers: [
      { text: '“There’s a flag for that.”', scores: { featureFlagFairy: 1 } },
      { text: '“I track my imposter syndrome in PostHog.”', scores: { startupSadboi: 1 } },
      { text: '“One does not simply ignore user data.”', scores: { funnelWitch: 1 } },
      { text: '“Am I the bug? Yes.”', scores: { dataGremlin: 1 } },
    ],
  },
];

export const personalityIds: PersonalityId[] = personalities.map(p => p.id);
