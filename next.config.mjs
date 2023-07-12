export const reactStrictMode = true;
export const assetPrefix =
  process.env.NODE_ENV === "production" ? "/resume" : undefined;
export const output = "export";
export const distDir =
  process.env.NODE_ENV === "production" ? "docs" : undefined;
