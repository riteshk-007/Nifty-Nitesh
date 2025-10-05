export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/contact',
          '/faq',
          '/enrollment',
          '/refer',
          '/blogs',
          '/blogs/*',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/static/',
          '*.json',
          '/tmp/',
          '/cache/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/about',
          '/contact',
          '/faq',
          '/enrollment',
          '/refer',
          '/blogs',
          '/blogs/*',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/static/',
          '/tmp/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/about',
          '/contact',
          '/faq',
          '/enrollment',
          '/refer',
          '/blogs',
          '/blogs/*',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/static/',
          '/tmp/',
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}sitemap.xml`,
  };
}
