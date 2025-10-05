import BlogsClient from './BlogsClient';

export const metadata = {
    title: "Stock Market Blogs & Trading Tips - Nifty Nitesh",
    description: "Read latest stock market blogs, trading tips, technical analysis guides and share market insights by Nifty Nitesh. Learn about demand supply trading, smart money concepts and more.",
    keywords: [
        "stock market blogs",
        "trading tips",
        "technical analysis",
        "share market insights",
        "nifty trading tips",
        "demand supply trading",
        "smart money concepts",
        "trading psychology",
        "market analysis",
        "investment tips"
    ],
    openGraph: {
        title: "Stock Market Blogs & Trading Tips - Nifty Nitesh",
        description: "Read latest stock market blogs, trading tips, technical analysis guides and share market insights by Nifty Nitesh.",
        url: "https://niftynitesh.com/blogs",
        siteName: "Nifty Nitesh - Stock Market Blogs",
        images: [
            {
                url: "https://www.niftynitesh.com/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Nifty Nitesh Stock Market Blogs",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@niftynitesh",
        creator: "@niftynitesh",
        title: "Stock Market Blogs & Trading Tips - Nifty Nitesh",
        description: "Read latest stock market blogs, trading tips, technical analysis guides and share market insights.",
        images: ["https://www.niftynitesh.com/opengraph-image.png"],
    },
    alternates: {
        canonical: "https://niftynitesh.com/blogs",
    },
};

export default function BlogsPage() {
    return <BlogsClient />;
}