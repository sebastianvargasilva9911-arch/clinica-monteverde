"use client";

import { useRef } from "react";

const dentists = [
  {
    name: "Romina Mora",
    specialty: "Directora Clínica",
    image: "/images/team/romina_mora.jpg",
  },
  {
    name: "Francisco Henríquez",
    specialty: "Ortodoncia",
    image: "/images/team/henriquez_ortodoncista.jpg",
  },
  {
    name: "Paola Ibañez",
    specialty: "Odontopediatría",
    image: "/images/team/paola_ibanez.jpg",
  },
  {
    name: "Sebastián Quezada",
    specialty: "Implantología",
    image: "/images/team/sebastian_quezada.jpg",
  },
  {
    name: "Javiera Nahum",
    specialty: "Periodoncia",
    image: "/images/team/javiera_nahun.jpg",
  },
  {
    name: "Ángela Casanova",
    specialty: "Rehabilitación Oral",
    image: "/images/team/angela_casanova.jpg",
  },
  {
    name: "Felipe Leal",
    specialty: "Cirugía Maxilofacial",
    image: "/images/team/felipe_leal.jpg",
  },
  {
    name: "Marcos Castillo",
    specialty: "Consulta General",
    image: "/images/team/marcos_castillo.jpg",
  },
  {
    name: "Humberto Velásquez",
    specialty: "Trastornos Temporomandibulares",
    image: "/images/team/humberto_velasquez.jpg",
  },
];

export default function Team() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const amount = container.clientWidth * 0.9;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="equipo" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Equipo clínico
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
              Profesionales preparados para cuidar tu salud bucal
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Nuestro equipo está conformado por distintas especialidades para
              entregar una atención integral, cercana y profesional.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200/80 bg-white/90 text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-200/80 bg-white/90 text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-50"
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {dentists.map((dentist) => (
            <article
              key={dentist.name}
              className="snap-start shrink-0 basis-[88%] sm:basis-[70%] md:basis-[calc(50%-12px)] xl:basis-[calc(33.333%-16px)] overflow-hidden rounded-[2rem] border border-slate-100 bg-[#f7faf7] shadow-sm"
            >
              <div className="relative h-[380px] w-full overflow-hidden bg-slate-100">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-800">
                  {dentist.name}
                </h4>
                <p className="mt-2 text-sm font-medium text-emerald-700">
                  {dentist.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-sm text-slate-500 md:hidden">
          Desliza para conocer a todo el equipo clínico.
        </p>
      </div>
    </section>
  );
}