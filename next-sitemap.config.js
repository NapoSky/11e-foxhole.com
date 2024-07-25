/* eslint-env node */
module.exports = {
  siteUrl: 'https://11e-foxhole.com',
  exclude: ['/404*', '/500*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1 : config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/404', '/500', '/private/'],
      },
    ],
  },
  generateIndexSitemap: false, // Add this line to avoid generating an index sitemap
};
