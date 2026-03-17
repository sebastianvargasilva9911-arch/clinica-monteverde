export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Contacto
            </span>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
              Estamos disponibles para orientarte y agendar tu atención
            </h3>

            <div className="mt-8 space-y-6">
              <div className="rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6">
                <p className="text-sm font-medium text-emerald-700">Correo</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  contacto@clinicamonteverde.cl
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6">
                <p className="text-sm font-medium text-emerald-700">WhatsApp</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  +56 9 9705 4365
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-emerald-100 bg-[#f7faf7] p-6">
                <p className="text-sm font-medium text-emerald-700">Dirección</p>
                <p className="mt-2 text-lg font-semibold text-slate-800">
                  Baquedano 281, 5480000 Puerto Montt, Los Lagos
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 shadow-sm">
            <iframe
              title="Mapa Clínica Monteverde"
              src="https://www.google.com/maps?q=Baquedano+281,+Puerto+Montt,+Los+Lagos&output=embed"
              className="h-[500px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}