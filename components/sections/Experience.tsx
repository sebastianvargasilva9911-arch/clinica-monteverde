export default function Experience() {
  return (
    <section className="bg-[#f5f7f2] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Nuestra experiencia clínica
          </span>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Un espacio pensado para transmitir calma, cuidado y confianza
          </h3>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Espacio adecuado */}
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
            <img
              src="/images/clinic/espacio.jpg"
              alt="Espacio clínico"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-slate-800">
                Un espacio adecuado
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Instalaciones diseñadas para una atención cómoda, ordenada y con
                una presentación profesional.
              </p>
            </div>
          </div>

          {/* Música ambiente */}
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
            <img
              src="/images/clinic/ambiente.jpg"
              alt="Música ambiente"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-slate-800">
                Música ambiente
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Un entorno más agradable y relajado para acompañar la experiencia
                del paciente durante su visita.
              </p>
            </div>
          </div>

          {/* Atención de calidad */}
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
            <img
              src="/images/clinic/atencion.jpg"
              alt="Atención de calidad"
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-slate-800">
                Atención de calidad
              </h4>
              <p className="mt-3 leading-7 text-slate-600">
                Trato cercano, profesionalismo y foco en el bienestar integral del
                paciente desde el primer contacto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}