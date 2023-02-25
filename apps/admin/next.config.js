/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, externalDir: true, swcPlugins: [['next-superjson-plugin', {}]] },
};

module.exports = nextConfig;
