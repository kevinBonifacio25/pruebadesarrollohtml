# 🎸 Shattered Riffs - Landing Page

Sitio web tipo landing page para la banda ficticia **Shattered Riffs**, desarrollado con HTML, CSS y JavaScript.  
El proyecto incluye diseño responsive, menú hamburguesa, galería con Grid, tabla de eventos y efectos interactivos.

---

## 🚀 Demo
(Agrega aquí tu enlace si lo subes a GitHub Pages, Netlify o Vercel)

---

## 📁 Estructura del proyecto


/assets
/css/style.css
/js/main.js
/img
/icons
index.html


---

## 🧩 Funcionalidades

### 🎯 UI / UX
- Hero con imagen de fondo + overlay
- Diseño oscuro con estilo rock/metal
- Efectos hover en botones, tabla e imágenes
- Footer moderno con redes sociales

### 📅 Eventos
- Tabla de conciertos con diseño personalizado
- Botones de compra con hover animado

### 🖼️ Media
- Galería responsive con CSS Grid
- Efecto hover con zoom y sombra

### 🧑 About
- Sección con imagen y texto de la banda
- Lista de influencias musicales

### 🍔 Navegación
- Menú hamburguesa para móviles
- Navegación responsive

### 📱 Responsive Design
- Adaptado para móvil, tablet y desktop
- Media queries para navegación y layout

---

## 💻 Tecnologías usadas

- HTML5
- CSS3 (Flexbox + Grid)
- JavaScript Vanilla

---

## 🍔 Menú hamburguesa

Funciona con JavaScript simple:

```js id="k9v1ab"
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
📅 Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();
🎨 Características de diseño
Fondo oscuro con acentos rojos
Hover effects en botones y tabla
Layout flexible con Flexbox y Grid
Hero con overlay centrado
Imágenes con object-fit cover
Animaciones suaves con transition
📱 Responsive Breakpoints
📱 Mobile: max-width 768px
💻 Desktop: diseño completo con flex/grid
📌 Mejoras futuras
🎬 Lightbox en galería multimedia
🎟️ Sistema real de compra de tickets
🌙 Dark/Light mode toggle
🎧 Integración con Spotify API
✨ Animaciones scroll (AOS)
📌 Sticky navbar con blur effect
👨‍💻 Autor

Proyecto creado como práctica de frontend para mejorar habilidades en:

Layouts modernos
Responsive design
Interactividad con JavaScript
CSS Grid y Flexbox