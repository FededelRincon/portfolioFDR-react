# Etapa 04 — Quitar el formulario de contacto

**Objetivo:** eliminar el formulario de formsubmit.co y **NO mostrar el email en
ningún lado**. El contacto será **solo por LinkedIn y GitHub**.

## Estado actual
`src/components/footer/Footer.js` tiene:
- Un `<form action="https://formsubmit.co/...">` con campos name/email/subject/msg.
- Un texto con enlace `mailto:delrincon@gmail.com`.

## Pasos
1. Eliminar el `<form>` completo del `Footer`.
2. Eliminar el enlace `mailto:delrincon@gmail.com` **y** cualquier mención al
   email en el texto.
3. Reemplazar por un CTA con íconos/botones grandes a **LinkedIn** y **GitHub**
   únicamente (usar los mismos links que ya están en el Navbar).
4. Reescribir el texto de contacto para invitar a conectar por esas dos vías.
5. Ajustar el botón "Contact Me" de `About.js` (hoy hace
   `window.scroll({ top: 5000 })`, frágil) para que use scroll robusto a la
   sección de contacto (id/ref con `scrollIntoView`).

## Archivos a tocar
- `src/components/footer/Footer.js` + `Footer.css`
- `src/components/about/About.js`

## Verificación
- No aparece el email en ninguna parte del sitio.
- Los botones de LinkedIn y GitHub funcionan.
- "Contact Me" lleva suavemente a la sección de contacto.
