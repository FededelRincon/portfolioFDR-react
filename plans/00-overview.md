# Refresh del portfolio — Overview

Fede está buscando trabajo y quiere modernizar su portfolio. El trabajo se ejecuta
**por etapas** (un commit/PR por etapa), no todo junto. Las etapas están numeradas
en el **orden de ejecución recomendado**.

## Decisiones tomadas
- Migrar **CRA → Vite**.
- Subir React a la **última versión disponible** (React 19).
- **NO** usar Tailwind — mantener el CSS plano actual.
- Sitio **bilingüe** con toggle ES/EN.
- Animaciones "wow" con **framer-motion**.
- **Se mantiene** el Cover con video en loop (es el sello del sitio).
- Contacto **solo por LinkedIn y GitHub** — nunca mostrar el email.

## Estado del proyecto (hoy)
- Create React App 4 / React 17, CSS plano por componente.
- Secciones: Navbar → Cover (video) → About → Carousel (proyectos) → Info
  (tecnologías) → Footer (formulario formsubmit.co).
- Proyectos en `src/data/data.js` (11, varios de cursos/genéricos).
- Tecnologías hardcodeadas en `Info.js` con typos.

## Etapas y estado (en orden de ejecución)

| # | Etapa | Archivo | Estado |
|---|-------|---------|--------|
| 01 | Migración a Vite (+ React 19) | `01-migracion-vite.md` | ✅ Hecho (rama `migracion-vite`) |
| 02 | Reconciliación CSS post-Vite | `02-css-reconciliacion-vite.md` | ⬜ Pendiente |
| 03 | Limpieza CSS y assets | `03-limpieza-css-assets.md` | ⬜ Pendiente |
| 04 | Quitar formulario de contacto | `04-quitar-formulario-contacto.md` | ⬜ Pendiente |
| 05 | Tecnologías con íconos | `05-tecnologias.md` | ⬜ Pendiente |
| 06 | Curar proyectos | `06-proyectos.md` | ⬜ Pendiente |
| 07 | i18n bilingüe (ES/EN) | `07-i18n-bilingue.md` | ⬜ Pendiente |
| 08 | Reescribir About | `08-about-textos.md` | ⬜ Pendiente |
| 09 | Animaciones (framer-motion) | `09-animaciones-wow.md` | ⬜ Pendiente |
| 10 | SEO / meta / responsive | `10-seo-meta-responsive.md` | ⬜ Pendiente |

## Pregunta abierta
- **Etapa 06 (proyectos):** confirmar la lista final de proyectos a mantener/quitar
  y cuáles odonto.ar mostrar. Se resuelve al ejecutar esa etapa.
