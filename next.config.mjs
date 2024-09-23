/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import nextMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const plugins = [];

const options = {
  theme: "tokyo-night",
  mdxRs: false,
};

plugins.push(
  nextMDX({
    extension: /\.(md|mdx)$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    },
  }),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
};

export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);
