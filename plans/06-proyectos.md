# Etapa 06 — Curar y mejorar los proyectos

**Objetivo:** mostrar un set curado y real de proyectos, con una presentación de
mayor impacto (efecto "wow") usando `motion` (ex framer-motion). Es la etapa de
mayor peso para búsqueda de trabajo.

## Lineup final (7 proyectos)
1. **odonto** — SaaS propio ⭐ (va primero)
2. **Ecommerce ex-trabajo #1** (kingumayoristas.com)
3. **Ecommerce ex-trabajo #2** (cbalenceria.com)
4. **viquest** — landing real
5. **TesloShop** — personal fullstack (ya en data.js)
6. **Maps** — personal (ya en data.js)
7. **WeatherApp** — personal (ya en data.js)

Notas:
- odonto y los 2 ecommerce son reales/privados → **sin link a GitHub** (github
  opcional).
- Imágenes nuevas (odonto, viquest, kingu, cbalenceria) → **Cloudinary**.
- Descripciones en **español** por ahora; la versión bilingüe se hace en la etapa 07.

## Opciones de presentación (todas con `motion`)
> La decisión de presentación queda **PENDIENTE** (la define Fede). Según la opción
> cambia la cantidad y el tamaño de las fotos.

### A) Grilla con aparición en cascada + tilt 3D en hover  ⭐ (recomendada)
Grilla con los 7 proyectos visibles de una. Al scrollear hasta la sección, las
tarjetas aparecen **una tras otra** (suben y se revelan, efecto dominó). En hover, la
tarjeta **se inclina en 3D siguiendo el cursor**, la imagen hace un leve zoom y
aparecen los botones (demo/GitHub) sobre la imagen. Rápido de escanear y moderno.
- **Fotos:** 7, formato **16:10** (~800×500, ideal 1600×1000 para retina).

### B) Proyecto estrella grande + grilla
odonto ocupa una tarjeta **ancha y protagonista** arriba (imagen con parallax suave
al scrollear); debajo, los otros 6 en grilla con la misma aparición en cascada y
hover. Da jerarquía: el SaaS manda.
- **Fotos:** odonto **16:9** grande (~1400×800) + 6 fotos **16:10** (~800×500).

### C) Showcase zig-zag (filas alternadas) — el más "premium"
Cada proyecto ocupa **una fila entera**: imagen grande de un lado, texto del otro,
**alternando** izquierda/derecha. Al scrollear, la imagen entra desde un costado y el
texto desde el otro, ensamblándose. Máximo protagonismo por proyecto (ideal con 7
curados).
- **Fotos:** 7 grandes y lindas, **3:2 o 16:10** (~1200×800).

### D) Coverflow 3D (carrusel moderno)
Mantiene la idea de carrusel pero con **perspectiva 3D**: la tarjeta del centro
grande y al frente, las de los costados inclinadas hacia atrás; al avanzar, rotan.
Más "wow" que el carrusel actual, pero sigue mostrando de a uno.
- **Fotos:** 7, ~1000×625 (**16:10**).

## Cambios técnicos previstos (al implementar, tras elegir opción)
- Instalar `motion`.
- Reestructurar `src/data/data.js` con el lineup (github opcional).
- Reemplazar/renovar `CarouselComponent.jsx` + `CarouselCards.jsx` (+ CSS) según la
  opción elegida. Si se abandona el carrusel (A/B/C), se puede quitar la dependencia
  `react-responsive-carousel`.
- Ícono de GitHub **condicional**: solo si el proyecto tiene `github`.

## Datos que Fede debe proveer (odonto, viquest, kingu, cbalenceria)
Por cada uno: **URL**, **título**, **descripción** (1 línea), **stack**, **imagen
Cloudinary**, y si tiene **repo público** o no.

## Verificación
- Se ven los 7 proyectos en el orden definido (odonto primero).
- En proyectos sin `github`, el ícono de GitHub no aparece.
- Todos los links abren y funcionan; sin links rotos.
- Efecto wow visible al scrollear; responsive en mobile.
