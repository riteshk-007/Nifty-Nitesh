/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: 'https', hostname: 'g0p7auwucr.ufs.sh' },
      { protocol: 'https', hostname: 'utfs.io' },
      { protocol: 'https', hostname: 'pub-e011511fdabb4213b96593d74959b8ca.r2.dev' },
      { protocol: 'https', hostname: '*.r2.dev' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      // keep existing hosts
      { protocol: 'https', hostname: 'aceternity.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },

  // Improve production build output and linting behavior
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  eslint: { ignoreDuringBuilds: true },
  compress: true,

  async headers() {
    return [
      {
        source: '/:all*(png|jpg|jpeg|gif|webp|avif|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*(js|css)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  assetPrefix: process.env.NEXT_PUBLIC_CDN_URL || undefined,

  // preserve existing webpack rule
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
      },
    });
    return config;
  },
};

export default nextConfig;
