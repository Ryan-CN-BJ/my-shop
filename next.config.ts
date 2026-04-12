import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'duyi-resource.oss-cn-beijing.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    root: __dirname, // 强制指定当前项目目录为根目录
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
