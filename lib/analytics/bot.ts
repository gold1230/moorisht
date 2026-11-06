export type BotInfo = {
  isBot: boolean;
  botName: string | null;
};

const BOT_SIGNATURES = [
  { name: "Googlebot", pattern: /googlebot/i },
  { name: "Google Ads Bot", pattern: /adsbot-google/i },
  { name: "Google Inspection Tool", pattern: /google-inspectiontool/i },

  { name: "Bingbot", pattern: /bingbot/i },

  { name: "AhrefsBot", pattern: /ahrefsbot/i },
  { name: "SemrushBot", pattern: /semrushbot/i },
  { name: "MJ12bot", pattern: /mj12bot/i },

  { name: "Facebook Bot", pattern: /facebookexternalhit/i },
  { name: "Twitter Bot", pattern: /twitterbot/i },
  { name: "LinkedIn Bot", pattern: /linkedinbot/i },

  { name: "Applebot", pattern: /applebot/i },

  { name: "GPTBot", pattern: /gptbot/i },
  { name: "ChatGPT User", pattern: /chatgpt-user/i },

  { name: "ClaudeBot", pattern: /claudebot/i },
  { name: "Anthropic Bot", pattern: /anthropic/i },

  { name: "YandexBot", pattern: /yandex/i },
  { name: "Baidu Spider", pattern: /baiduspider/i },
  { name: "DuckDuckBot", pattern: /duckduckbot/i },

  { name: "Generic Crawler", pattern: /crawler/i },
  { name: "Generic Spider", pattern: /spider/i },
  { name: "Generic Bot", pattern: /bot/i },
];

export function detectBot(userAgent: string): BotInfo {
  if (!userAgent) {
    return {
      isBot: true,
      botName: "Missing User-Agent",
    };
  }

  for (const bot of BOT_SIGNATURES) {
    if (bot.pattern.test(userAgent)) {
      return {
        isBot: true,
        botName: bot.name,
      };
    }
  }

  return {
    isBot: false,
    botName: null,
  };
}