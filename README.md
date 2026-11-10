# Las Cruces e-Billing — Landing page

Landing page estática de un sistema de facturación electrónica para acueductos, conectado con [Factus](https://www.factus.com.co/).

Proyecto estudiantil hecho por **Marian Juliana Salazar Garzón**.

> Esta versión es solo la parte visual: no tiene inicio de sesión, registro, llamadas a APIs ni variables de entorno.

## Requisitos

- [Node.js](https://nodejs.org/) 18.17 o superior (recomendado 20 LTS)
- npm (viene con Node.js)

## Levantar el proyecto

```bash
# 1. Instalar dependencias
npm install

# 2. Modo desarrollo (http://localhost:3000)
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

## Con Docker (opcional)

```bash
docker compose up -d --build
```

La landing queda disponible en http://localhost:3000.

## Scripts

| Comando         | Descripción                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Servidor de desarrollo           |
| `npm run build` | Compila la versión de producción |
| `npm run start` | Sirve la versión compilada       |
| `npm run lint`  | Revisa el código con ESLint      |

## Estructura

```
app/
  layout.tsx      Layout raíz y metadatos
  page.tsx        Landing page completa
  globals.css     Estilos globales y tokens de Tailwind
src/
  components/ui/  Componentes base (button, card, badge)
  lib/utils.ts    Utilidad `cn` para clases
public/imgs/      Logo e imágenes de la landing
```

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · lucide-react

## Notas

- Los precios de la landing son **estimados y solo demostrativos**.
- Factus es un servicio de terceros; este proyecto no está afiliado a él.
- No hay secretos ni archivos `.env` en el proyecto. Si en el futuro agregas variables sensibles, ponlas en `.env.local` (ya está en `.gitignore`) y nunca las subas al repositorio.
