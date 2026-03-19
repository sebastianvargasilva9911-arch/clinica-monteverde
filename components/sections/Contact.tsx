"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Contacto
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
              Estamos disponibles para orientarte y agendar tu atención
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Si tienes dudas sobre tratamientos, disponibilidad o reservas,
              puedes escribirnos directamente. Nuestro equipo estará disponible
              para ayudarte.
            </p>

            <div className="mt-8 space-y-5">
              <motion.a
                href="mailto:contacto@clinicamonteverde.cl"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="block rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-medium text-emerald-700">Correo</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  contacto@clinicamonteverde.cl
                </p>
              </motion.a>

              <motion.a
                href="https://wa.me/56997054365"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="block rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-medium text-emerald-700">WhatsApp</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  +56 9 9705 4365
                </p>
              </motion.a>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-medium text-emerald-700">Dirección</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  Baquedano 281, 5480000 Puerto Montt, Los Lagos
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-sm font-medium text-emerald-700">Horario</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  Lunes a Viernes
                </p>
                <p className="mt-1 text-slate-600">09:00 a 19:00 hrs</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <a
              href="https://www.google.com/maps?q=Baquedano+281,+Puerto+Montt,+Los+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[2rem] border border-emerald-100 shadow-sm"
              aria-label="Abrir ubicación en Google Maps"
            >
              <div className="relative">
                <iframe
                  title="Mapa Clínica Monteverde"
                  src="https://www.google.com/maps?q=Baquedano+281,+Puerto+Montt,+Los+Lagos&output=embed"
                  className="h-full min-h-[500px] w-full grayscale-[0.1] contrast-[1.05] transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/5" />
              </div>
            </a>

            <div className="mt-4">
              <a
                href="https://www.google.com/maps?q=Baquedano+281,+Puerto+Montt,+Los+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-emerald-800"
              >
                📍 Ver ubicación en Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}