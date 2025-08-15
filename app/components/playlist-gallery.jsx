"use client"

import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { fifth, first, fourth, second, third } from "@/assets"

const playlists = [
    {
        id: "PLWcsPTXAL-JJuRMIA6AiV2JIku7jNzar3",
        url: "https://youtube.com/playlist?list=PLWcsPTXAL-JJuRMIA6AiV2JIku7jNzar3&si=LhbG3Dcg8BY-VtgG",
        title: "Nifty 50 SERIES LAUNCH | 50 Stocks in 50 Days",
        description: "Master the Nifty 50 index with our comprehensive series.",
        imgurl: first
    },
    {
        id: "PLWcsPTXAL-JLjPtxCHGmOIyW87OhWO3Sp",
        url: "https://youtube.com/playlist?list=PLWcsPTXAL-JLjPtxCHGmOIyW87OhWO3Sp&si=4kentmxRQ_Qd4gSc",
        title: "Market ko smjho profit khud ho jayega",
        description: "Samajh ke trade karo, profit khud ho jayega.",
        imgurl: second
    },
    {
        id: "PLWcsPTXAL-JJzfyQfrnjgnQQh4X7uuLQd",
        url: "https://youtube.com/playlist?list=PLWcsPTXAL-JJzfyQfrnjgnQQh4X7uuLQd&si=Tncv5swYUhLnRKaX",
        title: "LIVE",
        description: "Join our live sessions for real-time trading insights.",
        imgurl: third
    },
    {
        id: "PLWcsPTXAL-JKtavHzu6Jb8mDyzXtGwZOq",
        url: "https://youtube.com/playlist?list=PLWcsPTXAL-JKtavHzu6Jb8mDyzXtGwZOq&si=3dp5Gy8ynrS_WE-y",
        title: "SECTOR Videos",
        description: "In-depth analysis of different market sectors.",
        imgurl: fourth
    },
    {
        id: "PLWcsPTXAL-JJxwbSmPWUN3uWM3qQnfiuU",
        url: "https://youtube.com/playlist?list=PLWcsPTXAL-JJxwbSmPWUN3uWM3qQnfiuU&si=7OB4X6BTBxGfirSS",
        title: "NIFTY50 & BANKNIFTY",
        description: "Comprehensive analysis of NIFTY50 and BANKNIFTY indices.",
        imgurl: fifth
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export default function PlaylistGallery() {
    const handlePlaylistClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <div className="w-full py-20 bg-gradient-to-b from-black to-black relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>


                <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            <span className="text-emerald-500">Trading</span> <span className="text-white">Education</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                            Explore our comprehensive video tutorials covering technical analysis, price action trading, and advanced
                            trading strategies. Learn from expert analysis and real market examples.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Playlist Grid */}
            <div className="px-4 py-10 sm:px-6 lg:px-8">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mx-auto max-w-7xl">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {playlists.map((playlist, index) => (
                            <motion.div
                                key={playlist.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group cursor-pointer"
                                onClick={() => handlePlaylistClick(playlist.url)}
                            >
                                <Card className="h-full flex flex-col overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-gray-800/50">
                                    {/* Thumbnail */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={playlist.imgurl}
                                            alt={playlist.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                        {/* Play Button Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/90 backdrop-blur-sm">
                                                <Play className="ml-1 h-6 w-6 text-white" fill="currentColor" />
                                            </div>
                                        </div>

                                        {/* External Link Icon */}
                                        <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                                                <ExternalLink className="h-4 w-4 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col p-4">
                                        <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2 capitalize">
                                            {playlist.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-400 line-clamp-2 flex-1 capitalize">{playlist.description}</p>

                                        {/* Playlist Badge */}
                                        <div className="mt-3 flex items-center gap-2">
                                            <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20">
                                                <Play className="h-3 w-3 text-emerald-400" fill="currentColor" />
                                            </div>
                                            <span className="text-xs text-emerald-400 font-medium">Playlist #{index + 1}</span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>


        </div>
    )
}
