import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [estado, setEstado] = useState('');
  const [aviso, setAviso] = useState('');

  async function enviarMensaje(evento) {
    evento.preventDefault();
    if (estado === 'enviando') return;

    // required valida los campos vacíos; trim también rechaza solo espacios.
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setEstado('error');
      setAviso('Completá el nombre, el email y el mensaje. No uses solo espacios.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setEstado('error');
      setAviso('El formulario no está configurado. Intentá nuevamente más tarde.');
      return;
    }

    setEstado('enviando');
    setAviso('');

    try {
      // Los nombres de estas propiedades coinciden con la plantilla de EmailJS.
      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre: nombre.trim(),
          email: email.trim(),
          mensaje: mensaje.trim(),
        },
        { publicKey }
      );

      setEstado('exito');
      setAviso('Mensaje enviado correctamente');
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch {
      setEstado('error');
      setAviso('No se pudo enviar el mensaje. Revisá tu conexión e intentá nuevamente.');
    }
  }

  return (
    <section aria-labelledby="titulo-contacto">
      <div className="presentacion">
        <p className="etiqueta">DESDE ESTE PLANETA</p>
        <h1 id="titulo-contacto">Contacto.</h1>
        <p>Un espacio para tus consultas sobre el proyecto.</p>
      </div>
      <div className="contacto">
        <form
          className="panel"
          onSubmit={enviarMensaje}
          aria-busy={estado === 'enviando'}
        >
          <h2>Escribinos</h2>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            disabled={estado === 'enviando'}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            disabled={estado === 'enviando'}
          />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            required
            value={mensaje}
            onChange={(evento) => setMensaje(evento.target.value)}
            disabled={estado === 'enviando'}
          />
          <button
            className="boton-enviar"
            type="submit"
            disabled={estado === 'enviando'}
          >
            {estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {aviso && (
            <p
              className={estado === 'error' ? 'aviso error' : 'aviso'}
              role={estado === 'error' ? 'alert' : 'status'}
            >
              {aviso}
            </p>
          )}
        </form>
        <div className="panel mapa">
          <h2>Ubicación de referencia</h2>
          <p>Salta Capital, Argentina</p>
          <iframe
            title="Mapa de Salta Capital, Argentina"
            src="https://www.google.com/maps?q=Salta%20Capital%2C%20Salta%2C%20Argentina&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
