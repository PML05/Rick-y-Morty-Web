export default function Menu({ vista, cambiarVista }) {
  const opciones = ['Inicio', 'Favoritos', 'Contacto'];

  return (
    <nav aria-label="Menú principal">
      {opciones.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className={vista === opcion ? 'activo' : ''}
          aria-pressed={vista === opcion}
          onClick={() => cambiarVista(opcion)}
        >
          {opcion}
        </button>
      ))}
    </nav>
  );
}
