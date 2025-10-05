import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { shimmer, toBase64, safeImageUrl } from '@/lib/utils';
import { getPost } from '@/lib/blog-api';
import ArticleJsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/app/components/Breadcrumbs';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    try {
        const data = await getPost(params.slug);
        const post = data.post;

        const year = new Date().getFullYear();
        let absoluteTitle = (post.metaTitle || post.title || '').trim();
        if (/which is best/i.test(absoluteTitle) && !absoluteTitle.includes(String(year))) {
            absoluteTitle = absoluteTitle.replace(/\??\s*$/i, ` in ${year}?`);
        }

        const url = new URL(`/blogs/${params.slug}`, process.env.NEXT_PUBLIC_SITE_URL || 'https://niftynitesh.com').toString();

        const globalTitle = 'Best Share Market & Stock Trading Classes in India - Nifty Nitesh';
        const globalDescription = "Join Nifty Nitesh for expert-led share market and stock trading classes in Delhi, Mumbai, Pune, Dubai, USA. Learn technical analysis, fundamental analysis, demand supply trading, smart money concepts. Available online & offline in Rajapuri, Uttam Nagar, Dwarka. Low price guaranteed! Batch starting soon.";

        return {
            title: { absolute: post.title || absoluteTitle || globalTitle },
            description: post.metaDescription || post.excerpt || globalDescription,
            keywords: post.keywords || ['share market', 'stock trading', 'technical analysis', 'Nifty Nitesh'],
            authors: post.author ? [{ name: post.author }] : undefined,
            alternates: { canonical: url },
            openGraph: {
                title: absoluteTitle || post.title || globalTitle,
                description: post.metaDescription || post.excerpt || globalDescription,
                url,
                siteName: 'Nifty Nitesh',
                images: [post.featuredImage].filter(Boolean),
                locale: 'en_US',
                type: 'article',
                publishedTime: post.publishedAt,
                modifiedTime: post.updatedAt,
                authors: post.author ? [post.author] : undefined,
            },
            twitter: {
                card: 'summary_large_image',
                title: absoluteTitle || post.title || globalTitle,
                description: post.metaDescription || post.excerpt || globalDescription,
                images: [post.featuredImage].filter(Boolean),
            },
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
        };
    } catch {
        return {};
    }
}

export default async function BlogPostPage({ params }) {
    let data;
    try {
        data = await getPost(params.slug);
    } catch {
        notFound();
    }

    const { post, relatedPosts } = data;

    const year = new Date().getFullYear();
    const normalizeTitle = (t) => {
        let abs = (t || '').trim();
        abs = abs.replace(/\bvs\b/gi, 'vs');
        if (/which is best/i.test(abs) && !abs.includes(String(year))) {
            abs = abs.replace(/\??\s*$/i, ` in ${year}?`);
        }
        return abs;
    };
    const displayTitle = normalizeTitle(post.title);

    return (
        <>
            <ArticleJsonLd post={{
                slug: params.slug,
                title: post.title,
                excerpt: post.excerpt,
                featuredImage: post.featuredImage,
                publishedAt: post.publishedAt,
                updatedAt: post.updatedAt,
                author: post.author,
                category: post.category?.name || post.category,
                wordCount: post.wordCount,
            }} />

            <article className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950">
                {/* Hero Section */}
                {post.featuredImage && (
                    <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
                        <Image
                            src={safeImageUrl(post.featuredImage)}
                            alt={displayTitle}
                            fill
                            priority
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1200, 630))}`}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                                {post.category && (
                                    <span className="inline-block px-5 py-2 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-full mb-5 text-green-400 font-semibold text-sm">
                                        {post.category?.name || post.category}
                                    </span>
                                )}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-white drop-shadow-lg">
                                    {displayTitle}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <span className="text-gray-200 font-medium">{post.author}</span>
                                    <span className="text-green-400">•</span>
                                    <span className="text-gray-300">
                                        {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                                    </span>
                                    <span className="text-green-400">•</span>
                                    <span className="text-gray-300">{post.views ?? 0} views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Content Container */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <Breadcrumbs items={[
                            { name: 'Home', href: '/' },
                            { name: 'Blog', href: '/blogs' },
                            { name: displayTitle }
                        ]} />
                    </div>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <div className="mb-10 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
                            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>
                    )}

                    {/* Main Content - Using Tailwind Typography Plugin Classes */}
                    <div
                        className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                        prose-h1:text-4xl prose-h1:mt-10 prose-h1:mb-5
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                        prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-5 prose-p:text-[17px]
                        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 hover:prose-a:underline
                        prose-strong:text-white prose-strong:font-bold
                        prose-ul:my-6 prose-ul:list-disc prose-ul:pl-8
                        prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-8
                        prose-li:text-gray-300 prose-li:my-3 prose-li:leading-relaxed
                        prose-code:text-green-400 prose-code:bg-green-500/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:border prose-code:border-green-500/30 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-gradient-to-br prose-pre:from-gray-900 prose-pre:to-gray-950 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:shadow-xl
                        prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-green-500/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-300 prose-blockquote:italic
                        prose-img:rounded-xl prose-img:my-8 prose-img:shadow-2xl prose-img:border prose-img:border-gray-800
                        prose-hr:border-gray-800 prose-hr:my-10
                        prose-table:w-full prose-table:my-10 prose-table:border-separate prose-table:border-spacing-0 prose-table:overflow-hidden prose-table:rounded-xl prose-table:border prose-table:border-green-500/30 prose-table:bg-gradient-to-br prose-table:from-green-500/5 prose-table:to-blue-500/5 prose-table:shadow-lg
                        prose-thead:bg-gradient-to-r prose-thead:from-green-500/20 prose-thead:to-green-600/20 prose-thead:border-b-2 prose-thead:border-green-500/50
                        prose-th:px-5 prose-th:py-4 prose-th:text-left prose-th:font-bold prose-th:text-green-400 prose-th:text-sm prose-th:uppercase prose-th:tracking-wider prose-th:border-r prose-th:border-green-500/20 prose-th:first:rounded-tl-xl prose-th:last:rounded-tr-xl prose-th:last:border-r-0
                        prose-td:px-5 prose-td:py-4 prose-td:text-gray-300 prose-td:border-b  prose-td:border-r prose-td:border-gray-700/30 prose-td:last:border-r-0
                        prose-tr:transition-colors hover:prose-tr:bg-green-500/5
                        prose-tbody:prose-tr:last:prose-td:border-b-0"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags Section */}
                    {post.tags.length > 0 && (
                        <div className="mt-16 pt-10 border-t border-gray-800/50">
                            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                <span className="text-green-400">#</span> Tags
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-full text-sm text-gray-200 hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
                                    >
                                        #{tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-20">
                            <h2 className="text-3xl font-bold mb-10 text-white">Related Articles</h2>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedPosts.map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/blogs/${related.slug}`}
                                        className="block group h-full"
                                    >
                                        <article className="h-full border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-xl overflow-hidden hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                                            {related.featuredImage && (
                                                <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                                                    <Image
                                                        src={safeImageUrl(related.featuredImage)}
                                                        alt={related.title}
                                                        fill
                                                        loading="lazy"
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                                </div>
                                            )}
                                            <div className="p-6">
                                                <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                                                    {related.category?.name && (
                                                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 font-semibold">
                                                            {related.category.name}
                                                        </span>
                                                    )}
                                                    {related.publishedAt && (
                                                        <span className="text-gray-400">
                                                            {format(new Date(related.publishedAt), 'MMM dd, yyyy')}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-3 line-clamp-2">
                                                    {related.title}
                                                </h3>

                                                {related.excerpt && (
                                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                                        {related.excerpt}
                                                    </p>
                                                )}

                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-green-400 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                                                        Read more →
                                                    </span>
                                                    <span className="text-gray-500">
                                                        {typeof related.views === 'number' ? `${related.views} views` : '0 views'}
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </>
    );
}