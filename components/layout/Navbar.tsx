"use client";

import { useState } from "react";

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

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-base font-bold text-white shadow-md">
            CM
          </div>

          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Clínica Dental
            </p>
            <h1 className="text-lg font-semibold text-slate-800">
              Clínica Monteverde
            </h1>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="https://wa.me/56997054365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-scale rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm transition hover:bg-emerald-50 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
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
            </svg>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-emerald-100 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/56997054365"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}