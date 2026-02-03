"use client";
import "./global.css";
import { Poppins } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${poppins.className} antialiased bg-[#020617]`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
