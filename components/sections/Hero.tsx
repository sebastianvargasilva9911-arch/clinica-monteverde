export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-600"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_22%)]" />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="section-fade text-white">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
            Atención odontológica integral en Puerto Montt
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Sonrisas cuidadas con un enfoque humano, moderno y profesional
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-emerald-50/90 md:text-lg">
            En Clínica Monteverde ofrecemos atención dental con altos estándares,
            un entorno cómodo y tratamientos orientados al bienestar, la estética
            y la salud bucal de nuestros pacientes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#reserva"
              className="hover-scale rounded-full bg-white px-6 py-3 font-semibold text-emerald-800"
            >
              Reservar hora
            </a>

            <a
              href="https://wa.me/56997054365"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="glass-card hover-lift rounded-2xl border border-white/15 p-4">
              <p className="font-semibold">Atención integral</p>
              <p className="mt-1 text-sm text-emerald-50/80">
                Especialidades dentales
              </p>
            </div>

            <div className="glass-card hover-lift rounded-2xl border border-white/15 p-4">
              <p className="font-semibold">Ambiente cómodo</p>
              <p className="mt-1 text-sm text-emerald-50/80">
                Espacio profesional
              </p>
            </div>

            <div className="glass-card hover-lift rounded-2xl border border-white/15 p-4">
              <p className="font-semibold">Ubicación central</p>
              <p className="mt-1 text-sm text-emerald-50/80">Puerto Montt</p>
            </div>
          </div>
        </div>

        <div className="section-fade">
          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/20 p-3 shadow-2xl">
            <img
              src="/images/clinic/hero-clinica.jpg"
              alt="Clínica dental moderna"
              className="h-[500px] w-full rounded-[1.5rem] object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}