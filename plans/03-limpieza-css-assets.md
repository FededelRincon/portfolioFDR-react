# Etapa 03 — Limpieza de CSS y assets

**Objetivo:** limpiar sin cambiar el diseño.

## Pasos
1. Borrar `src/media/coverVideo.mp4` (presente pero sin usar; el Cover usa
   `particles-wave-motion-on-black.mp4`).
2. Optimizar el peso del video del Cover:
   - Recomprimir (menor bitrate/resolución razonable), mantener el efecto.
   - Añadir `playsInline` al `<video>` (autoplay en iOS) y `preload="auto"`.
   - Considerar `poster` para primer frame mientras carga.
3. Revisar responsive en mobile (reclutadores abren el link en el celular):
   Cover, About, Carousel, Info, Footer.
4. Accesibilidad básica: `alt` descriptivos, contraste de texto, uso de tags
   semánticos.
5. Revisar clases `hide` en `Info.js` (grupos ocultos en responsive) — ver si
   siguen teniendo sentido tras la etapa 05.

## Archivos a tocar
- `src/media/` (borrar video)
- `src/components/cover/Cover.js` + `Cover.css`
- CSS de las secciones según revisión responsive

## Verificación
- El sitio sigue viéndose bien, más liviano; el video carga y loopea en desktop y
  mobile.
