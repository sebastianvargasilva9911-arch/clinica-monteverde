"use client";

import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tratamiento: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = `Hola, quiero agendar una hora:

Nombre: ${form.nombre}
Teléfono: ${form.telefono}
Correo: ${form.correo}
Tratamiento: ${form.tratamiento}
Fecha: ${form.fecha}

Mensaje:
${form.mensaje}`;

    const url = `https://wa.me/56997054365?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="reserva" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* TEXTO */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Reserva de hora
          </span>

          <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
            Agenda tu atención de forma rápida
          </h3>

          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            Completa el formulario y serás redirigido a WhatsApp para confirmar
            tu reserva directamente con la clínica.
          </p>

          <div className="mt-8 rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
            <h4 className="text-xl font-semibold text-slate-800">
              Horario de atención
            </h4>

            <div className="mt-5 space-y-4 text-slate-600">
              <div>
                <p className="font-semibold text-slate-800">Lunes a Viernes</p>
                <p>10:00 – 14:00 / 15:00 – 19:30</p>
              </div>

              <div>
                <p className="font-semibold text-slate-800">Sábados</p>
                <p>09:00 – 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              name="nombre"
              onChange={handleChange}
              placeholder="Nombre completo"
              className="col-span-2 input"
              required
            />

            <input
              name="telefono"
              onChange={handleChange}
              placeholder="Teléfono"
              className="input"
              required
            />

            <input
              name="correo"
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="input"
            />

            <select
              name="tratamiento"
              onChange={handleChange}
              className="input"
              required
            >
              <option value="">Tratamiento</option>
              <option>Consulta General</option>
              <option>Ortodoncia</option>
              <option>Periodoncia</option>
              <option>Implantología</option>
              <option>Rehabilitación</option>
              <option>Maxilofacial</option>
              <option>Estética Orofacial</option>
              <option>Trastornos Temporomandibulares</option>
            </select>

            <input
              type="date"
              name="fecha"
              onChange={handleChange}
              className="input"
              required
            />

            <textarea
              name="mensaje"
              onChange={handleChange}
              placeholder="Mensaje (opcional)"
              className="col-span-2 input"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-emerald-700 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-800"
          >
            Agendar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}