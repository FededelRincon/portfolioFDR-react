// ============================================================================
//  TECNOLOGÍAS  —  Cómo editar esto (fácil):
//
//  Cada categoría es un objeto { category, items: [...] }.
//  Cada tecnología es { name, Icon, color }.
//
//  ➕ AGREGAR una tecnología (ej. "Go"):
//     1) Buscá el nombre del ícono en https://react-icons.github.io/react-icons/
//        (usá el set "Si" = Simple Icons). Para "Go" es -> SiGo
//     2) Sumalo al import de abajo:  import { ..., SiGo } from "react-icons/si";
//     3) Buscá el color oficial en https://simpleicons.org  (Go = #00ADD8)
//     4) Agregá la línea en la categoría que quieras:
//            { name: "Go", Icon: SiGo, color: "#00ADD8" },
//
//  ➖ QUITAR una tecnología: borrá su línea. El logo desaparece solo.
//
//  ℹ️  El campo `Icon` es OPCIONAL: si una tecnología no tiene logo en Simple
//     Icons (ej. Photoshop), omitilo y se muestra solo el nombre.
//
//  ℹ️  Si una categoría queda con `items: []`, NO se muestra (se oculta sola).
//
//  💡 Ojo: logos que son negros (Next, Express) usan color blanco para que se
//     vean sobre el fondo oscuro.
// ============================================================================

import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiStrapi,
  SiAstro,
  SiShadcnui,
  SiCursor,
  SiClaude,
} from "react-icons/si";

import { FaCss3, FaHtml5, FaPython, FaAws } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import { SiFirebase, SiPostgresql, SiMongodb } from "react-icons/si";

export const technologies = [
  {
    category: "Languages",
    items: [
      { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", Icon: FaCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: FaPython, color: "#3776AB" },
      // { name: "PHP", Icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    category: "Front End",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Astro", Icon: SiAstro, color: "#DD0031" },
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
    ],
  },
  {
    category: "CSS Frameworks",
    items: [
      { name: "Shadcn/ui", Icon: SiShadcnui, color: "#7952B3" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", Icon: SiMui, color: "#007FFF" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "Back End",
    items: [
      { name: "Node", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Nest", Icon: SiNestjs, color: "#E0234E" },
    ],
  },
  {
    category: "Mobile",
    items: [{ name: "React Native", Icon: SiReact, color: "#61DAFB" }],
  },
  {
    category: "IA",
    items: [
      { name: "Cursor", Icon: SiCursor, color: "#FFFFFF" },
      { name: "Claude", Icon: SiClaude, color: "#DE7356" },
      { name: "Codex", Icon: LuCodeXml, color: "#F18D1C" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Mongo", Icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    ],
  },
];
