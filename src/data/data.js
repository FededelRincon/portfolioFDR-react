// ============================================================================
//  PROYECTOS  —  Cómo editar esto:
//
//  Cada proyecto es un objeto con estos campos:
//    src         -> URL de la imagen (Cloudinary). Formato 16:10 (ideal 1600x1000).
//    alt         -> texto alternativo de la imagen (accesibilidad).
//    titulo      -> nombre del proyecto.
//    desc        -> descripción de 1 línea.
//    tecnologies -> stack, ej: "Next - Supabase - Tailwind".
//    url         -> demo en vivo. OPCIONAL (si no hay, no se muestra el botón demo).
//    github      -> repo. OPCIONAL (si no hay, no se muestra el ícono de GitHub).
//
//  Los proyectos reales/privados (odonto, ecommerce, viquest) van SIN github.
//
//  TODO (Fede): reemplazar las imágenes placehold.co por los screenshots reales
//  subidos a Cloudinary, y completar url/desc/tecnologies de los 4 primeros.
//
//  Lineup:
//   1. odonto — SaaS propio ⭐
//   2. Kingu Mayoristas (kingumayoristas.com)
//   3. CBA Lencería (cbalenceria.com)
//   4. viquest — landing real
//   5. TesloShop — personal
//   6. Maps — personal
//   7. WeatherApp — personal
// ============================================================================

// proporcion
// 1600 × 1000 px (o 1280 × 800 px). Proporción 16:10.

export const slidesInfo = [
  {
    // TODO: completar con datos reales de odonto
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938638/odonto_o16yhm.png",
    alt: "Odonto.ar",
    titulo: "Odonto.ar",
    desc: "SaaS de gestión para clinicas centales: agenda, historia clínica, odontograma, pacientes y facturación en un solo lugar.",
    tecnologies: "Next - Supabase - Tailwind - Shadcn UI",
    url: "https://odonto.ar/",
    // sin github (repo privado)
  },
  {
    // TODO: completar con datos reales del ecommerce
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938851/kingu2_wlilac.png",
    alt: "Kingu Mayoristas",
    titulo: "Kingu Mayoristas",
    desc: "Ecommerce mayorista en producción con catálogo, carrito y gestión de pedidos para clientes reales.",
    tecnologies: "Next - Tailwind - Shadcn UI - Firebase - AWS",
    url: "https://kingumayoristas.com/",
    // sin github (repo privado)
  },
  {
    // TODO: completar con datos reales del ecommerce
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938638/cbalenceria_junzob.png",
    alt: "CBA Lencería",
    titulo: "CBA Lencería",
    desc: "Tienda online de lenceria, con catálogo de productos, checkout y erp integrado con manejo de stock.",
    tecnologies: "Next - Tailwind - Shadcn UI - Firebase",
    url: "https://cbalenceria.com/",
    // sin github (repo privado)
  },
  {
    // TODO: completar con datos reales de viquest
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938959/viquest_vujb3f.png",
    alt: "viquest",
    titulo: "viquest",
    desc: "Landing clasica a medida para un cliente real, enfocada en presentar su servicio para captar clientes.",
    tecnologies: "React - Tailwind",
    url: "https://viquest.com.ar/",
    // sin github (repo privado)
  },
  {
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1661381290/Portfolio/01_khhrfi.jpg",
    alt: "TesloShop",
    titulo: "TesloShop",
    desc: "Ecommerce fullstack inspirado en la tienda de Tesla: auth, carrito, pasarela de pago y base de datos.",
    tecnologies: "Next - MaterialUI - Mongo",
    url: "https://teslo-shop-next-js.vercel.app/",
    github: "https://github.com/FededelRincon/teslo-shop-nextJs",
  },
  {
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1661381291/Portfolio/07_wacort.jpg",
    alt: "fdrMaps",
    titulo: "Maps",
    desc: "Clon de Google Maps con búsqueda de direcciones y rutas, sobre la API de Mapbox.",
    tecnologies: "React - Bootstrap",
    url: "https://maps-fdr.netlify.app/",
    github: "https://github.com/FededelRincon/maps-vite-mapbox",
  },
  {
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1667066893/Portfolio/01_ifinym.jpg",
    alt: "WeatherApp",
    titulo: "Weather",
    desc: "App del clima en tiempo real por ciudad, consumiendo la API de OpenWeatherMap.",
    tecnologies: "React - Axios - CSS vanilla",
    url: "https://weather-app-react-sandy.vercel.app/",
    github: "https://github.com/FededelRincon/weatherAppReact",
  },
];
