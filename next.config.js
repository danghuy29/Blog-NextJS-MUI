/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@styles/base.module"; @import "@styles/common.mixin";`,
  },
  env:{
    githubId: process.env.GITHUB_ID,
    githubSecret: process.env.GITHUB_SECRET,
    googleId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    apiUrl: process.env.NEXT_API_URL
  }
}

module.exports = nextConfig
