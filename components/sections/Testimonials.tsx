const testimonials = [
  {
    name: "Anamaría Barrera Ramírez",
    text: "¡Excelente atención, excelentes profesionales y mucha empatía con los niños y niñas!!!",
  },
  {
    name: "Daniela Yohana Guerrero Hernández",
    text: "De partida la atención es excelente, con un ambiente cálido, muy buenos profesionales y los precios convenientes, 100% recomendable.",
  },
  {
    name: "Nicol Fabres",
    text: "Excelente clínica dental, precios accesibles y buenísimos profesionales 100% recomendable.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Testimonios
        </span>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
          La confianza de nuestros pacientes es parte de nuestro compromiso
        </h3>
      </div>

      <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex h-full flex-col justify-between rounded-[1.75rem] border border-emerald-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            {/* Estrellas */}
            <div className="mb-5 flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </div>

            {/* Texto */}
            <p className="leading-7 text-slate-600">
              “{testimonial.text}”
            </p>

            {/* Nombre */}
            <p className="mt-6 text-sm font-semibold text-slate-800">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}