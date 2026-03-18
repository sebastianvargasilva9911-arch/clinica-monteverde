"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#convenios", label: "Convenios" },
  { href: "#reserva", label: "Reserva" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      let currentSection = "";

      for (const link of navLinks) {
        const section = document.querySelector(link.href) as HTMLElement | null;
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          currentSection = link.href.replace("#", "");
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/40 bg-white/75 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
          : "border-b border-emerald-100/70 bg-white/55 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="overflow-hidden rounded-2xl shadow-lg shadow-emerald-900/10"
          >
            <Image
              src="/images/logo-monteverde.png"
              alt="Logo Clínica Monteverde"
              width={52}
              height={52}
              className="h-[52px] w-[52px] object-cover"
              priority
            />
          </motion.div>

          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Clínica Dental
            </p>
            <h1 className="text-lg font-semibold text-slate-800">
              Clínica Monteverde
            </h1>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");

            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative text-sm font-medium transition ${
                  isActive
                    ? "text-emerald-700"
                    : "text-slate-700 hover:text-emerald-700"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-700 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}
        </nav>

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.94 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-50 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-emerald-100 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              className="mx-auto flex max-w-7xl flex-col px-6 py-4"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}