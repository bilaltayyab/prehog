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
  },
  {
    id: 'startupSadboi',
    name: 'The Startup Sadboi',
    emoji: '🫠',
    description:
      "You cry in TypeScript. But you care deeply. You’re driven by vision, VC fear, and vibes. You make memes and MVPs with equal passion.",
  },
  {
    id: 'dataGremlin',
    name: 'The Data Gremlin',
    emoji: '🐀',
    description:
      'Your natural habitat is the analytics dashboard. You find bugs by sniffing out anomalies like a bloodhound in a datacenter.',
  },
  {
    id: 'featureFlagFairy',
    name: 'The Feature Flag Fairy',
    emoji: '🧚',
    description:
      'You sprinkle toggles and magic all over your codebase. Risk mitigation is your love language. You believe nothing should go live without a kill switch.',
  },
  {
    id: 'productPirate',
    name: 'The Product Pirate',
    emoji: '🏴‍☠️',
    description:
      'MVP now, iterate later. You love breaking rules and deploying straight to prod. You’ve been banned from staging more times than GitHub can count.',
  },
  {
    id: 'funnelWitch',
    name: 'The Funnel Witch',
    emoji: '🔮',
    description:
      'You conjure conversions with mysterious rituals (and event tracking). Your superpower is finding where users drop off before anyone else.',
  },
];

export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    text: "When something unexpected crops up in a project (a bug, a weird metric, confusing feedback), what's your first instinct?",
    answers: [
        { text: "Dive into the raw data, logs, or user feedback myself. 🕵️", scores: { dataGremlin: 1 } },
        { text: "Poll the team: 'Anyone else seeing this? What's the vibe?' 🫠", scores: { startupSadboi: 1 } },
        { text: "Consult our documented processes or knowledge base. 📜", scores: { openSourceOverlord: 1 } },
        { text: "Can we isolate this? Maybe toggle it off or roll back? 🧚", scores: { featureFlagFairy: 1 } }
    ]
  },
  {
    id: 'q2',
    text: "When launching a new campaign, feature, or initiative, how do you prefer to label your tracking or internal names?",
    answers: [
        { text: "Super organized: `initiative_goal_date_v3_final` 📁", scores: { openSourceOverlord: 1 } },
        { text: "Short, punchy, and slightly chaotic (e.g., 'MegaBlast2025💥')", scores: { productPirate: 1 } },
        { text: "Pragmatic: Whatever the tool suggests or is easiest. 🤷", scores: { startupSadboi: 1 } },
        { text: "Descriptive for analysis: `UserSegment_CampaignObjective_KeyMetric` 📊", scores: { funnelWitch: 1 } }
    ]
  },
  {
    id: 'q3',
    text: "You've just launched a new project/campaign/feature. What's your immediate follow-up action?",
    answers: [
        { text: "Anxiously refresh dashboards and wait for initial reactions. 😅", scores: { startupSadboi: 1 } },
        { text: "Monitor key metrics and conversion funnels like a hawk. 📈", scores: { funnelWitch: 1 } },
        { text: "Check user session recordings or direct feedback channels. 🎧", scores: { dataGremlin: 1 } },
        { text: "Is the rollback plan/feature toggle ready, just in case things go sideways? 🛡️", scores: { featureFlagFairy: 1 } }
    ]
  },
  {
    id: 'q4',
    text: "Which of these 'behind-the-scenes' tasks gives you a quiet sense of satisfaction?",
    answers: [
        { text: "Cleaning up a messy project folder, Notion doc, or spreadsheet. ✨", scores: { openSourceOverlord: 1 } },
        { text: "Crafting perfectly worded announcement copy or update notes. 🌶️", scores: { productPirate: 1 } },
        { text: "Discovering an unexpected 'aha!' insight in user data. 💡", scores: { funnelWitch: 1 } },
        { text: "Automating a tedious manual process for the team. 🤖", scores: { dataGremlin: 1 } }
    ]
  },
  {
    id: 'q5',
    text: "Your big project proposal or design document just received a LOT of critical feedback. Your internal monologue:",
    answers: [
        { text: "Awesome! More brainpower to make this even stronger. 🧘", scores: { openSourceOverlord: 1 } },
        { text: "They just don't get the vision... yet. But they will. 😤", scores: { startupSadboi: 1 } },
        { text: "Okay, how can we phase this or A/B test some of these concerns? 🤔", scores: { featureFlagFairy: 1 } },
        { text: "Challenge accepted. Time to iterate and win them over! 🏴‍☠️", scores: { productPirate: 1 } }
    ]
  },
  {
    id: 'q6',
    text: "Pick your general 'work mode' or philosophy for the day:",
    answers: [
        { text: "“Ship it, learn, iterate. Perfection is a myth.” 🚀", scores: { productPirate: 1 } },
        { text: "“If you can't measure it, you can't improve it.” 📏", scores: { dataGremlin: 1 } },
        { text: "“Clarity, consistency, and good documentation save lives (and time).” ✍️", scores: { openSourceOverlord: 1 } },
        { text: "“What if we just A/B test that assumption?” 🧪", scores: { funnelWitch: 1 } }
    ]
  },
  {
    id: 'q7',
    text: "Which of these unofficial slogans would you champion for the company?",
    answers: [
        { text: "“There's probably a toggle for that.” (Or there should be!)", scores: { featureFlagFairy: 1 } },
        { text: "“Fueled by user data and existential hope.”", scores: { startupSadboi: 1 } },
        { text: "“In Data We Trust. (Everyone else, bring charts.)”", scores: { dataGremlin: 1 } },
        { text: "“Why guess when you can know? (Seriously, check the funnel.)”", scores: { funnelWitch: 1 } }
    ]
  },
  {
    id: 'q8',
    text: "The most satisfying way to end a productive Friday afternoon is:",
    answers: [
        { text: "Archiving that massive, lingering project. Done is beautiful! ✅", scores: { openSourceOverlord: 1 } },
        { text: "Prepping an exciting new experiment or campaign to launch next week. 🎉", scores: { productPirate: 1 } },
        { text: "Uncovering a key user behavior pattern that explains a weird metric. 🤯", scores: { dataGremlin: 1 } },
        { text: "Quietly enabling a cool new (but small) thing for a select group of users. 🤫", scores: { featureFlagFairy: 1 } }
    ]
  },
];

export const personalityIds: PersonalityId[] = personalities.map(p => p.id);
