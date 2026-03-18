"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://wa.me/56997054365"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hablar por WhatsApp"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{
            opacity: { duration: 0.25 },
            y: { duration: 0.25 },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] md:bottom-6 md:right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path d="M19.11 17.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            <path d="M16.03 3.2c-7.05 0-12.78 5.73-12.78 12.78 0 2.25.59 4.44 1.71 6.37L3 29l6.83-1.79a12.72 12.72 0 0 0 6.2 1.58h.01c7.05 0 12.78-5.73 12.78-12.78S23.08 3.2 16.03 3.2Zm0 23.43h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.05 1.06 1.08-3.95-.25-.41a10.58 10.58 0 0 1-1.62-5.62c0-5.88 4.77-10.65 10.65-10.65 2.85 0 5.53 1.11 7.54 3.12a10.58 10.58 0 0 1 3.11 7.53c0 5.88-4.78 10.65-10.66 10.65Z" />
          </svg>

          <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 blur-xl group-hover:opacity-50" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}