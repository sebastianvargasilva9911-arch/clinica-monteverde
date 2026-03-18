"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-600"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_22%)]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-white"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur"
          >
            Atención odontológica integral en Puerto Montt
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight md:text-6xl"
          >
            Sonrisas cuidadas con un enfoque humano, moderno y profesional
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-emerald-50/90 md:text-lg"
          >
            En Clínica Monteverde ofrecemos atención dental con altos estándares,
            un entorno cómodo y tratamientos orientados al bienestar, la estética
            y la salud bucal de nuestros pacientes.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#reserva"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-full bg-white px-6 py-3 font-semibold text-emerald-800 shadow-lg shadow-black/10"
            >
              Reservar hora
            </motion.a>

            <motion.a
              href="https://wa.me/56997054365"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Hablar por WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              {
                title: "Atención integral",
                text: "Especialidades dentales",
              },
              {
                title: "Ambiente cómodo",
                text: "Espacio profesional",
              },
              {
                title: "Ubicación central",
                text: "Puerto Montt",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + index * 0.12, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-2xl border border-white/15 p-4 backdrop-blur-md"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm text-emerald-50/80">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
            className="glass-card overflow-hidden rounded-[2rem] border border-white/20 p-3 shadow-2xl"
          >
            <motion.img
              src="/images/clinic/hero-clinica.jpg"
              alt="Clínica dental moderna"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="h-[500px] w-full rounded-[1.5rem] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}