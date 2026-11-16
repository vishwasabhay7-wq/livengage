// next.config.ts
import type { NextConfig } from 'next';

// Old blog URLs ("/blogs/<title>--<documentId>") → clean keyword URLs.
const BLOG_REDIRECTS: [documentId: string, newPath: string][] = [
  ['di7bl9tg757iv0f67y1qys2r', '/blog/live-streaming-camera-setup-tips'],
  ['e5uu012hylv4zwp79ev1hcqa', '/blog/how-to-build-a-live-streaming-agency'],
  ['zz6oflbahujw7ks2l5fiejcv', '/blog/chill-chat/how-to-earn-on-chill-chat-chamet'],
  ['eiw2h8vk3866catol3n6j9dl', '/blog/how-to-start-live-streaming-and-earn'],
];

const nextConfig: NextConfig = {
  // All redirects are permanent (308, which Google treats the same as 301)
  // and go straight to the final URL, so there are no redirect chains.
  async redirects() {
    return [
      // Apex domain → www in a single hop.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'livengage.com' }],
        destination: 'https://www.livengage.com/:path*',
        permanent: true,
      },
      // Broken relative "Agent Onboarding" links.
      { source: '/blogs/agent-ecosystem', destination: '/agent-ecosystem', permanent: true },
      { source: '/blog/agent-ecosystem', destination: '/agent-ecosystem', permanent: true },
      { source: '/partner-apps/agent-ecosystem', destination: '/agent-ecosystem', permanent: true },
      // Partner app pages → keyword URLs.
      { source: '/partner-apps/partner-app', destination: '/vone-app-agency', permanent: true },
      { source: '/partner-apps/partner-app-1', destination: '/chill-chat-agency', permanent: true },
      { source: '/partner-apps/partner-app-2', destination: '/niki-live-agency', permanent: true },
      // Join Us duplicates the host page.
      { source: '/join-us', destination: '/become-a-host', permanent: true },
      // Blog → /blog with clean post slugs.
      ...BLOG_REDIRECTS.map(([id, destination]) => ({
        source: `/blogs/:title(.*--${id})`,
        destination,
        permanent: true,
      })),
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/blogs/:path*', destination: '/blog/:path*', permanent: true },
    ];
  },
  images: {
    // This tells Next.js to bypass the local proxy optimizer for local images, 
    // which completely fixes the "private ip" crash during development.
    unoptimized: process.env.NODE_ENV === 'development', 
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'api.livengage.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
