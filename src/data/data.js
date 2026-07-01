// ============================================================================
//  PROYECTOS  —  Cómo editar esto:
//
//  Cada proyecto es un objeto con estos campos:
//    src         -> URL de la imagen (Cloudinary). Formato 16:10 (ideal 1600x1000).
//    alt         -> texto alternativo de la imagen (accesibilidad).
//    titulo      -> nombre del proyecto.
//    desc        -> descripción bilingüe: { es: "...", en: "..." }.
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
    desc: {
      es: "SaaS de gestión para clínicas dentales: agenda, historia clínica, odontograma, pacientes y facturación en un solo lugar.",
      en: "Management SaaS for dental clinics: scheduling, medical records, odontogram, patients and billing in one place.",
    },
    tecnologies: "Next - Supabase - Tailwind - Shadcn UI",
    url: "https://odonto.ar/",
    // sin github (repo privado)
  },
  {
    // TODO: completar con datos reales del ecommerce
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938851/kingu2_wlilac.png",
    alt: "Kingu Mayoristas",
    titulo: "Kingu Mayoristas",
    desc: {
      es: "Ecommerce mayorista en producción con catálogo, carrito y gestión de pedidos para clientes reales.",
      en: "Wholesale ecommerce in production with catalog, cart and order management for real clients.",
    },
    tecnologies: "Next - Tailwind - Shadcn UI - Firebase - AWS",
    url: "https://kingumayoristas.com/",
    // sin github (repo privado)
  },
  {
    // TODO: completar con datos reales del ecommerce
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938638/cbalenceria_junzob.png",
    alt: "CBA Lencería",
    titulo: "CBA Lencería",
    desc: {
      es: "Tienda online de lencería, con catálogo de productos, checkout y ERP integrado con manejo de stock.",
      en: "Online lingerie store with product catalog, checkout and an integrated ERP with stock management.",
    },
    tecnologies: "Next - Tailwind - Shadcn UI - Firebase",
    url: "https://cbalenceria.com/",
    // sin github (repo privado)
  },
  {
    // TODO: completar con datos reales de viquest
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1782938959/viquest_vujb3f.png",
    alt: "viquest",
    titulo: "viquest",
    desc: {
      es: "Landing clásica a medida para un cliente real, enfocada en presentar su servicio para captar clientes.",
      en: "Custom classic landing page for a real client, focused on presenting their service to attract customers.",
    },
    tecnologies: "React - Tailwind",
    url: "https://viquest.com.ar/",
    // sin github (repo privado)
  },
  {
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1661381290/Portfolio/01_khhrfi.jpg",
    alt: "TesloShop",
    titulo: "TesloShop",
    desc: {
      es: "Ecommerce fullstack inspirado en la tienda de Tesla: auth, carrito, pasarela de pago y base de datos.",
      en: "Fullstack ecommerce inspired by the Tesla shop: auth, cart, payment gateway and database.",
    },
    tecnologies: "Next - MaterialUI - Mongo",
    url: "https://teslo-shop-next-js.vercel.app/",
    github: "https://github.com/FededelRincon/teslo-shop-nextJs",
  },
  {
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1661381291/Portfolio/07_wacort.jpg",
    alt: "fdrMaps",
    titulo: "Maps",
    desc: {
      es: "Clon de Google Maps con búsqueda de direcciones y rutas, sobre la API de Mapbox.",
      en: "Google Maps clone with address search and routing, built on the Mapbox API.",
    },
    tecnologies: "React - Bootstrap",
    url: "https://maps-fdr.netlify.app/",
    github: "https://github.com/FededelRincon/maps-vite-mapbox",
  },
  {
    src: "https://res.cloudinary.com/dqh7edrn7/image/upload/v1667066893/Portfolio/01_ifinym.jpg",
    alt: "WeatherApp",
    titulo: "Weather",
    desc: {
      es: "App del clima en tiempo real por ciudad, consumiendo la API de OpenWeatherMap.",
      en: "Real-time weather app by city, powered by the OpenWeatherMap API.",
    },
    tecnologies: "React - Axios - CSS vanilla",
    url: "https://weather-app-react-sandy.vercel.app/",
    github: "https://github.com/FededelRincon/weatherAppReact",
  },
];
