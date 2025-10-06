import { safeImageUrl, shimmer, toBase64 } from '@/lib/utils'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ blog }) => {
    return (
        <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
            <article className="h-full border border-gray-700 bg-zinc-900 p-4 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                {blog.featuredImage && (
                    <div className="relative w-full h-44 mb-4 overflow-hidden rounded-md bg-gray-800">
                        <Image
                            src={safeImageUrl(blog.featuredImage)}
                            alt={blog.title || 'blog image'}
                            fill
                            sizes="(max-width: 768px) 100vw, 420px"
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 400))}`}
                        />
                    </div>
                )}

                <h3 className="text-lg font-semibold text-white group-hover:text-green-400 leading-tight">{blog.title}</h3>

                {blog.excerpt && (
                    <p className="mt-2 text-gray-300 line-clamp-3">{blog.excerpt}</p>
                )}

                <div className="mt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3 text-green-400">
                        {blog.publishedAt && (
                            <span className="text-green-300">{format(new Date(blog.publishedAt), 'yyyy-MM-dd')}</span>
                        )}
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{typeof blog.views === 'number' ? `${blog.views} views` : '0 views'}</span>
                    </div>
                    <div className="text-green-400 font-medium">Read →</div>
                </div>
            </article>
        </Link>
    )
}

export default BlogCard
