"use client";

import { motion, type Variants } from "framer-motion";

const treatments = [
  {
    title: "Consulta General",
    description:
      "Evaluación integral de la salud bucal para detectar necesidades preventivas y definir el tratamiento adecuado para cada paciente.",
  },
  {
    title: "Ortodoncia",
    description:
      "Corrección de la posición dental y mordida mediante tratamientos modernos orientados a mejorar función, estética y comodidad.",
  },
  {
    title: "Periodoncia",
    description:
      "Prevención, diagnóstico y tratamiento de enfermedades de las encías y tejidos que sostienen los dientes.",
  },
  {
    title: "Implantología",
    description:
      "Reposición de piezas dentales con implantes diseñados para devolver funcionalidad, seguridad y una sonrisa natural.",
  },
  {
    title: "Rehabilitación",
    description:
      "Tratamientos orientados a recuperar la función masticatoria, estética y armonía oral mediante soluciones personalizadas.",
  },
  {
    title: "Maxilofacial",
    description:
      "Atención especializada en procedimientos quirúrgicos de mayor complejidad relacionados con la cavidad oral y estructuras faciales.",
  },
  {
    title: "Estética Orofacial",
    description:
      "Procedimientos enfocados en la armonización facial y el realce estético, cuidando siempre un resultado natural y equilibrado.",
  },
  {
    title: "Trastornos Temporomandibulares",
    description:
      "Evaluación y tratamiento de molestias asociadas a la articulación temporomandibular, dolor mandibular y disfunciones relacionadas.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export default function Treatments() {
  return (
    <section
      id="tratamientos"
      className="relative overflow-hidden bg-gradient-to-b from-white to-emerald-50/40 py-20"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_24%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Tratamientos
          </span>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Atención especializada para cada necesidad dental
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Contamos con distintas áreas de atención para ofrecer soluciones
            integrales, funcionales y estéticas, con un enfoque profesional,
            cercano y personalizado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {treatments.map((treatment, index) => (
            <motion.article
              key={treatment.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative rounded-[1.75rem] border border-emerald-100/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-[1.75rem] bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  {index % 4 === 0 && (
                    <>
                      <path d="M12 3v18" />
                      <path d="M3 12h18" />
                    </>
                  )}

                  {index % 4 === 1 && (
                    <>
                      <path d="M4 12c2.5-4 5-6 8-6s5.5 2 8 6c-2.5 4-5 6-8 6s-5.5-2-8-6Z" />
                      <path d="M12 10v4" />
                    </>
                  )}

                  {index % 4 === 2 && (
                    <>
                      <path d="M6 4h12" />
                      <path d="M8 4v7a4 4 0 1 0 8 0V4" />
                      <path d="M12 15v5" />
                    </>
                  )}

                  {index % 4 === 3 && (
                    <>
                      <path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M9 12h6" />
                    </>
                  )}
                </svg>
              </div>

              <h4 className="text-xl font-semibold text-slate-800">
                {treatment.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {treatment.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mt-14 flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-emerald-100 bg-white/80 p-6 shadow-sm backdrop-blur md:flex-row md:items-center"
        >
          <div>
            <p className="text-lg font-semibold text-slate-800">
              ¿Necesitas orientación para elegir el tratamiento adecuado?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Nuestro equipo puede ayudarte a evaluar tu caso y orientarte según
              tus necesidades.
            </p>
          </div>

          <motion.a
            href="#reserva"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-800"
          >
            Reservar evaluación
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}