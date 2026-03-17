export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-[#eef4ed]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-slate-800">
            Clínica Monteverde
          </h4>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Atención dental integral con enfoque profesional, humano y moderno en
            Puerto Montt.
          </p>
        </div>

        <div className="text-sm text-slate-600">
          <p>Baquedano 281, Puerto Montt</p>
          <p>contacto@clinicamonteverde.cl</p>
        </div>
      </div>
    </footer>
  );
}