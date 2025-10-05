export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://niftynitesh.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 5,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        crawlDelay: 10,
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}