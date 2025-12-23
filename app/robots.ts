import { MetadataRoute } from 'next'

export const dynamic = 'force-static' // <--- 新增這行

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://youtubestats.forgetimer.com/sitemap.xml',
  }
} 
