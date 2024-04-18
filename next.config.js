export default {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/resume" : undefined,
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "docs" : undefined,
  images: {
    unoptimized: true,
  },
};
