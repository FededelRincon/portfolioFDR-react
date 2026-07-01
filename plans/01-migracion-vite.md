# Etapa 01 — Migración CRA → Vite

**Objetivo:** reemplazar Create React App por Vite manteniendo el comportamiento
y el aspecto idénticos.

## Contexto
- Hoy usa `react-scripts@4.0.1` (deprecado; el `start` necesita
  `--openssl-legacy-provider` para correr en Node moderno).
- React 17. Sin TypeScript. CSS plano por componente.
- Dependencia muerta: `@brainhubeu/react-carousel` (instalada pero no usada; el
  carousel real es `react-responsive-carousel`).

## Pasos
1. Instalar dev deps: `vite`, `@vitejs/plugin-react`.
2. Quitar de `package.json`: `react-scripts`, `web-vitals`,
   `@brainhubeu/react-carousel`, `@testing-library/*` (a menos que se quieran
   mantener tests; hoy no hay).
3. Crear `vite.config.js` con el plugin de React.
4. Mover `public/index.html` a la **raíz** del proyecto:
   - Quitar `%PUBLIC_URL%` (Vite sirve `public/` en `/`).
   - Añadir `<script type="module" src="/src/index.jsx"></script>` al final del body.
5. Renombrar entry points con JSX a `.jsx` si Vite lo requiere
   (`src/index.js` → `src/index.jsx`, y componentes con JSX; ajustar imports).
6. Scripts nuevos en `package.json`: `"dev": "vite"`, `"build": "vite build"`,
   `"preview": "vite preview"`. Eliminar `--openssl-legacy-provider`.
7. Verificar imports de assets: el `import coverVideo from ...mp4` en `Cover.js`
   funciona igual en Vite (devuelve URL). Igual para imports de CSS.
8. **Subir React a la última versión disponible** (React 19): actualizar `react`
   y `react-dom`, y cambiar `ReactDOM.render` por `createRoot` en `src/index.jsx`.
   Verificar que `React.lazy` + `Suspense` sigan funcionando (App.js los usa para
   todas las secciones) y que las libs (`react-responsive-carousel`, `animate.css`)
   sean compatibles; reemplazar cualquiera que no lo sea.

## Archivos a tocar
- `package.json` (deps y scripts)
- `vite.config.js` (nuevo)
- `index.html` (movido desde `public/`)
- `src/index.js` → `src/index.jsx`
- posibles renombres `.js` → `.jsx` en componentes

## Verificación
- `npm run dev` levanta el sitio y se ve idéntico, sin errores de consola.
- `npm run build` + `npm run preview` compilan y sirven sin errores.
- **Ojo:** el CSS puede romperse en este paso → continuar con la etapa **02**.
