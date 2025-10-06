import Link from 'next/link';
import { getPosts, getCategories } from '@/lib/blog-api';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import BlogCard from '@/app/components/BlogCard';
export default async function BlogPage({ searchParams }) {
    const page = parseInt(searchParams?.page || '1');
    const category = searchParams?.category;

    const [postsRes, catsRes] = await Promise.allSettled([
        getPosts({ page, limit: 12, category }),
        getCategories(),
    ]);

    const postsData = postsRes.status === 'fulfilled'
        ? postsRes.value
        : { posts: [], pagination: { totalPages: 1 } };

    const categoriesData = catsRes.status === 'fulfilled'
        ? catsRes.value
        : { categories: [], error: true };

    const hadError = postsRes.status === 'rejected' || catsRes.status === 'rejected';

    return (
        <div className="min-h-screen bg-black text-white">
            <section className="relative overflow-hidden bg-gradient-to-t from-black to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blogs' }]} />
                    <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        Insights, how‑to guides, and ideas
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                        Short, practical articles on trading, analysis, and finance.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {hadError && (
                    <div className="mb-6 border border-yellow-500 bg-yellow-100 text-yellow-900 px-4 py-3">
                        Some content couldn’t be loaded. Showing what’s available.
                    </div>
                )}

                <div className="mb-8 overflow-x-auto">
                    <div className="inline-flex items-stretch gap-1 border-b border-green-700">
                        <Link
                            href="/blog"
                            className={`px-4 py-2 text-sm font-medium ${!category
                                ? 'text-green-400 border-b-2 border-green-500'
                                : 'text-green-300 hover:text-green-200'
                                }`}
                        >
                            All
                        </Link>
                        {categoriesData.categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/blog?category=${cat.slug}`}
                                className={`px-4 py-2 text-sm font-medium ${category === cat.slug
                                    ? 'text-green-400 border-b-2 border-green-500'
                                    : 'text-green-300 hover:text-green-200'
                                    }`}
                            >
                                {cat.name} {typeof cat._count?.posts === 'number' ? `(${cat._count.posts})` : ''}
                            </Link>
                        ))}
                    </div>
                </div>

                {postsData.posts.length === 0 ? (
                    <p className="py-10 text-green-200">No posts available right now.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {postsData.posts.map((post) => (
                            <BlogCard key={post.id} blog={post} />

                        ))}
                    </div>
                )}

                {(() => {
                    const totalPages = postsData.pagination?.totalPages || 1;
                    if (totalPages <= 1) return null;

                    const makeHref = (p) => `/blog?page=${p}${category ? `&category=${category}` : ''}`;

                    const pages = [];
                    const add = (n) => pages.push(n);

                    const window = 1;
                    const start = Math.max(1, page - window);
                    const end = Math.min(totalPages, page + window);
                    add(1);
                    if (start > 2) pages.push('ellipsis');
                    for (let p = start; p <= end; p++) if (p !== 1 && p !== totalPages) add(p);
                    if (end < totalPages - 1) pages.push('ellipsis');
                    if (totalPages > 1) add(totalPages);

                    return (
                        <nav className="mt-10 flex items-center justify-center gap-1" aria-label="Pagination">
                            <Link
                                href={makeHref(Math.max(1, page - 1))}
                                aria-disabled={page === 1}
                                className={`px-3 py-2 text-sm border rounded ${page === 1
                                    ? 'pointer-events-none text-gray-500 border-gray-600'
                                    : 'text-green-400 hover:border-green-500'
                                    }`}
                            >
                                Prev
                            </Link>
                            {pages.map((p, i) =>
                                p === 'ellipsis' ? (
                                    <span key={`e-${i}`} className="px-2 text-green-500">…</span>
                                ) : (
                                    <Link
                                        key={p}
                                        href={makeHref(p)}
                                        aria-current={page === p ? 'page' : undefined}
                                        className={`px-3 py-2 text-sm border rounded ${page === p
                                            ? 'bg-green-600 text-white border-green-600'
                                            : 'bg-black text-green-400 hover:border-green-500'
                                            }`}
                                    >
                                        {p}
                                    </Link>
                                )
                            )}
                            <Link
                                href={makeHref(Math.min(totalPages, page + 1))}
                                aria-disabled={page === totalPages}
                                className={`px-3 py-2 text-sm border rounded ${page === totalPages
                                    ? 'pointer-events-none text-gray-500 border-gray-600'
                                    : 'text-green-400 hover:border-green-500'
                                    }`}
                            >
                                Next
                            </Link>
                        </nav>
                    );
                })()}
            </div>
        </div>
    );
}