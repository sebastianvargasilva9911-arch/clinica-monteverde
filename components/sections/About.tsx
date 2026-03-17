export default function About() {
  return (
    <section id="nosotros" className="section-fade mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Sobre nosotros
          </span>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Odontología moderna con cercanía y confianza
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Clínica Monteverde busca entregar una experiencia cálida, seria y
            profesional, donde cada paciente reciba atención personalizada y un
            tratamiento acorde a sus necesidades.
          </p>
        </div>

        <div className="hover-lift rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
          <h4 className="text-xl font-semibold text-emerald-800">
            Nuestra misión
          </h4>
          <p className="mt-4 leading-7 text-slate-600">
            Brindar atención odontológica integral de calidad, en un entorno
            seguro, humano y profesional, contribuyendo al bienestar y salud
            bucal de cada paciente mediante tratamientos personalizados.
          </p>
        </div>

        <div className="hover-lift rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
          <h4 className="text-xl font-semibold text-emerald-800">
            Nuestra visión
          </h4>
          <p className="mt-4 leading-7 text-slate-600">
            Ser una clínica dental referente en Puerto Montt por su excelencia
            profesional, confianza, innovación y enfoque centrado en la
            experiencia y satisfacción de sus pacientes.
          </p>
        </div>
      </div>
    </section>
  );
}