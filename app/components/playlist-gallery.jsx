"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { fifth, first, fourth, second, third } from "@/assets";

const playlists = [
  {
    id: "PLWcsPTXAL-JJuRMIA6AiV2JIku7jNzar3",
    url: "https://youtube.com/playlist?list=PLWcsPTXAL-JJuRMIA6AiV2JIku7jNzar3&si=LhbG3Dcg8BY-VtgG",
    title: "Nifty 50 SERIES LAUNCH | 50 Stocks in 50 Days",
    description: "Master the Nifty 50 index with our comprehensive series.",
    imgurl: first,
    channelName: "Nifty Nitesh",
    views: "125K views",
    uploadTime: "2 weeks ago",
    duration: "15:42",
    videoCount: "50 videos",
  },
  {
    id: "PLWcsPTXAL-JLjPtxCHGmOIyW87OhWO3Sp",
    url: "https://youtube.com/playlist?list=PLWcsPTXAL-JLjPtxCHGmOIyW87OhWO3Sp&si=4kentmxRQ_Qd4gSc",
    title: "Market ko smjho profit khud ho jayega",
    description: "Samajh ke trade karo, profit khud ho jayega.",
    imgurl: second,
    channelName: "Nifty Nitesh",
    views: "89K views",
    uploadTime: "1 month ago",
    duration: "12:35",
    videoCount: "25 videos",
  },
  {
    id: "PLWcsPTXAL-JJzfyQfrnjgnQQh4X7uuLQd",
    url: "https://youtube.com/playlist?list=PLWcsPTXAL-JJzfyQfrnjgnQQh4X7uuLQd&si=Tncv5swYUhLnRKaX",
    title: "LIVE Trading Sessions",
    description: "Join our live sessions for real-time trading insights.",
    imgurl: third,
    channelName: "Nifty Nitesh",
    views: "45K views",
    uploadTime: "3 days ago",
    duration: "2:15:30",
    videoCount: "15 videos",
  },
  {
    id: "PLWcsPTXAL-JKtavHzu6Jb8mDyzXtGwZOq",
    url: "https://youtube.com/playlist?list=PLWcsPTXAL-JKtavHzu6Jb8mDyzXtGwZOq&si=3dp5Gy8ynrS_WE-y",
    title: "SECTOR Analysis Videos",
    description: "In-depth analysis of different market sectors.",
    imgurl: fourth,
    channelName: "Nifty Nitesh",
    views: "67K views",
    uploadTime: "1 week ago",
    duration: "18:22",
    videoCount: "32 videos",
  },
  {
    id: "PLWcsPTXAL-JJxwbSmPWUN3uWM3qQnfiuU",
    url: "https://youtube.com/playlist?list=PLWcsPTXAL-JJxwbSmPWUN3uWM3qQnfiuU&si=7OB4X6BTBxGfirSS",
    title: "NIFTY50 & BANKNIFTY Complete Guide",
    description: "Comprehensive analysis of NIFTY50 and BANKNIFTY indices.",
    imgurl: fifth,
    channelName: "Nifty Nitesh",
    views: "156K views",
    uploadTime: "5 days ago",
    duration: "22:18",
    videoCount: "42 videos",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function PlaylistGallery() {
  const handlePlaylistClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="w-full py-20 bg-gradient-to-b from-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

        <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-emerald-500">Trading</span>{" "}
              <span className="text-white">Education</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
              Explore our comprehensive video tutorials covering technical
              analysis, price action trading, and advanced trading strategies.
              Learn from expert analysis and real market examples.
            </p>
          </motion.div>
        </div>
      </div>

      {/* YouTube-style Video Grid */}
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {playlists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => handlePlaylistClick(playlist.url)}
              >
                <div className="space-y-3">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
                    <Image
                      width={1000}
                      height={1000}
                      src={playlist.imgurl}
                      alt={playlist.title}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />

                    {/* Duration Badge - Bottom Right */}
                    <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                      {playlist.duration}
                    </div>

                    {/* Playlist Badge - Bottom Left */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                      <Play className="h-3 w-3" fill="currentColor" />
                      {playlist.videoCount}
                    </div>

                    {/* Hover Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm">
                        <Play
                          className="ml-0.5 h-5 w-5 text-white"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="flex gap-3">
                    {/* Channel Avatar */}
                    <div className="flex-shrink-0">
                      <Image
                        src="/logo.webp"
                        width={100}
                        height={100}
                        alt="logo"
                        className="h-9  w-9 rounded-full"
                      />
                    </div>

                    {/* Video Details */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="font-medium text-white text-sm leading-5 line-clamp-2 group-hover:text-gray-200 transition-colors">
                        {playlist.title}
                      </h3>

                      {/* Channel Name */}
                      <p className="text-gray-400 text-sm mt-1 hover:text-gray-300 transition-colors">
                        {playlist.channelName}
                      </p>

                      {/* Views and Upload Time */}
                      <div className="flex items-center gap-1 text-gray-400 text-sm mt-0.5">
                        <span>{playlist.views}</span>
                        <span>•</span>
                        <span>{playlist.uploadTime}</span>
                      </div>
                    </div>

                    {/* Options Menu (Three Dots) */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1 hover:bg-gray-800 rounded-full transition-colors">
                        <div className="flex flex-col gap-0.5">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
