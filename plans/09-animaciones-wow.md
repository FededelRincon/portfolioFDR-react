# Etapa 09 — Animaciones "wow" con framer-motion

**Objetivo:** sumar efecto "wow" con animaciones fluidas, sin tocar el video del
Cover (que se mantiene tal cual).

## Pasos
1. Instalar `framer-motion`.
2. Animaciones de entrada al hacer scroll (`whileInView` + `viewport`):
   - About (fade/slide up del texto y la foto).
   - Cards de proyectos (stagger al entrar en viewport).
   - Tecnologías (aparición escalonada de los íconos).
3. Micro-interacciones en hover de las cards de proyectos (`whileHover` con
   escala/elevación).
4. Cover: mantener el `bounceInLeft` de animate.css **o** migrarlo a
   framer-motion para unificar. **No tocar el `<video>`.**
5. Cuidar performance: animaciones sutiles, respetar `prefers-reduced-motion`.

## Archivos a tocar
- `package.json` (framer-motion)
- `src/components/about/About.js`
- `src/components/carousel/CarouselCards.js`
- `src/components/info/Info.js`
- `src/components/cover/Cover.js` (opcional)

## Verificación
- Las secciones animan suave al hacer scroll; hover en cards funciona; sin jank.
