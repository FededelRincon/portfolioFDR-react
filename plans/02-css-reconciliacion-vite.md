# Etapa 02 — Reconciliación de CSS post-Vite

**Objetivo:** resolver el CSS que "se rompe" al migrar de CRA a Vite. Fede ya
intentó esta migración antes y parte del CSS se rompía / quedaba "encapsulado".

## Por qué pasa
CRA trae "gratis" cosas que Vite **no** incluye por defecto:
- Un reset/normalización de estilos (vía `postcss-normalize` y su preset).
- Config de PostCSS con **autoprefixer** (prefijos de vendor).
- Ciertos defaults de `box-sizing` / márgenes base.

Al migrar, esos defaults desaparecen y el layout/estilos se ven distintos.

## Pasos
1. **Diff visual** antes (CRA) vs después (Vite), sección por sección: Cover,
   About, Carousel, Info, Footer, Navbar. Usar la skill `gstack` o capturas.
2. Restaurar lo que CRA daba gratis:
   - Añadir `normalize.css` (o un reset) importado en `src/index` o `App.css`.
   - `*, *::before, *::after { box-sizing: border-box; }` global.
3. Configurar PostCSS: crear `postcss.config.js` con `autoprefixer` (Vite lo
   respeta automáticamente). Instalar `autoprefixer` como dev dep.
4. Revisar **orden de imports de CSS**: en Vite el orden puede alterar la cascada.
   Verificar que `animate.css` y el CSS del carousel se importen en el mismo orden
   relativo que antes.
5. Revisar rutas de assets referenciados **desde** archivos CSS (`url(...)`).
6. Ajustar o eliminar estilos que el navegador/Vite apliquen por defecto y que
   antes CRA anulaba. Documentar cada diferencia y su fix en este archivo.

## Archivos a tocar
- `postcss.config.js` (nuevo)
- `package.json` (autoprefixer, normalize.css)
- `src/index` / `src/App.css` (reset + box-sizing + orden de imports)
- CSS por componente según diferencias detectadas

## Verificación
- El sitio en `npm run dev` y `npm run preview` se ve **idéntico** a la versión
  CRA, en **desktop y mobile**.
