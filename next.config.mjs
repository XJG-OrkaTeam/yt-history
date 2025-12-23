/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- 確保這行在這裡，而不是在 postcss 設定檔中
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
