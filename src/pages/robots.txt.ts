const disallowedAgents = [
  // AI training scrapers
  'anthropic-ai',
  'ClaudeBot',
  'GPTBot',
  'ChatGPT-User',
  'CCBot',
  'Google-Extended',
  'PerplexityBot',
  'OmigiliBot',
  'Bytespider',
  'meta-externalagent',
  'facebookexternalhit',
  'FacebookBot',
  'facebot',
  // SEO / analytics crawlers
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'BLEXBot',
  'PetalBot',
  'Baiduspider',
  'YisouSpider',
  'Sogou',
  'SeekportBot',
  'Exabot',
  'Mail.RU_Bot',
  'GoogleOther',
];

export async function GET(): Promise<Response> {
  const body = [
    ...disallowedAgents.map((agent) => `User-agent: ${agent}\nDisallow: /`),
    '',
    'User-agent: *',
    'Disallow:',
    '',
    `Sitemap: ${import.meta.env.SITE}/sitemap-index.xml`,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
