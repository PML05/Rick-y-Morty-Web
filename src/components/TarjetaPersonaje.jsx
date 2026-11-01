export default function TarjetaPersonaje({ personaje }) {
  return (
    <article className="tarjeta">
      <img src={personaje.imagen} alt={personaje.nombre} loading="lazy" width="300" height="300" />
      <div className="tarjeta-contenido">
        <h2>{personaje.nombre}</h2>
        <p><strong>Especie:</strong> {personaje.especie}</p>
        <p><strong>Estado:</strong> {personaje.estado}</p>
      </div>
    </article>
  );
}
