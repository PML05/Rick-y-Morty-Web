import { useEffect, useState } from 'react';
import TarjetaPersonaje from '../components/TarjetaPersonaje';

export default function Inicio() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controlador = new AbortController();

    async function obtenerPersonajes() {
      try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character', {
          signal: controlador.signal,
        });

        if (!respuesta.ok) {
          throw new Error('No se pudieron obtener los personajes.');
        }

        const datos = await respuesta.json();
        // Adaptamos los nombres de la API a los que usa nuestra tarjeta.
        const personajesAdaptados = datos.results.map((personaje) => ({
          id: personaje.id,
          nombre: personaje.name,
          especie: personaje.species,
          estado: personaje.status,
          imagen: personaje.image,
        }));
        setPersonajes(personajesAdaptados);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError('No pudimos cargar los personajes. Revisá tu conexión e intentá de nuevo más tarde.');
        }
      } finally {
        setCargando(false);
      }
    }

    obtenerPersonajes();
    // Cancelamos la petición si se abandona Inicio antes de que termine.
    return () => controlador.abort();
  }, []);

  return (
    <section aria-labelledby="titulo-inicio">
      <div className="presentacion">
        <p className="etiqueta">EXPLORÁ EL MULTIVERSO</p>
        <h1 id="titulo-inicio">Un universo de personajes.</h1>
        <p>Conocé a los protagonistas y a los habitantes más curiosos de Rick y Morty.</p>
      </div>
      {cargando && <p className="aviso" role="status">Cargando personajes…</p>}
      {error && <p className="aviso error" role="alert">{error}</p>}
      {!cargando && !error && (
        <div className="grilla">
          {personajes.map((personaje) => (
            <TarjetaPersonaje key={personaje.id} personaje={personaje} />
          ))}
        </div>
      )}
    </section>
  );
}
