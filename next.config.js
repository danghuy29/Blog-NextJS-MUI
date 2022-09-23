/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@styles/base.module"; @import "@styles/common.mixin";`,
  },
  env: {
    githubId: process.env.GITHUB_ID,
    githubSecret: process.env.GITHUB_SECRET,
    googleId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    apiUrl: process.env.NEXT_API_URL,
  },
  images: {
    domains: ["4kwallpapers.com", "modactivity.travelerwp.com"],
  },
};

module.exports = nextConfig;
