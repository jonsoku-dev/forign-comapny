/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  images: {
    domains: [
      "drive.google.com",
      "media.connpass.com",
      "bucket-rctv5y.s3.ap-northeast-1.amazonaws.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
