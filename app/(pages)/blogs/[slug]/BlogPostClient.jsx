"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp, Eye, Tag, ChevronRight, BookOpen, TrendingUp } from 'lucide-react';

// Mock related posts
const getRelatedPosts = (currentPost) => {
    const allPosts = [
        {
            id: 3,
            slug: "smart-money-concepts-explained",
            title: "Smart Money Concepts: How Institutions Trade",
            excerpt: "Discover how institutional traders think and operate.",
            image: "/course/img3.png",
            category: "Advanced Trading",
            readTime: "10 min read",
        },
        {
            id: 4,
            slug: "risk-management-trading-psychology",
            title: "Risk Management and Trading Psychology",
            excerpt: "Learn essential risk management techniques.",
            image: "/chart/NIFTY50 & BANK NIFTY.png",
            category: "Risk Management",
            readTime: "7 min read",
        },
        {
            id: 5,
            slug: "nifty-bank-nifty-analysis",
            title: "Weekly Nifty and Bank Nifty Technical Analysis",
            excerpt: "Get detailed technical analysis of Nifty 50 and Bank Nifty.",
            image: "/chart/HDFCBANK.png",
            category: "Market Analysis",
            readTime: "5 min read",
        },
    ];

    return allPosts.filter(post =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category ||
            post.tags?.some(tag => currentPost.tags?.includes(tag)))
    ).slice(0, 3);
};

export default function BlogPostClient({ post }) {
    const [mounted, setMounted] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [likes, setLikes] = useState(post.likes || 0);
    const [hasLiked, setHasLiked] = useState(false);
    const relatedPosts = getRelatedPosts(post);

    useEffect(() => {
        setMounted(true);
        // Increment view count (in real app, this would be an API call)
        console.log(`Viewing post: ${post.title}`);
    }, [post.id, post.title]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        // In real app, save to user's bookmarks
    };

    const handleLike = () => {
        if (!hasLiked) {
            setLikes(prev => prev + 1);
            setHasLiked(true);
        }
        // In real app, save like to database
    };

    // Prevent hydration errors by showing loading state during SSR
    if (!mounted) {
        return (
            <div className="min-h-screen bg-bg-primary">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-text-primary">Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bg-primary">
            {/* Back Navigation */}
            <div className="bg-bg-secondary border-b border-border-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-accent-green hover:text-accent-green/80 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Blogs
                    </Link>
                </div>
            </div>      {/* Article Header */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-8">
                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className="inline-block bg-accent-green/20 text-accent-green border border-accent-green/30 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted mb-8">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span className="font-medium text-text-primary">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>{post.views || 0} views</span>
                        </div>
                    </div>                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mb-8">
                        <button
                            onClick={handleLike}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${hasLiked
                                ? 'bg-red-100 text-red-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <ThumbsUp className={`h-4 w-4 ${hasLiked ? 'fill-current' : ''}`} />
                            <span>{likes}</span>
                        </button>
                        <button
                            onClick={handleBookmark}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isBookmarked
                                ? 'bg-yellow-100 text-yellow-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
                            Bookmark
                        </button>
                        <button
                            onClick={handleShare}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            <Share2 className="h-4 w-4" />
                            Share
                        </button>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="bg-bg-card border border-border-primary rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="text-text-primary">
                            {/* Simple content rendering without markdown */}
                            {post.content.split('\n').map((paragraph, index) => {
                                if (paragraph.startsWith('# ')) {
                                    return (
                                        <h1 key={index} className="text-3xl font-bold text-text-primary mb-6 mt-8 first:mt-0">
                                            {paragraph.replace('# ', '')}
                                        </h1>
                                    );
                                }
                                if (paragraph.startsWith('## ')) {
                                    return (
                                        <h2 key={index} className="text-2xl font-bold text-text-primary mb-4 mt-8">
                                            {paragraph.replace('## ', '')}
                                        </h2>
                                    );
                                }
                                if (paragraph.startsWith('### ')) {
                                    return (
                                        <h3 key={index} className="text-xl font-bold text-text-primary mb-3 mt-6">
                                            {paragraph.replace('### ', '')}
                                        </h3>
                                    );
                                }
                                if (paragraph.trim() === '') {
                                    return <br key={index} />;
                                }
                                return (
                                    <p key={index} className="text-text-secondary mb-4 leading-relaxed">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-border-primary">
                        <div className="flex items-center gap-2 mb-4">
                            <Tag className="h-4 w-4 text-accent-green" />
                            <span className="font-medium text-text-primary">Tags:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-full text-sm hover:bg-accent-green/20 transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gradient-to-r from-accent-green/10 to-accent-green/5 border border-border-primary rounded-2xl backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center text-bg-primary font-bold text-xl">
                            {post.author.charAt(0)}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-text-primary mb-2">{post.author}</h3>
                            <p className="text-text-secondary mb-4">
                                Professional stock market trader and educator with over 10 years of experience.
                                Specializes in technical analysis, demand supply trading, and smart money concepts.
                                Helping thousands of students become profitable traders.
                            </p>
                            <Link
                                href="/about"
                                className="text-accent-green hover:text-accent-green/80 font-medium inline-flex items-center gap-1"
                            >
                                Learn more about {post.author} <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="bg-bg-secondary py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-text-primary mb-4">Related Articles</h2>
                            <p className="text-text-secondary">Continue your learning journey with these related posts</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link key={relatedPost.id} href={`/blogs/${relatedPost.slug}`} className="group">
                                    <article className="bg-bg-card border border-border-primary rounded-xl overflow-hidden hover:border-accent-green transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="text-sm text-accent-green font-medium mb-2">
                                                {relatedPost.category}
                                            </div>
                                            <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-green transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-accent-green font-medium text-sm flex items-center gap-1">
                                                    Read More <ChevronRight className="h-4 w-4" />
                                                </span>
                                                <span className="text-xs text-text-muted">{relatedPost.readTime}</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-r from-accent-green/20 to-accent-green/10 border-t border-border-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <BookOpen className="h-12 w-12 text-accent-green mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-text-primary mb-4">Want to Learn More?</h2>
                    <p className="text-text-secondary mb-8">
                        Join our comprehensive trading course and learn from professional traders
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/enrollment"
                            className="px-8 py-3 bg-accent-green text-bg-primary font-semibold rounded-lg hover:bg-accent-green/90 transition-colors inline-flex items-center gap-2"
                        >
                            <TrendingUp className="h-5 w-5" />
                            Enroll Now
                        </Link>
                        <Link
                            href="/blogs"
                            className="px-8 py-3 border-2 border-accent-green text-accent-green font-semibold rounded-lg hover:bg-accent-green hover:text-bg-primary transition-colors"
                        >
                            Read More Blogs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}