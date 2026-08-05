import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/the-echo",
  assetPrefix: "/the-echo",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
