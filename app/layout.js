import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextBlog - By Nilesh Mori",
  description: "Find the new gossips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <div className="h-[100vh]">{children}</div>
      <Footer />
        </body>
    </html>
  );
}
