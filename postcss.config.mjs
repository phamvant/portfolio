/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default config;
