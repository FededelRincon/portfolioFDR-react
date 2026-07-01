# Etapa 05 — Tecnologías con íconos (data-driven)

**Objetivo:** mostrar las tecnologías con íconos/logos, data-driven, sin typos y
actualizadas.

## Estado actual
`src/components/info/Info.js` tiene el contenido **hardcodeado** en `<ul>` con
typos ("Boostrap", "TaildWind", "PhotoShop"). Grupos: Lenguajes, Front End,
Frameworks CSS, Back End, Mobile, Others. Algunos con clase `hide`.

## Pasos
1. Crear `src/data/technologies.js` con las categorías y, por cada tech, `name` e
   `icon` (nombre de ícono o ruta a logo).
2. Íconos: usar `react-icons` (incluye `si` de Simple Icons con muchos logos de
   tecnologías) o logos SVG de devicon.
3. Reescribir `Info.js` para mapear la data y renderizar cards/chips con ícono +
   nombre por categoría.
4. Corregir typos y **actualizar al stack real** (confirmar con Fede qué techs
   incluir y cuáles sacar).
5. Textos de categorías: dejar listos para i18n (etapa 07).

## Archivos a tocar
- `src/data/technologies.js` (nuevo)
- `src/components/info/Info.js` + `Info.css`
- `package.json` (react-icons)

## Verificación
- Se ven los íconos correctos por tech, sin typos, responsive.
