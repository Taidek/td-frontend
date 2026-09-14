# RULES.md
> Single source of truth for coding agents and developers working in this repository.
> Read this file in full before making any changes.

# Taidek Frontend — Reglas de Desarrollo y Arquitectura

Este documento establece las reglas fundamentales de arquitectura, organización de código, convenciones de desarrollo y control de calidad para el frontend de **Taidek**.

---

## 1. Stack Tecnológico

| Componente | Tecnología | Propósito |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | Framework React para producción con SSR/RSC |
| **Librería UI** | React 19 | Biblioteca principal de interfaz de usuario |
| **Lenguaje** | TypeScript 5 (Strict mode) | Tipado estático y seguridad en tiempo de compilación |
| **Estilos** | Tailwind CSS v4 + PostCSS | Utilidades CSS y diseño responsivo moderno |
| **Autenticación / Wallets** | Privy (`@privy-io/react-auth`) | Autenticación Web3/Web2 y gestión de embedded wallets |
| **Blockchain** | Solana (`@solana/kit`, `@solana-program/*`) | Integración on-chain, transacciones y programas Solana |
| **Package Manager** | `pnpm` (v10) | Gestión rápida, determinista y eficiente de dependencias |
| **Linter / Formatter** | Biome | Calidad de código, formateo y análisis estático |
| **Git Hooks & Commit Lint** | Husky + Commitlint | Verificación de calidad y formato convencional en commits/pushes |

---

## 2. Estructura de Directorios

El código fuente reside en `src/` bajo la siguiente estructura modular:

```
src/
├── app/                  # App Router de Next.js (layouts, pages, routes, globals.css)
├── components/           # Componentes React modulares y reutilizables
│   ├── common/           # Componentes base / primitivos (botones, modales, inputs)
│   ├── layout/           # Componentes estructurales (Header, Footer, Sidebar, Navbar)
│   └── modules/          # Componentes específicos por funcionalidad o dominio
├── hooks/                # Custom React Hooks reutilizables
├── icons/                # Componentes SVG encapsulados e iconos
├── lib/                  # Clientes externos, configuraciones (Privy, Solana RPC, Axios/Fetch)
├── services/             # Clientes de API y llamadas al backend de Taidek
├── types/                # Interfaces y tipos TypeScript globales del frontend
└── utils/                # Funciones auxiliares y constantes del sistema
```

---

## 3. Reglas de Desarrollo y Convenciones de Componentes

Este repositorio sigue reglas estrictas para el desarrollo de componentes:

1. **Límite de Líneas**: Ningún componente debe superar las **200 líneas de código**. Si excede este límite, debe modularizarse en subcomponentes más pequeños o extraer lógica a custom hooks.
2. **Ubicación de Tipos**: Todas las interfaces y tipos compartidos deben residir en `src/types/`.
3. **Un Componente por Archivo**: Cada componente debe tener su propio archivo dedicado.
4. **Nomenclatura de Archivos**:
   - Componentes: `PascalCase.tsx` (ej. `TournamentCard.tsx`, `WalletButton.tsx`).
   - Hooks: `camelCase.ts` con prefijo `use` (ej. `useSolanaBalance.ts`).
   - Utilidades y servicios: `camelCase.ts` (ej. `apiClient.ts`, `formatters.ts`).
   - Rutas de Next.js: seguir las convenciones de Next.js App Router en minúsculas (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`).
5. **Reutilización y Desacoplamiento**: Los componentes deben ser reutilizables y no estar fuertemente acoplados a la lógica de negocio o estado global innecesario.
6. **Iconos y Elementos SVG**: Todos los elementos SVG deben encapsularse como componentes dentro de `src/icons/`.
7. **Optimización de Medios y Enlaces**:
   - Usar siempre el componente `Image` de `next/image` para imágenes.
   - Usar siempre el componente `Link` de `next/link` para navegación interna.
8. **Idioma del Código**: Nombres de componentes, variables, funciones, tipos, comentarios de código y mensajes de commit en **inglés**.
9. **Idioma de la Interfaz (UI Copy)**: Textos visibles para el usuario en **español neutro/profesional** (sin voseo ni localismos).
10. **Accesibilidad y Formularios**:
    - Las etiquetas `<label>` siempre deben incluir el atributo `htmlFor` asociado al `id` del input.
    - No utilizar `window.alert` o `window.confirm`. Emplear modales o toasts accesibles para avisos y confirmaciones de usuario.
11. **Next.js Breaking Changes & App Router**:
    - Usar directivas `'use client'` únicamente en componentes que requieran estado interactivo, hooks de React o APIs del navegador. Mantener componentes de servidor (RSC) por defecto.

---

## 4. Control de Calidad y Comandos

Ejecutar en este orden exacto para validar cambios. Un fallo en cualquier paso bloquea el siguiente:

```bash
# 1. Formatear código con Biome
pnpm format

# 2. Verificar linting y reglas estáticas con Biome
pnpm lint

# 3. Compilar y verificar tipos de TypeScript / Next.js
pnpm build
```

---

## 5. Git Hooks y Convenciones de Commits (Husky + Commitlint)

El repositorio cuenta con hooks de Husky y reglas de Commitlint para garantizar calidad y consistencia:
- **`commit-msg`**: Valida que los mensajes de commit sigan el formato `<type>: <description>`.
  - **Tipos permitidos**: `feat`, `fix`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`, `revert`, `WIP`.
  - Ejemplo: `feat: add tournament registration modal`.
- **`pre-commit`**: Ejecuta `npx biome check --staged` para validar sintaxis, formato e imports en archivos preparados.
- **`pre-push`**: Ejecuta `pnpm build` para asegurar que el proyecto compila y no tiene errores de TypeScript antes de enviar código a ramas remotas.

---

## 6. Exploración de Repositorio y Almacenamiento de Contexto

### 6.1. Exploración con CodeGraph
**Usar CodeGraph PRIMERO** antes de `grep`, `find` o lectura manual de archivos para navegar o comprender la arquitectura del código:
- MCP de CodeGraph (preferido): `codegraph_explore`, `codegraph_search`, `codegraph_node`, `codegraph_callers`.
- CLI de CodeGraph: `codegraph explore "<symbol or query>"`.
- Si no existe `.codegraph/`: inicializar con `codegraph init` o la herramienta MCP.

### 6.2. Almacenamiento de Contexto en Engram
- Registrar descubrimientos importantes, decisiones de diseño, contratos de integración y configuración mediante las herramientas de Engram (`mem_save`).
- Cada vez que se implemente una integración clave (Privy, Solana, contratos de backend), registrar la estructura y convenciones establecidas.
