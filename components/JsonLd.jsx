// Client-safe JSON-LD injector component for Articles and related schemas
import React from 'react';



export function ArticleJsonLd({ post }) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://niftynitesh.com';
    const categoryName = typeof post.category === 'string' ? post.category : post.category?.name;

    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                '@id': `${baseUrl}/blogs/${post.slug}/#article`,
                headline: post.title,
                description: post.excerpt,
                image: post.featuredImage
                    ? {
                        '@type': 'ImageObject',
                        url: post.featuredImage,
                        width: 1200,
                        height: 630,
                    }
                    : undefined,
                datePublished: post.publishedAt,
                dateModified: post.updatedAt,
                author: post.author
                    ? {
                        '@type': 'Person',
                        name: post.author,
                        url: `${baseUrl}/author/${post.authorSlug || ''}`,
                    }
                    : undefined,
                publisher: {
                    '@type': 'Organization',
                    name: 'Nifty Nitesh',
                    logo: {
                        '@type': 'ImageObject',
                        url: `${baseUrl}/logo.png`,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `${baseUrl}/blogs/${post.slug}/`,
                },
                wordCount: post.wordCount,
                articleSection: categoryName,
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${baseUrl}/blogs/${post.slug}/#breadcrumb`,
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
                    { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${baseUrl}/blogs` },
                    { '@type': 'ListItem', position: 3, name: post.title },
                ],
            },
            {
                '@type': 'WebSite',
                '@id': `${baseUrl}/#website`,
                url: baseUrl,
                name: 'Nifty Nitesh',
                description: 'Trading and Investment Services',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${baseUrl}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default ArticleJsonLd;
