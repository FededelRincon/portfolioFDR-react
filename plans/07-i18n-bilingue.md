# Etapa 07 — i18n bilingüe (ES/EN)

**Objetivo:** toggle de idioma ES/EN en todo el sitio.

## Enfoque (liviano, sin i18next salvo que se quiera)
- `LanguageContext` propio + objeto de traducciones en `src/i18n/es.js` y
  `src/i18n/en.js` (o un solo `src/i18n/index.js` con ambos).
- Persistir la elección en `localStorage`; default según `navigator.language`.
- Hook `useTranslation()`/`useLang()` para consumir textos desde componentes.

## Pasos
1. Crear `src/i18n/` con los diccionarios ES/EN.
2. Crear `LanguageContext` + provider (envolver `App`).
3. Botón toggle ES/EN en el `Navbar`.
4. Extraer TODOS los textos hardcodeados a los diccionarios:
   - Cover (nombre/rol), About (bio), Info (categorías de tech), Footer
     (contacto), títulos de sección (`< About Me >`, `< My proyects >`, etc.).
5. Proyectos: usar `desc` bilingüe de `data.js` (coordinar con etapa 06).

## Archivos a tocar
- `src/i18n/*` (nuevo)
- `src/context/LanguageContext.js` (nuevo)
- `src/App.js` (provider)
- `src/components/navbar/Navbar.js` (toggle)
- Todos los componentes con texto: Cover, About, Info, Footer, Carousel

## Verificación
- El toggle cambia todos los textos y persiste al recargar.
