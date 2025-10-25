import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */

const nextConfig = {
  // Suppress warnings from next-video's deprecated experimental options
  experimental: {},
};

export default withNextVideo(nextConfig);