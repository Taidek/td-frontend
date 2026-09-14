# Taidek — Frontend

Aplicación web frontend para la plataforma descentralizada **Taidek**, construida con Next.js (App Router), React 19, Tailwind CSS v4, integración con Solana y autenticación Web3/Web2 mediante Privy.

---

## 🚀 Tecnologías

| Componente | Tecnología | Descripción |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | Framework React para producción con Server Components y Turbopack |
| **Librería UI** | [React 19](https://react.dev/) | Biblioteca principal de interfaz de usuario |
| **Lenguaje** | [TypeScript 5](https://www.typescriptlang.org/) | Tipado estático estricto y seguridad en tiempo de compilación |
| **Estilos** | [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS | Framework CSS utility-first de última generación |
| **Autenticación & Wallets** | [Privy](https://www.privy.io/) (`@privy-io/react-auth`) | Onboarding Web2/Web3 fluido y embedded wallets |
| **Blockchain** | [Solana](https://solana.com/) (`@solana/kit`, `@solana-program/*`) | Integración con programas on-chain, transacciones y RPC de Solana |
| **Linter & Formatter** | [Biome](https://biomejs.dev/) | Análisis estático y formateador ultrarrápido |
| **Git Hooks & Commit Lint** | [Husky](https://typicode.github.io/husky/) + [Commitlint](https://commitlint.js.org/) | Validación de calidad y formato convencional en commits/pushes |
| **Package Manager** | [pnpm](https://pnpm.io/) (v10) | Gestor de paquetes rápido y determinista |

---

## 📁 Estructura del Proyecto

```
src/
├── app/                  # App Router de Next.js (layouts, páginas, rutas, globals.css)
├── components/           # Componentes React modulares y reutilizables
│   ├── common/           # Componentes base / primitivos (botones, modales, inputs)
│   ├── layout/           # Componentes estructurales (Header, Footer, Navbar)
│   └── modules/          # Componentes de funcionalidad específica
├── hooks/                # Custom React Hooks reutilizables
├── icons/                # Componentes SVG encapsulados
├── lib/                  # Clientes y configuraciones (Privy, Solana RPC)
├── services/             # Clientes de API y llamadas al backend de Taidek
├── types/                # Interfaces y tipos TypeScript globales
└── utils/                # Utilidades, constantes y formateadores
```

---

## 📋 Requisitos Previos

- **Node.js**: `>= 20.0.0` (recomendado `24.x`, especificado en `.nvmrc`)
- **pnpm**: `>= 10.0.0`

---

## 🛠️ Instalación y Configuración

1. Clonar el repositorio y entrar al directorio:
   ```bash
   git clone git@github.com:Taidek/td-frontend.git
   cd td-frontend
   ```

2. Instalar dependencias con `pnpm`:
   ```bash
   pnpm install
   ```

---

## 💻 Scripts y Comandos Disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo en `http://localhost:3000` con Turbopack |
| `pnpm build` | Compila la aplicación para producción y valida los tipos de TypeScript |
| `pnpm start` | Inicia el servidor de producción optimizado |
| `pnpm lint` | Analiza el código en busca de errores y formato con Biome |
| `pnpm format` | Formatea todos los archivos del proyecto con Biome |
| `pnpm check` | Aplica correcciones automáticas de Biome |
| `pnpm prepare` | Configura los hooks de Husky en el entorno local |

---

## 📜 Reglas de Desarrollo

Para conocer las directrices de arquitectura, convenciones de componentes, límites de líneas y estándares de calidad de código, consulta el archivo [RULES.md](./RULES.md).
