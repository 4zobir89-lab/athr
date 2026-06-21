const en = {
  locale: "en",
  dir: "ltr" as const,
  header: {
    logo: "Athr",
    nav: ["Philosophy", "Product", "How it works", "Pricing"],
    cta: "Get early access",
    toggleMenu: "Toggle menu",
  },
  hero: {
    eyebrow: "Where ideas become living systems",
    headline: ["Turn your thoughts into", "something that lasts"],
    sub: "Athr is not a tool. It is a space where your ideas breathe, connect, and evolve into intelligent systems — quietly, beautifully, without the noise.",
    ctaPrimary: "Begin your thread",
    ctaSecondary: "See the experience",
  },
  philosophy: {
    eyebrow: "The idea",
    heading: "Your mind is full of scattered thoughts, fragments, half-formed ideas. What if they had a home?",
    items: [
      { label: "01", title: "Chaos into clarity", body: "Every great creation starts as noise. Athr gently weaves your fragments into connected structures — not by force, but by understanding the patterns you naturally create." },
      { label: "02", title: "Ideas that evolve", body: "Unlike static notes or rigid task managers, Athr breathes with you. Your ideas grow, connect, and reshape themselves as your thinking deepens over time." },
      { label: "03", title: "A space, not a dashboard", body: "No notifications. No crowded interfaces. Just a quiet digital sanctuary where you can think, create, and let your work surface naturally." },
    ],
  },
  product: {
    eyebrow: "Living product",
    heading: ["A living system for your", "mind's architecture"],
    sub: "Athr is organized around three layers — each designed to feel natural, not imposed. No learning curve. Just a space that fits the way you already think.",
    cards: [
      { num: "01", title: "Assemble", desc: "Drop fragments — text, voice, images, links — into your living canvas. No folders, no rigid structures. Just raw thought, waiting to be shaped.", stat: "100+", statLabel: "input formats" },
      { num: "02", title: "Weave", desc: "Athr's AI quietly connects related ideas across time. It surfaces unexpected links, builds maps of your thinking, and reveals patterns you never noticed.", stat: "93%", statLabel: "connection accuracy" },
      { num: "03", title: "Emerge", desc: "Over time, your scattered fragments evolve into structured systems — documents, plans, creative works — that feel like they were always meant to exist.", stat: "3×", statLabel: "faster ideation" },
    ],
  },
  bento: {
    eyebrow: "Capabilities",
    heading: "Everything you need. Nothing you don't.",
    items: [
      { title: "Spatial canvas", desc: "Ideas arranged in space, not in lists. Move, connect, and see your thoughts from any angle." },
      { title: "Auto-weave", desc: "Athr connects related ideas across time — surfacing links you would never find manually." },
      { title: "Threading", desc: "Follow the natural flow of thought. Branch, merge, and revisit without losing context." },
      { title: "Timeline", desc: "Watch your thinking evolve. Every connection, every branch — your intellectual history alive." },
      { title: "Rich fragments", desc: "Text, sketches, voice notes, code, references. Every format welcome in your living canvas." },
      { title: "System builder", desc: "Assemble your fragments into structured knowledge bases, documents, or creative works." },
    ],
  },
  how: {
    eyebrow: "Three movements",
    heading: "How it works",
    sub: "Three steps. No dashboard. No tutorials. Just you and your evolving mind.",
    steps: [
      { label: "Step 01", title: "Pour your thoughts in", desc: "Write a note. Record a voice memo. Save a link. Drop an image. There are no rules — just a space that accepts everything." },
      { label: "Step 02", title: "Watch it connect", desc: "Athr quietly begins weaving. Ideas link, clusters form, patterns emerge. You don't organize — you observe." },
      { label: "Step 03", title: "Let it emerge", desc: "One day, you notice: your fragments became a system. A plan. A creation. Something that leaves an أثر (athr)." },
    ],
  },
  showcase: {
    eyebrow: "The experience",
    heading: ["See it", "in motion"],
    sub: "A glimpse into how Athr feels — not just what it does.",
    screens: [
      { title: "The canvas", subtitle: "Your thoughts, arranged spatially. No lists. No tables. Just ideas floating in relation to each other." },
      { title: "The weave", subtitle: "Watch connections form across time. Athr surfaces relationships you never consciously made." },
      { title: "The emergence", subtitle: "Fragments become structure. Ideas become systems. Chaos becomes creation." },
    ],
  },
  testimonials: {
    eyebrow: "Voices",
    heading: ["What people", "are saying"],
    items: [
      { quote: "Athr changed how I think about thinking. My scattered research notes became a living thesis I didn't know I was writing.", name: "Dr. Amira Hassan", role: "Researcher, MIT Media Lab" },
      { quote: "I've tried every productivity tool. Athr is the first that doesn't feel like I'm fighting against a system. It just... understands.", name: "Marcus Chen", role: "Founder, Studio Diatype" },
      { quote: "The spatial canvas is magic. I see connections between my design projects that were invisible before. It's like a sixth sense.", name: "Lena Vogt", role: "Design Director, Form Agency" },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, quiet pricing",
    sub: "No hidden tiers. No features hidden behind paywalls. Just the right plan for how you think.",
    suffix: "/month",
    plans: [
      { name: "Free", price: "$0", desc: "For explorers. Start weaving your thoughts into living systems.", features: ["1,000 fragments", "Basic spatial canvas", "Manual connections", "7-day timeline", "Community access"], cta: "Begin for free", popular: false },
      { name: "Pro", price: "$12", desc: "For creators and researchers building deep knowledge systems.", features: ["Unlimited fragments", "Full spatial canvas", "Auto-weave AI", "Unlimited timeline", "Export to any format", "API access"], cta: "Start free trial", popular: true },
      { name: "Studio", price: "$38", desc: "For teams weaving collective intelligence together.", features: ["Everything in Pro", "Team spaces", "Shared canvases", "Admin controls", "Priority AI processing", "Dedicated support"], cta: "Contact sales", popular: false },
    ],
  },
  faq: {
    eyebrow: "Questions",
    heading: "Still wondering?",
    items: [
      { q: "What makes Athr different from Notion, Obsidian, or Roam?", a: "Athr is not a note-taking app or a knowledge base. It is a living system that actively weaves your fragments into connections over time. You don't organize — Athr observes your patterns and surfaces relationships. It's closer to a thinking companion than a tool." },
      { q: "Do I need to learn how to use it?", a: "There is nothing to learn. Just start dropping your thoughts in. The spatial canvas behaves as naturally as arranging papers on a desk — except Athr remembers where everything connects." },
      { q: "Is my data private?", a: "Absolutely. Your canvas is end-to-end encrypted. The AI that weaves your connections runs locally on-device by default. Cloud sync is optional and zero-knowledge encrypted." },
      { q: "Can I export my work?", a: "Yes. Export to Markdown, JSON, PDF, or plain text at any time. Your intellectual property is yours — always." },
      { q: "Does Athr work offline?", a: "Fully. Athr is built as a local-first application. Everything works offline. Sync happens quietly when you're connected." },
      { q: "Who is Athr for?", a: "Researchers, writers, founders, designers, and anyone whose mind is fuller than their notes. If you've ever felt that your best ideas get lost in the noise, Athr is for you." },
    ],
  },
  cta: {
    eyebrow: "Begin your journey",
    heading: ["Ready to leave an", "أثر?"],
    sub: "Join the waitlist. Be among the first to experience a new way of thinking.",
    button: "Join the waitlist",
    finePrint: "No spam. No rush. Just an invitation when we're ready.",
    alert: "Thank you for your interest. The waitlist opens soon.",
  },
  footer: {
    logo: "Athr",
    desc: "A quiet space where your ideas become living systems. Leaving an أثر on everything you create.",
    columns: [
      { title: "Product", links: ["Philosophy", "Features", "Pricing", "Changelog"] },
      { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
      { title: "Support", links: ["Documentation", "Guides", "API Reference", "Contact"] },
      { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
    ],
    copyright: "© 2026 Athr. All rights reserved.",
    tagline: "Made with intention",
  },
  loading: "أثر",
};

export default en;
export type Translations = typeof en;
