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

export default function Treatments() {
  return (
    <section id="tratamientos" className="section-fade mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Tratamientos
        </span>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
          Atención especializada para cada necesidad dental
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Contamos con distintas áreas de atención para ofrecer soluciones
          integrales, funcionales y estéticas.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {treatments.map((treatment) => (
          <article
            key={treatment.title}
            className="hover-lift rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 h-11 w-11 rounded-2xl bg-emerald-100" />
            <h4 className="text-xl font-semibold text-slate-800">
              {treatment.title}
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {treatment.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}