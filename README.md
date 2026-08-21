# Solutecgy - Sitio Web Corporativo

Sitio web corporativo de Solutecgy desarrollado con Next.js 14, diseñado con estilo minimalista oscuro inspirado en SpaceX/X.

## 🚀 Características

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS v4 con paleta custom
- **Componentes UI:** shadcn/ui
- **Formularios:** React Hook Form + Zod
- **Email:** EmailJS
- **Animaciones:** Framer Motion (preparado)
- **Iconos:** Lucide React

## 🎨 Diseño

- **Estilo:** Minimalista oscuro tech (SpaceX/X inspired)
- **Colores:**
  - Background: `#0A0A0A`
  - Surface: `#1A1A1A`
  - Accent: `#00D9FF` (cyan)
  - Text: `#FFFFFF` / `#A0A0A0`
- **Tipografía:** Inter (Google Fonts)

## 📦 Instalación

```bash
# Clonar el repositorio
cd <directorio-del-proyecto>

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales de EmailJS
```

## ⚙️ Configuración de EmailJS

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Crear un nuevo servicio (ej: Gmail, Outlook, etc.)
3. Crear un template con estos campos:
   ```
   from_name: {{from_name}}
   from_email: {{from_email}}
   company: {{company}}
   phone: {{phone}}
   business_type: {{business_type}}
   service_needed: {{service_needed}}
   project_description: {{project_description}}
   main_objective: {{main_objective}}
   estimated_budget: {{estimated_budget}}
   ```
4. Copiar las credenciales a `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

### Ejemplo de Template EmailJS

**Subject:** Nueva Solicitud de Cotización - {{from_name}}

**Body (HTML):**
```html
<h2>Nueva Solicitud de Cotización</h2>

<h3>Datos del Cliente</h3>
<ul>
  <li><strong>Nombre:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Empresa:</strong> {{company}}</li>
  <li><strong>Teléfono/WhatsApp:</strong> {{phone}}</li>
</ul>

<h3>Información del Proyecto</h3>
<ul>
  <li><strong>Tipo de empresa:</strong> {{business_type}}</li>
  <li><strong>Servicio necesario:</strong> {{service_needed}}</li>
  <li><strong>Objetivo principal:</strong> {{main_objective}}</li>
  <li><strong>Presupuesto estimado:</strong> {{estimated_budget}}</li>
</ul>

<h3>Descripción del Proyecto</h3>
<p>{{project_description}}</p>
```

## 🛠️ Desarrollo

```bash
# Modo desarrollo
npm run dev

# Abrir http://localhost:3000
```

## 🏗️ Build

```bash
# Crear build de producción
npm run build

# Ejecutar build localmente
npm start
```

## 📤 Deploy en Vercel

### Opción 1: Deploy desde UI (Recomendado)

1. Push tu código a GitHub/GitLab/Bitbucket
2. Ir a [Vercel](https://vercel.com) y hacer login
3. Click en "Add New Project"
4. Importar tu repositorio
5. Configurar variables de entorno:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Click en "Deploy"

### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configurar Dominio Custom

1. En Vercel, ir a Settings > Domains
2. Agregar tu dominio (ej: solutecgy.com)
3. Configurar DNS según instrucciones de Vercel
4. Esperar propagación DNS (puede tardar hasta 48h)

## 📂 Estructura del Proyecto

```
<directorio-del-proyecto>/
├── app/
│   ├── globals.css          # Estilos globales + Tailwind
│   ├── layout.tsx            # Layout con metadata SEO
│   └── page.tsx              # Página principal
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Navegación sticky
│   │   ├── Footer.tsx        # Footer
│   │   └── WhatsAppButton.tsx # Botón flotante WA
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── QuoteForm.tsx     # Formulario de cotización
│   │   ├── QuoteSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                   # Componentes shadcn/ui
├── lib/
│   └── utils.ts              # Utilidades (cn)
├── types/
│   └── index.ts              # TypeScript types
├── .env.local                # Variables de entorno (NO commitear)
├── .env.local.example        # Ejemplo de variables
└── package.json
```

## 📧 Contacto del Sitio

- **Email destino:** ivanii5862@gmail.com
- **WhatsApp:** +502 5564 1352
- **Mensaje predefinido:** "Hola Solutecgy, vengo del sitio web y quiero más información sobre..."

## ✅ Checklist Pre-Deploy

- [ ] Variables de entorno configuradas en Vercel
- [ ] EmailJS configurado y probado
- [ ] Template de email creado en EmailJS
- [ ] Email de destino verificado (ivanii5862@gmail.com)
- [ ] WhatsApp configurado (+502 5564 1352)
- [ ] Probar formulario en local
- [ ] Verificar responsive en mobile/tablet/desktop
- [ ] SEO metadata completa
- [ ] Sin errores en `npm run build`

## 🔧 Troubleshooting

### El formulario no envía emails

1. Verificar que las variables de entorno estén correctas
2. Revisar que el template de EmailJS esté activo
3. Verificar en la consola del navegador si hay errores
4. Confirmar que el email de destino esté verificado en EmailJS

### Errores de build

```bash
# Limpiar caché y node_modules
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Problemas con Tailwind

```bash
# Verificar que globals.css tenga @import "tailwindcss"
# Verificar que las clases custom estén en @theme inline
```

## 📝 Notas de Desarrollo

- El formulario usa EmailJS directamente desde el cliente (no requiere API routes)
- Los colores custom están definidos en `globals.css` usando CSS variables
- La navegación smooth scroll está implementada con `scroll-behavior: smooth` en HTML
- El sitio es completamente responsive: mobile-first design

## 🚀 Próximos Pasos

1. **Agregar casos reales** a ProjectsSection cuando estén disponibles
2. **Crear página de Política de Privacidad**
3. **Integrar Google Analytics** para tracking
4. **Agregar animaciones** con Framer Motion (ya instalado)
5. **A/B testing** de CTAs y formulario
6. **Optimización SEO** avanzada
7. **Blog técnico** (opcional)

## 📄 Licencia

© 2026 Solutecgy. Todos los derechos reservados.

---

**Desarrollado con ❤️ por Solutecgy**
