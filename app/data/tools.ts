export type Tool = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  category: string;
  pricing: "Free" | "Freemium" | "Paid";
  rating: number;
  description: string;
  features: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
  pricingDetails: string;
  alternatives: string[];
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
      "ChatGPT is an AI assistant for writing, coding, research, brainstorming, analysis and everyday tasks.",
    features: [
      "AI writing and content generation",
      "Coding assistance and debugging",
      "Research and information analysis",
      "Image and file understanding",
      "Conversational AI",
      "Brainstorming and productivity assistance",
    ],
    bestFor:
      "Students, writers, developers, researchers, creators and businesses looking for a general-purpose AI assistant.",
    pros: [
      "Easy to use",
      "Supports many different tasks",
      "Useful for writing and coding",
      "Available with a free option",
    ],
    cons: [
      "Some advanced capabilities require a paid plan",
      "AI-generated information should be verified for important decisions",
    ],
    pricingDetails:
      "ChatGPT offers a free option, while paid plans provide additional features and higher usage limits. Check the official website for current plans and pricing.",
    alternatives: ["Claude", "Google Gemini", "Perplexity"],
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
      "Midjourney is an AI image generation platform for creating detailed visuals from text prompts.",
    features: [
      "Text-to-image generation",
      "Creative image generation",
      "Image variations",
      "Style exploration",
      "Prompt-based visual creation",
    ],
    bestFor:
      "Designers, artists, creators, marketers and anyone creating AI-generated visual content.",
    pros: [
      "High-quality image generation",
      "Strong artistic results",
      "Useful for creative projects",
    ],
    cons: [
      "Paid plans are required for regular use",
      "Results can vary depending on prompts",
    ],
    pricingDetails:
      "Midjourney uses paid subscription plans. Check the official website for current plans and pricing.",
    alternatives: ["Leonardo AI", "Ideogram", "Adobe Firefly"],
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
      "Canva AI provides AI-powered features for creating designs, presentations and visual content.",
    features: [
      "AI-assisted design",
      "Image generation",
      "Presentation creation",
      "Template-based design",
      "AI writing assistance",
    ],
    bestFor:
      "Students, marketers, social media creators, businesses and beginners creating visual content.",
    pros: [
      "Beginner friendly",
      "Large design ecosystem",
      "Useful templates",
      "Free option available",
    ],
    cons: [
      "Some AI features require paid access",
      "Advanced design users may need more specialized tools",
    ],
    pricingDetails:
      "Canva offers free access with additional features available through paid plans.",
    alternatives: ["Adobe Firefly", "Midjourney", "Leonardo AI"],
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
      "Runway provides AI-powered tools for generating, editing and transforming video content.",
    features: [
      "AI video generation",
      "Video editing",
      "Generative video effects",
      "Image-to-video workflows",
      "Creative video tools",
    ],
    bestFor:
      "Video creators, filmmakers, marketers, designers and social media creators.",
    pros: [
      "Powerful AI video features",
      "Useful creative workflows",
      "Professional-oriented tools",
    ],
    cons: [
      "Advanced usage may require paid credits",
      "AI video generation can consume credits quickly",
    ],
    pricingDetails:
      "Runway provides a free option with additional capabilities available through paid plans.",
    alternatives: ["Pika", "HeyGen", "Synthesia"],
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
      "GitHub Copilot is an AI coding assistant that helps developers write, understand and improve code.",
    features: [
      "AI code completion",
      "Code generation",
      "Programming assistance",
      "Code explanations",
      "Developer productivity tools",
    ],
    bestFor:
      "Software developers, programmers, engineering teams and students learning to code.",
    pros: [
      "Speeds up coding",
      "Supports many programming workflows",
      "Useful inside development environments",
    ],
    cons: [
      "Paid plans may be required",
      "Generated code should be reviewed",
    ],
    pricingDetails:
      "GitHub Copilot offers subscription-based plans. Check GitHub for current pricing and plan availability.",
    alternatives: ["Cursor", "Replit", "Tabnine"],
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
      "ElevenLabs provides AI voice generation, text-to-speech and voice-related tools.",
    features: [
      "AI text-to-speech",
      "Voice generation",
      "Voice customization",
      "Audio content creation",
      "Multilingual voice capabilities",
    ],
    bestFor:
      "YouTubers, podcasters, content creators, developers and businesses creating voice content.",
    pros: [
      "Natural-sounding voices",
      "Useful for content creation",
      "Supports multiple voice workflows",
    ],
    cons: [
      "Usage limits can apply",
      "Advanced features may require paid plans",
    ],
    pricingDetails:
      "ElevenLabs provides a free option and paid plans with additional usage and features.",
    alternatives: ["Murf AI", "Speechify"],
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
    description:
      "Claude is an AI assistant designed for writing, analysis, coding, research and complex tasks.",
    features: [
      "AI writing",
      "Document analysis",
      "Coding assistance",
      "Research support",
      "Long-form conversations",
    ],
    bestFor:
      "Writers, developers, researchers, students and professionals working with documents and analysis.",
    pros: [
      "Strong writing capabilities",
      "Useful for analysis",
      "Helpful for coding and research",
    ],
    cons: [
      "Some capabilities require paid access",
      "Usage limits can vary by plan",
    ],
    pricingDetails:
      "Claude offers free access with additional capabilities available through paid plans.",
    alternatives: ["ChatGPT", "Google Gemini", "Perplexity"],
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
    description:
      "Google Gemini is an AI assistant for research, writing, coding, image-related tasks and productivity.",
    features: [
      "AI conversations",
      "Writing assistance",
      "Research support",
      "Coding assistance",
      "Multimodal AI capabilities",
    ],
    bestFor:
      "Students, professionals, researchers, writers and users who work with Google's ecosystem.",
    pros: [
      "Broad range of AI capabilities",
      "Useful for research",
      "Strong integration with Google's ecosystem",
    ],
    cons: [
      "Features can vary by region and plan",
      "Some advanced capabilities may require paid access",
    ],
    pricingDetails:
      "Google Gemini provides free access with additional features available through paid offerings.",
    alternatives: ["ChatGPT", "Claude", "Perplexity"],
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
    description:
      "Perplexity is an AI-powered search and research assistant designed to provide answers with web-based information.",
    features: [
      "AI-powered search",
      "Research assistance",
      "Web-based answers",
      "Source discovery",
      "Follow-up questions",
    ],
    bestFor:
      "Students, researchers, professionals, writers and users looking for AI-assisted web research.",
    pros: [
      "Useful for research",
      "Search-focused experience",
      "Helpful source discovery",
    ],
    cons: [
      "Some advanced features require paid access",
      "Important information should still be independently verified",
    ],
    pricingDetails:
      "Perplexity offers free access with additional capabilities available through paid plans.",
    alternatives: ["ChatGPT", "Claude", "Google Gemini"],
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
    description:
      "Jasper is an AI platform focused on marketing content, business writing and content workflows.",
    features: [
      "Marketing content generation",
      "AI writing",
      "Content workflows",
      "Brand-focused writing",
      "Business content creation",
    ],
    bestFor:
      "Marketing teams, businesses, content marketers and agencies.",
    pros: [
      "Marketing-focused features",
      "Useful for business content",
      "Designed for content workflows",
    ],
    cons: [
      "Paid platform",
      "May be more than needed for simple writing tasks",
    ],
    pricingDetails:
      "Jasper primarily uses paid plans. Check its official website for current pricing.",
    alternatives: ["Copy.ai", "Grammarly", "ChatGPT"],
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
    description:
      "Copy.ai is an AI platform for content creation, marketing workflows and business writing.",
    features: [
      "AI copywriting",
      "Marketing content",
      "Business workflows",
      "Content generation",
      "Writing assistance",
    ],
    bestFor:
      "Marketers, sales teams, businesses, agencies and content creators.",
    pros: [
      "Marketing-focused workflows",
      "Useful for business content",
      "Multiple content use cases",
    ],
    cons: [
      "Advanced features may require paid access",
      "Generated content should be reviewed",
    ],
    pricingDetails:
      "Copy.ai offers access options that can include free and paid plans depending on current offerings.",
    alternatives: ["Jasper", "Grammarly", "ChatGPT"],
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
    description:
      "Grammarly is an AI writing assistant for grammar, clarity, tone and everyday communication.",
    features: [
      "Grammar checking",
      "Writing suggestions",
      "Clarity improvements",
      "Tone assistance",
      "AI writing support",
    ],
    bestFor:
      "Students, professionals, writers, businesses and anyone improving written communication.",
    pros: [
      "Easy to use",
      "Helpful writing suggestions",
      "Useful across many types of writing",
    ],
    cons: [
      "Advanced features require paid access",
      "Suggestions should be reviewed for context",
    ],
    pricingDetails:
      "Grammarly offers free functionality alongside paid plans with additional writing features.",
    alternatives: ["QuillBot", "Copy.ai", "ChatGPT"],
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
    description:
      "Adobe Firefly provides generative AI tools for creating and editing images and creative content.",
    features: [
      "Text-to-image generation",
      "Generative image editing",
      "Creative effects",
      "Image transformation",
      "Adobe creative workflows",
    ],
    bestFor:
      "Designers, photographers, marketers, creators and Adobe users.",
    pros: [
      "Strong creative features",
      "Works within Adobe's ecosystem",
      "Useful for image editing",
    ],
    cons: [
      "Some features require paid access",
      "Usage limits may apply",
    ],
    pricingDetails:
      "Adobe Firefly offers free access with additional capabilities available through Adobe plans and credits.",
    alternatives: ["Midjourney", "Leonardo AI", "Ideogram"],
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
    description:
      "Leonardo AI is a generative AI platform for creating images and creative visual assets.",
    features: [
      "AI image generation",
      "Creative asset generation",
      "Image customization",
      "Style exploration",
      "Generative design tools",
    ],
    bestFor:
      "Artists, designers, game creators, marketers and visual content creators.",
    pros: [
      "Wide range of creative tools",
      "Useful for visual content",
      "Good customization options",
    ],
    cons: [
      "Advanced usage may require paid access",
      "Results depend on prompts and settings",
    ],
    pricingDetails:
      "Leonardo AI offers free access with additional usage and features through paid plans.",
    alternatives: ["Midjourney", "Ideogram", "Adobe Firefly"],
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
    description:
      "Ideogram is an AI image generator designed for creating visual content from text prompts.",
    features: [
      "Text-to-image generation",
      "Creative image generation",
      "Typography-focused image creation",
      "Image variations",
      "Visual experimentation",
    ],
    bestFor:
      "Designers, marketers, creators and users creating AI-generated graphics.",
    pros: [
      "Strong text rendering in images",
      "Easy creative experimentation",
      "Useful for graphic concepts",
    ],
    cons: [
      "Free usage may have limits",
      "Advanced features may require paid access",
    ],
    pricingDetails:
      "Ideogram provides free usage with additional capabilities through paid plans.",
    alternatives: ["Midjourney", "Leonardo AI", "Adobe Firefly"],
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
    description:
      "DALL·E is an AI image generation system for creating visuals from natural language descriptions.",
    features: [
      "Text-to-image generation",
      "Creative image creation",
      "Prompt-based visual generation",
      "Concept visualization",
    ],
    bestFor:
      "Creators, designers, marketers, writers and users who need AI-generated visuals.",
    pros: [
      "Simple natural-language prompting",
      "Useful for creative concepts",
      "Wide range of visual possibilities",
    ],
    cons: [
      "Availability and pricing can change",
      "Generated images should be reviewed carefully",
    ],
    pricingDetails:
      "Access and pricing depend on the current OpenAI product offering. Check the official website for current details.",
    alternatives: ["Midjourney", "Ideogram", "Adobe Firefly"],
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
    description:
      "Pika provides generative AI tools for creating and transforming video content.",
    features: [
      "AI video generation",
      "Image-to-video creation",
      "Video transformation",
      "Creative video effects",
    ],
    bestFor:
      "Social media creators, marketers, artists and video creators.",
    pros: [
      "Easy creative video generation",
      "Useful for short-form content",
      "Multiple generative workflows",
    ],
    cons: [
      "Usage limits may apply",
      "Advanced features can require paid access",
    ],
    pricingDetails:
      "Pika provides free access with additional capabilities through paid plans.",
    alternatives: ["Runway", "HeyGen", "Synthesia"],
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
    description:
      "HeyGen is an AI video platform for creating avatar videos, presentations and multilingual content.",
    features: [
      "AI avatar videos",
      "Text-to-video",
      "AI voice generation",
      "Multilingual video creation",
      "Business presentations",
    ],
    bestFor:
      "Businesses, marketers, educators, creators and teams producing presenter-style videos.",
    pros: [
      "AI avatar workflow",
      "Useful for business videos",
      "Supports multilingual content",
    ],
    cons: [
      "Advanced features may require paid access",
      "Usage limits vary by plan",
    ],
    pricingDetails:
      "HeyGen provides access options including free and paid plans. Check the official website for current pricing.",
    alternatives: ["Synthesia", "Runway", "Pika"],
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
    description:
      "Synthesia is an AI video platform for creating professional avatar-based videos from text.",
    features: [
      "AI avatar videos",
      "Text-to-video",
      "Business presentations",
      "Multilingual video creation",
      "Video localization",
    ],
    bestFor:
      "Businesses, training teams, educators and organizations creating professional videos.",
    pros: [
      "Professional presentation workflows",
      "AI avatar technology",
      "Useful for training and business communication",
    ],
    cons: [
      "Paid service",
      "Best suited to specific business use cases",
    ],
    pricingDetails:
      "Synthesia uses paid plans. Check the official website for current plans and pricing.",
    alternatives: ["HeyGen", "Runway", "Pika"],
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
    description:
      "Descript is an AI-powered video and audio editor that uses text-based editing workflows.",
    features: [
      "Text-based video editing",
      "Audio editing",
      "Transcription",
      "AI-assisted editing",
      "Content repurposing",
    ],
    bestFor:
      "Podcasters, YouTubers, video editors and content creators.",
    pros: [
      "Text-based editing workflow",
      "Useful for podcasts and video",
      "Combines transcription and editing",
    ],
    cons: [
      "Advanced features may require paid access",
      "Some workflows have usage limits",
    ],
    pricingDetails:
      "Descript offers free and paid plans with different features and usage limits.",
    alternatives: ["Runway", "CapCut", "Adobe Premiere Pro"],
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
    description:
      "Cursor is an AI-powered code editor designed to help developers write and understand software faster.",
    features: [
      "AI code completion",
      "Code generation",
      "Codebase understanding",
      "AI coding chat",
      "Developer productivity tools",
    ],
    bestFor:
      "Developers, programmers, software teams and students building applications.",
    pros: [
      "AI-focused coding workflow",
      "Useful for large codebases",
      "Can speed up development",
    ],
    cons: [
      "Advanced usage may require paid access",
      "Generated code should be reviewed",
    ],
    pricingDetails:
      "Cursor offers free access with additional capabilities through paid plans.",
    alternatives: ["GitHub Copilot", "Replit", "Tabnine"],
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
    description:
      "Replit is an online development platform for building, coding and deploying applications with AI assistance.",
    features: [
      "Browser-based coding",
      "AI coding assistance",
      "Application development",
      "Deployment tools",
      "Collaborative development",
    ],
    bestFor:
      "Students, developers, beginners and teams building applications online.",
    pros: [
      "Runs in the browser",
      "Useful for beginners",
      "Combines development and deployment",
    ],
    cons: [
      "Some advanced features require paid access",
      "Usage limits depend on plan",
    ],
    pricingDetails:
      "Replit provides free and paid options with different development features and usage limits.",
    alternatives: ["Cursor", "GitHub Copilot", "Tabnine"],
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
    description:
      "Tabnine is an AI coding assistant for code completion and software development.",
    features: [
      "AI code completion",
      "Coding assistance",
      "Developer productivity",
      "Code generation",
    ],
    bestFor:
      "Software developers, programmers and development teams.",
    pros: [
      "Focused on coding",
      "Useful for code completion",
      "Developer-oriented workflow",
    ],
    cons: [
      "Advanced capabilities may require paid access",
      "Generated suggestions need review",
    ],
    pricingDetails:
      "Tabnine offers access options that include free and paid plans.",
    alternatives: ["GitHub Copilot", "Cursor", "Replit"],
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
    description:
      "Murf AI is a voice generation platform for creating AI voiceovers and audio content.",
    features: [
      "AI voiceovers",
      "Text-to-speech",
      "Voice customization",
      "Audio content creation",
      "Voice-based presentations",
    ],
    bestFor:
      "YouTubers, marketers, educators, businesses and content creators.",
    pros: [
      "Professional voiceover workflows",
      "Useful for presentations",
      "Multiple voice options",
    ],
    cons: [
      "Advanced usage may require paid access",
      "Usage limits depend on plan",
    ],
    pricingDetails:
      "Murf AI provides free access options and paid plans with additional capabilities.",
    alternatives: ["ElevenLabs", "Speechify"],
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
    description:
      "Speechify converts written content into spoken audio using AI-powered text-to-speech technology.",
    features: [
      "Text-to-speech",
      "AI voices",
      "Document reading",
      "Audio content",
      "Reading assistance",
    ],
    bestFor:
      "Students, readers, professionals and users who prefer listening to written content.",
    pros: [
      "Useful for listening to documents",
      "Easy text-to-speech workflow",
      "Helpful for productivity",
    ],
    cons: [
      "Some features require paid access",
      "Voice availability varies",
    ],
    pricingDetails:
      "Speechify offers free and paid options with additional features available through premium plans.",
    alternatives: ["ElevenLabs", "Murf AI"],
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
    description:
      "Suno is a generative AI music platform for creating songs and music from prompts.",
    features: [
      "AI music generation",
      "Song creation",
      "Prompt-based music",
      "Creative music experimentation",
    ],
    bestFor:
      "Musicians, creators, hobbyists and social media content creators.",
    pros: [
      "Easy music creation",
      "Useful for creative experimentation",
      "Fast song generation",
    ],
    cons: [
      "Usage limits can apply",
      "Commercial usage terms should be checked",
    ],
    pricingDetails:
      "Suno offers free access with additional capabilities through paid plans.",
    alternatives: ["Udio"],
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
    description:
      "Udio is a generative AI platform for creating original music and songs.",
    features: [
      "AI music generation",
      "Song creation",
      "Text-based music prompts",
      "Creative audio generation",
    ],
    bestFor:
      "Musicians, creators, artists and users experimenting with AI-generated music.",
    pros: [
      "Creative music generation",
      "Easy prompt-based workflow",
      "Useful for music experimentation",
    ],
    cons: [
      "Usage limits may apply",
      "Licensing terms should be checked before commercial use",
    ],
    pricingDetails:
      "Udio provides access options that may include free and paid usage. Check the official website for current details.",
    alternatives: ["Suno"],
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
    description:
      "Surfer SEO is an SEO platform that helps optimize content for search visibility.",
    features: [
      "SEO content optimization",
      "Content analysis",
      "Keyword-focused recommendations",
      "Content planning",
      "Search optimization workflows",
    ],
    bestFor:
      "SEO professionals, content marketers, agencies and website owners.",
    pros: [
      "Focused on SEO content",
      "Useful optimization recommendations",
      "Content-focused workflow",
    ],
    cons: [
      "Paid platform",
      "SEO recommendations still require human judgment",
    ],
    pricingDetails:
      "Surfer SEO primarily uses paid plans. Check its official website for current pricing.",
    alternatives: ["Semrush", "Ahrefs"],
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
    description:
      "Semrush is a digital marketing platform for SEO, keyword research, competitive analysis and content marketing.",
    features: [
      "Keyword research",
      "SEO analysis",
      "Competitor research",
      "Content marketing tools",
      "Website auditing",
    ],
    bestFor:
      "SEO professionals, marketers, agencies, businesses and website owners.",
    pros: [
      "Broad digital marketing toolkit",
      "Strong research capabilities",
      "Useful for competitive analysis",
    ],
    cons: [
      "Paid platform",
      "Large number of features can take time to learn",
    ],
    pricingDetails:
      "Semrush primarily offers paid subscription plans with different feature levels.",
    alternatives: ["Surfer SEO", "Ahrefs"],
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
    description:
      "Notion AI adds AI-powered features for writing, organizing information and managing work inside Notion.",
    features: [
      "AI writing assistance",
      "Content summarization",
      "Workspace assistance",
      "Information organization",
      "Productivity workflows",
    ],
    bestFor:
      "Students, teams, project managers, writers and professionals using Notion.",
    pros: [
      "Integrated into Notion workflows",
      "Useful for productivity",
      "Helpful for organizing information",
    ],
    cons: [
      "Paid access may be required",
      "Best experience depends on using the Notion ecosystem",
    ],
    pricingDetails:
      "Notion AI is available as part of Notion's current paid offerings. Check the official website for current pricing and availability.",
    alternatives: ["ChatGPT", "Claude", "Google Gemini"],
    url: "https://www.notion.com/product/ai",
  },
];