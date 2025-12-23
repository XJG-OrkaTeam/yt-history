/** @type {import('postcss-load-config').Config} */
const config = {
  output: 'export', // 添加這一行
  plugins: {
    tailwindcss: {},
  },
};

export default config;
