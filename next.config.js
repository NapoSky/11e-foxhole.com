/* eslint-env node */

const fs = require('fs-extra');
const path = require('path');

const nextConfig = {
  output: "export",
  amp: {
    canonicalBase: 'https://11e-foxhole.com/',
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpe?g|webp)$/,
      type: 'asset/resource',
      generator: {
        filename: (pathData) => {
          const name = path.basename(pathData.filename, path.extname(pathData.filename));
          const extension = path.extname(pathData.filename);
          const sizes = [320, 640, 1280, 1920, 2560];
          const size = sizes.find(s => name.endsWith(`-${s}`)) || sizes[sizes.length - 1]; // Default to largest size if not found
          const baseName = name.replace(/-\d+$/, ''); // Remove size from name if present
          return `${baseName}-${size}${extension}`;
        },
        publicPath: '/images/',
      },
    });
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
    deviceSizes: [320, 640, 1280, 1920, 2560],
    unoptimized: true,
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir }) {
    if (!dev) {
      try {
        // Copy _headers file
        const headersSrc = path.join(dir, '_headers');
        const headersDest = path.join(outDir, '_headers');
        await fs.copy(headersSrc, headersDest);

        // Copy _redirects file
        const redirectsSrc = path.join(dir, '_redirects');
        const redirectsDest = path.join(outDir, '_redirects');
        await fs.copy(redirectsSrc, redirectsDest);
      } catch (error) {
        console.error('Error copying files:', error);
      }
    }

    return defaultPathMap;
  }
};

module.exports = nextConfig;
