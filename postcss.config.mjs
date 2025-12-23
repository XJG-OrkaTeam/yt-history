/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- 新增這一行
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
