import Link from 'next/link';
import { getHighlightsBlogs } from '@/lib/blog-api';
import BlogCard from './BlogCard';

export default async function HighlightsBlogs({ limit = 5, sort = 'mix', title = 'Latest Articles' }) {
    let highlights = [];
    try {
        const data = await getHighlightsBlogs({ limit, sort });
        highlights = Array.isArray(data) ? data : [];
    } catch {
        // Swallow error and render nothing if no data
    }

    const visible = highlights.slice(0, limit);
    const hasMore = highlights.length > limit;

    if (!visible.length) return null;

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
                    {hasMore && (
                        <span className="text-sm text-green-400">Latest</span>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visible.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-6 flex justify-end">
                        <Link href="/blogs" className="inline-block px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-black text-sm font-medium">
                            View all →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
