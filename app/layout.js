import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Nifty Nitesh",
  description:
    "Providing online and offline classes on share market, finance, and investing",
  keywords: [
    "Share Market",
    "Finance",
    "Investing",
    "Online Classes",
    "Offline Classes",
    "Nifty Nitesh",
    "stock market",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="logo.svg" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
