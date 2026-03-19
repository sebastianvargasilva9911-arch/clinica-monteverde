export default function Booking() {
  return (
    <section id="reserva" className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-[2.5rem] border border-emerald-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 p-10 text-white md:p-14">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
              Reserva online
            </span>

            <h3 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
              Agenda tu atención de forma simple, rápida y profesional
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-emerald-50/90">
              Hemos integrado un sistema de reserva online para que puedas elegir
              tu atención de manera cómoda. También puedes escribirnos por
              WhatsApp si necesitas orientación antes de reservar.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="font-semibold">Rápido</p>
                <p className="mt-1 text-sm text-emerald-50/80">
                  Reserva en pocos pasos
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="font-semibold">Flexible</p>
                <p className="mt-1 text-sm text-emerald-50/80">
                  Elige fecha y horario
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="font-semibold">Seguro</p>
                <p className="mt-1 text-sm text-emerald-50/80">
                  Agenda oficial de la clínica
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <h4 className="text-lg font-semibold">Horario de atención</h4>

              <div className="mt-4 space-y-3 text-emerald-50/90">
                <div>
                  <p className="font-semibold text-white">Lunes a Viernes</p>
                  <p>10:00 – 14:00 / 15:00 – 19:30</p>
                </div>

                <div>
                  <p className="font-semibold text-white">Sábados</p>
                  <p>09:00 – 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-14">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Reserva tu hora
            </span>

            <h4 className="mt-4 text-3xl font-bold tracking-tight text-slate-800">
              Elige cómo quieres agendar
            </h4>

            <p className="mt-4 leading-7 text-slate-600">
              Puedes reservar directamente en nuestra agenda online oficial o
              escribirnos por WhatsApp si prefieres apoyo antes de coordinar tu
              atención.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://app.dentidesk.cl/agenda_online.php?id_e=448&hash=f6d22886c3a58daf02c77a3bbf961696a9b955e1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[1.75rem] border border-emerald-200 bg-emerald-50 px-6 py-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-100/70"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-800">
                    Reservar online
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Accede al sistema oficial de agenda de la clínica
                  </p>
                </div>

                <span className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-emerald-800">
                  Abrir
                </span>
              </a>

              <a
                href="https://wa.me/56997054365"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-slate-50"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-800">
                    Agendar por WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Te orientamos antes de reservar
                  </p>
                </div>

                <span className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-700 transition group-hover:bg-emerald-50">
                  Escribir
                </span>
              </a>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Recomendación
              </p>
              <p className="mt-3 leading-7 text-slate-600">
                Si ya sabes qué atención necesitas, usa la agenda online. Si
                tienes dudas sobre tratamiento, especialidad o disponibilidad,
                escríbenos primero por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}