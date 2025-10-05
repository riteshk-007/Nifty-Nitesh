import { getSitemapData } from "@/lib/blog-api";

// Always generate fresh sitemap on each request (post-build updates reflected)
export const dynamic = 'force-dynamic';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://niftynitesh.com';

  try {
    const data = await getSitemapData();
    const posts = data?.posts || [];
    const categories = data?.categories || [];

    const blogUrls = posts
      .filter((p) => !!p?.slug)
      .map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.8,
      }));

    const categoryUrls = categories
      .filter((c) => !!(c?.slug || c?.name))
      .map((category) => ({
        url: `${baseUrl}/blogs?category=${encodeURIComponent(category.slug || category.name)}`,
        lastModified: new Date(category.updatedAt || Date.now()),
        changeFrequency: 'daily',
        priority: 0.7,
      }));

    const staticPages = [
      { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
      { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
      { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
      { url: `${baseUrl}/blogs`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    ];

    return [...staticPages, ...blogUrls, ...categoryUrls];
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return [
      { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ];
  }
}