import { useState } from 'react';
import Menu from './components/Menu';
import Inicio from './views/Inicio';
import Favoritos from './views/Favoritos';
import Contacto from './views/Contacto';

export default function App() {
  const [vista, setVista] = useState('Inicio');

  return (
    <>
      <header className="encabezado">
        <div className="contenedor barra">
          <p className="marca">Rick y Morty <span>Web</span></p>
          <Menu vista={vista} cambiarVista={setVista} />
        </div>
      </header>

      <main className="contenedor">
        {vista === 'Inicio' && <Inicio />}
        {vista === 'Favoritos' && <Favoritos />}
        {vista === 'Contacto' && <Contacto />}
      </main>

      <footer className="pie">Programación Web II · Trabajo de Presentación del sitio Web</footer>
    </>
  );
}
