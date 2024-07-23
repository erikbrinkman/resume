export default {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/resume" : undefined,
  output: "export",
  images: {
    unoptimized: true,
  },
};
