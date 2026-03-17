const testimonials = [
  {
    name: "Paciente 1",
    text: "La atención fue excelente, muy profesional y cercana. Me sentí en confianza desde el primer momento.",
  },
  {
    name: "Paciente 2",
    text: "La clínica transmite tranquilidad, orden y calidad. El equipo fue muy amable durante todo el proceso.",
  },
  {
    name: "Paciente 3",
    text: "Quedé muy conforme con el tratamiento y la explicación que me dieron. Totalmente recomendable.",
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

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[1.75rem] border border-emerald-100 bg-white p-8 shadow-sm"
          >
            <div className="mb-5 flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </div>

            <p className="leading-7 text-slate-600">“{testimonial.text}”</p>

            <p className="mt-5 font-semibold text-slate-800">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}