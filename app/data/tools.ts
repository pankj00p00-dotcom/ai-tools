export type Tool = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  category: string;
  pricing: "Free" | "Freemium" | "Paid";
  rating: number;
  description: string;
  url: string;
};

export const tools: Tool[] = [
  {
    id: 1,
    name: "ChatGPT",
    slug: "chatgpt",
    icon: "🤖",
    category: "Chatbot",
    pricing: "Freemium",
    rating: 4.9,
    description:
      "AI assistant for writing, research, coding and everyday tasks.",
    url: "https://chatgpt.com/",
  },

  {
    id: 2,
    name: "Midjourney",
    slug: "midjourney",
    icon: "🎨",
    category: "Image",
    pricing: "Paid",
    rating: 4.9,
    description:
      "Create stunning AI-generated images from text prompts.",
    url: "https://www.midjourney.com/",
  },

  {
    id: 3,
    name: "Canva AI",
    slug: "canva-ai",
    icon: "🖌️",
    category: "Design",
    pricing: "Free",
    rating: 4.9,
    description:
      "Create designs, presentations and visual content with AI.",
    url: "https://www.canva.com/ai-image-generator/",
  },

  {
    id: 4,
    name: "Runway",
    slug: "runway",
    icon: "🎬",
    category: "Video",
    pricing: "Freemium",
    rating: 4.8,
    description:
      "Generate and edit videos using powerful AI tools.",
    url: "https://runwayml.com/",
  },

  {
    id: 5,
    name: "GitHub Copilot",
    slug: "github-copilot",
    icon: "💻",
    category: "Coding",
    pricing: "Paid",
    rating: 4.8,
    description:
      "AI-powered coding assistant for developers.",
    url: "https://github.com/features/copilot",
  },

  {
    id: 6,
    name: "ElevenLabs",
    slug: "elevenlabs",
    icon: "🎙️",
    category: "Voice",
    pricing: "Freemium",
    rating: 4.8,
    description:
      "Generate realistic AI voices and speech.",
    url: "https://elevenlabs.io/",
  },
    {
    id: 7,
    name: "Claude",
    slug: "claude",
    icon: "🧠",
    category: "Chatbot",
    pricing: "Freemium",
    rating: 4.8,
    description: "AI assistant for writing, analysis, coding and research.",
    url: "https://claude.ai/",
  },

  {
    id: 8,
    name: "Google Gemini",
    slug: "google-gemini",
    icon: "✨",
    category: "Chatbot",
    pricing: "Freemium",
    rating: 4.8,
    description: "Google's AI assistant for research, writing, images and more.",
    url: "https://gemini.google.com/",
  },

  {
    id: 9,
    name: "Perplexity",
    slug: "perplexity",
    icon: "🔎",
    category: "Research",
    pricing: "Freemium",
    rating: 4.7,
    description: "AI-powered search and research assistant with web answers.",
    url: "https://www.perplexity.ai/",
  },

  {
    id: 10,
    name: "Jasper",
    slug: "jasper",
    icon: "✍️",
    category: "Writing",
    pricing: "Paid",
    rating: 4.6,
    description: "AI platform for marketing content and business writing.",
    url: "https://www.jasper.ai/",
  },

  {
    id: 11,
    name: "Copy.ai",
    slug: "copy-ai",
    icon: "📝",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.6,
    description: "AI-powered platform for content and marketing workflows.",
    url: "https://www.copy.ai/",
  },

  {
    id: 12,
    name: "Grammarly",
    slug: "grammarly",
    icon: "✏️",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.7,
    description: "AI writing assistant for grammar, clarity and communication.",
    url: "https://www.grammarly.com/",
  },

  {
    id: 13,
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    icon: "🔥",
    category: "Image",
    pricing: "Freemium",
    rating: 4.7,
    description: "Create and edit images and creative content with generative AI.",
    url: "https://firefly.adobe.com/",
  },

  {
    id: 14,
    name: "Leonardo AI",
    slug: "leonardo-ai",
    icon: "🎨",
    category: "Image",
    pricing: "Freemium",
    rating: 4.7,
    description: "Generate high-quality AI images and creative assets.",
    url: "https://leonardo.ai/",
  },

  {
    id: 15,
    name: "Ideogram",
    slug: "ideogram",
    icon: "🖼️",
    category: "Image",
    pricing: "Freemium",
    rating: 4.6,
    description: "AI image generator known for creating images with text.",
    url: "https://ideogram.ai/",
  },

  {
    id: 16,
    name: "DALL·E",
    slug: "dalle",
    icon: "🌈",
    category: "Image",
    pricing: "Paid",
    rating: 4.6,
    description: "Generate images from natural language descriptions.",
    url: "https://openai.com/dall-e/",
  },

  {
    id: 17,
    name: "Pika",
    slug: "pika",
    icon: "🎞️",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    description: "Create and transform videos with generative AI.",
    url: "https://pika.art/",
  },

  {
    id: 18,
    name: "HeyGen",
    slug: "heygen",
    icon: "👤",
    category: "Video",
    pricing: "Freemium",
    rating: 4.7,
    description: "Create AI avatar videos and multilingual presentations.",
    url: "https://www.heygen.com/",
  },

  {
    id: 19,
    name: "Synthesia",
    slug: "synthesia",
    icon: "🎥",
    category: "Video",
    pricing: "Paid",
    rating: 4.6,
    description: "Create professional AI avatar videos from text.",
    url: "https://www.synthesia.io/",
  },

  {
    id: 20,
    name: "Descript",
    slug: "descript",
    icon: "🎙️",
    category: "Video",
    pricing: "Freemium",
    rating: 4.6,
    description: "Edit video and audio using AI-powered text-based editing.",
    url: "https://www.descript.com/",
  },

  {
    id: 21,
    name: "Cursor",
    slug: "cursor",
    icon: "⌨️",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.8,
    description: "AI-powered code editor designed for faster development.",
    url: "https://www.cursor.com/",
  },

  {
    id: 22,
    name: "Replit",
    slug: "replit",
    icon: "💻",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.6,
    description: "Build, code and deploy applications with AI assistance.",
    url: "https://replit.com/",
  },

  {
    id: 23,
    name: "Tabnine",
    slug: "tabnine",
    icon: "🧑‍💻",
    category: "Coding",
    pricing: "Freemium",
    rating: 4.5,
    description: "AI coding assistant for code completion and development.",
    url: "https://www.tabnine.com/",
  },

  {
    id: 24,
    name: "Murf AI",
    slug: "murf-ai",
    icon: "🎙️",
    category: "Voice",
    pricing: "Freemium",
    rating: 4.6,
    description: "Create professional AI voiceovers and voice content.",
    url: "https://murf.ai/",
  },

  {
    id: 25,
    name: "Speechify",
    slug: "speechify",
    icon: "🔊",
    category: "Voice",
    pricing: "Freemium",
    rating: 4.5,
    description: "Convert written text into natural-sounding AI speech.",
    url: "https://speechify.com/",
  },

  {
    id: 26,
    name: "Suno",
    slug: "suno",
    icon: "🎵",
    category: "Music",
    pricing: "Freemium",
    rating: 4.7,
    description: "Create songs and music using generative AI.",
    url: "https://suno.com/",
  },

  {
    id: 27,
    name: "Udio",
    slug: "udio",
    icon: "🎶",
    category: "Music",
    pricing: "Freemium",
    rating: 4.6,
    description: "Generate original music and songs with AI.",
    url: "https://www.udio.com/",
  },

  {
    id: 28,
    name: "Surfer SEO",
    slug: "surfer-seo",
    icon: "📈",
    category: "SEO",
    pricing: "Paid",
    rating: 4.5,
    description: "AI-powered platform for SEO content optimization.",
    url: "https://surferseo.com/",
  },

  {
    id: 29,
    name: "Semrush",
    slug: "semrush",
    icon: "📊",
    category: "SEO",
    pricing: "Paid",
    rating: 4.7,
    description: "Digital marketing platform for SEO, keywords and competitive research.",
    url: "https://www.semrush.com/",
  },

  {
    id: 30,
    name: "Notion AI",
    slug: "notion-ai",
    icon: "📚",
    category: "Productivity",
    pricing: "Paid",
    rating: 4.6,
    description: "AI features for writing, organizing and managing work in Notion.",
    url: "https://www.notion.com/product/ai",
  },
];