# Etapa 10 — SEO, meta tags y presencia

**Objetivo:** que el sitio se descubra y se vea bien al compartir el link.

## Pasos
1. Meta tags en `index.html`: `title`, `description`, `lang`, viewport (ya está).
2. Open Graph + Twitter Card: `og:title`, `og:description`, `og:image`,
   `og:url`, `twitter:card` — para preview linda al compartir en LinkedIn/WhatsApp.
   Crear una imagen OG (1200x630).
3. Favicon coherente (revisar `favicon.ico`, `logo192.png`, `logo512.png`,
   `manifest.json`).
4. `robots.txt` y opcional `sitemap.xml`.
5. Verificar deploy (Netlify/Vercel) y dominio único; que el build de Vite
   despliegue bien.
6. Opcional: analytics simple (Plausible o GA) para ver visitas/clicks.

## Archivos a tocar
- `index.html`
- `public/` (favicon, imagen OG, manifest, robots)

## Verificación
- Compartir el link muestra preview con título/descr/imagen.
- Lighthouse: SEO y accesibilidad en verde.
