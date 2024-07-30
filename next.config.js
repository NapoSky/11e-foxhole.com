/* eslint-env node */

const fs = require('fs-extra');
const path = require('path');

const nextConfig = {
  output: "export",
  webpack: config => {
    // Iterate through all rules and modify TypeScript rules if necessary
    config.module.rules.forEach(rule => {
      if (Array.isArray(rule.oneOf)) {
        rule.oneOf.forEach(oneOf => {
          if (oneOf.test && oneOf.test.toString().includes('tsx|ts')) {
            // Safely handle 'include' property
            if (oneOf.include) {
              oneOf.include = undefined;
            }
          }
        });
      } else if (rule.test && rule.test.toString().includes('tsx|ts')) {
        // Handle rules without 'oneOf'
        if (rule.include) {
          rule.include = undefined;
        }
      }
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    deviceSizes: [320, 640, 1280, 1920],
    unoptimized: true,
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir }) {
    if (!dev) {
      try {
        const redirectsSrc = path.join(dir, '_headers');
        const redirectsDest = path.join(outDir, '_headers');
        await fs.copy(redirectsSrc, redirectsDest);
      } catch (error) {
        console.error('Error copying _headers file:', error);
      }
    }

    return defaultPathMap;
  }
};

module.exports = nextConfig;