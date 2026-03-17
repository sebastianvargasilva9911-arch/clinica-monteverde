const agreements = ["Fonasa", "Particular", "Convenios por confirmar"];

export default function Agreements() {
  return (
    <section id="convenios" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Convenios
          </span>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Opciones de atención y convenios
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Puedes reemplazar esta sección por los convenios reales de la clínica
            cuando los tengas definidos.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {agreements.map((agreement) => (
            <div
              key={agreement}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 font-medium text-emerald-800"
            >
              {agreement}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}