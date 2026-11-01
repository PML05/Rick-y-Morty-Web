import TarjetaPersonaje from '../components/TarjetaPersonaje';

// Esta selección es un array local: no se obtiene mediante fetch.
const favoritos = [
  { id: 1, nombre: 'Rick Sanchez', especie: 'Human', estado: 'Alive', imagen: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
  { id: 2, nombre: 'Morty Smith', especie: 'Human', estado: 'Alive', imagen: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
  { id: 3, nombre: 'Summer Smith', especie: 'Human', estado: 'Alive', imagen: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' },
  { id: 4, nombre: 'Beth Smith', especie: 'Human', estado: 'Alive', imagen: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg' },
  { id: 5, nombre: 'Jerry Smith', especie: 'Human', estado: 'Alive', imagen: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg' },
];

export default function Favoritos() {
  return (
    <section aria-labelledby="titulo-favoritos">
      <div className="presentacion">
        <p className="etiqueta">SELECCIÓN LOCAL</p>
        <h1 id="titulo-favoritos">Nuestros cinco favoritos.</h1>
        <p>Una selección fija de personajes, guardada en un array dentro del proyecto.</p>
      </div>
      <div className="grilla">
        {favoritos.map((personaje) => (
          <TarjetaPersonaje key={personaje.id} personaje={personaje} />
        ))}
      </div>
    </section>
  );
}
