# Etapa 06 — Curar y mejorar los proyectos

**Objetivo:** menos proyectos pero mejores y reales; presentación con más impacto.
Es la etapa de mayor impacto para búsqueda de trabajo.

## Estado actual
`src/data/data.js` = array `slidesInfo` con **11 proyectos** (varios de cursos /
genéricos). Cada uno: `src` (img Cloudinary), `alt`, `titulo`, `desc`,
`tecnologies` (string), `url`, `github`. Se renderizan en carousel
(`CarouselComponent.js` + `CarouselCards.js`).

## Curación recomendada (verificar links vivos antes de decidir)
- **Mantener (reales/fuertes):** Oasis (vivero real), Music Academy (real),
  TesloShop (fullstack Next+Mongo), Maps (Mapbox), PokeApp.
- **Evaluar / agrupar / quitar (de curso o genéricos):** Weather, Buscador
  películas, GifsApp, Buscador imágenes, Mi Cachorrito, Bienes Raíces.
- **odonto.ar (repo privado):** incluirlos como casos reales mostrando
  demo/screenshot **sin** link a GitHub.

> **Fede debe confirmar la lista final** de proyectos a mantener/quitar y cuáles
> odonto.ar mostrar.

## Pasos
1. Verificar qué links (`url`) siguen vivos; descartar los rotos.
2. Reestructurar `data.js`:
   - `github` **opcional** (para repos privados).
   - `desc` **bilingüe** (`{ es, en }`) — coordinar con etapa 07.
   - `tecnologies` como **array** (para chips/íconos, alineado con etapa 05).
   - flag `featured` para destacar los más fuertes.
3. Mejorar textos de descripción para que sean representativos (no genéricos).
4. Presentación: mantener carousel o pasar a **grid de cards**; cards con
   hover y entrada animada (etapa 09).

## Archivos a tocar
- `src/data/data.js`
- `src/components/carousel/CarouselComponent.js` + `CarouselCards.js` + `Carousel.css`

## Verificación
- Todos los links de proyectos abren y funcionan.
- La descripción de cada proyecto es clara y representativa.
