# Rick y Morty Web

Proyecto desarrollado para la materia Programación Web II utilizando React, JavaScript, Vite y CSS.

La aplicación permite consultar personajes de la serie Rick y Morty, visualizar una selección de personajes y enviar mensajes mediante un formulario de contacto.

## Secciones del sitio

### Inicio

Muestra personajes obtenidos de la API pública de Rick y Morty. De cada personaje se presenta su imagen, nombre, especie y estado.

### Favoritos

Muestra una selección de cinco personajes almacenados en un array de objetos dentro del proyecto.

### Contacto

Contiene un formulario que permite enviar mensajes a una cuenta de correo electrónico mediante EmailJS. También incluye un mapa de Google Maps con la ubicación de Salta Capital.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- CSS
- Rick and Morty API
- EmailJS

## Ejecutar el proyecto

Para ejecutar la aplicación de manera local es necesario tener instalado Node.js.

Primero, instalar las dependencias:

```bash
npm install
```

Luego, iniciar el servidor de desarrollo:

```bash
npm run dev
```

La terminal mostrará la dirección local para abrir la aplicación en el navegador.

## Configuración del formulario

Para utilizar el formulario de contacto en una instalación local, se debe crear un archivo .env tomando como referencia .env.example y completar las siguientes variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## URL prevista

https://pml05.github.io/Rick-y-Morty-Web/
