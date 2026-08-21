import {
  Bot,
  Database,
  ExternalLink,
  Github,
  MessageCircle,
  Mic,
  Monitor,
  ShoppingCart,
} from 'lucide-react';

const projects = [
  {
    title: 'Go Veny',
    category: 'SaaS e-commerce',
    description: 'Plataforma para que emprendedores creen tiendas digitales, administren su catálogo y reciban pedidos por WhatsApp.',
    repository: 'https://github.com/ivaaa546/veny',
    demo: 'https://veny.vercel.app',
    icon: ShoppingCart,
  },
  {
    title: 'Agente IA WhatsApp - CRM',
    category: 'Automatización comercial',
    description: 'Agente de IA que automatiza la atención por WhatsApp y responde con base en documentos propios de cada empresa.',
    repository: 'https://github.com/ivaaa546/agentechat',
    icon: MessageCircle,
  },
  {
    title: 'Agente IA de BD',
    category: 'IA para datos',
    description: 'Sistema que transforma preguntas en español en consultas SQL para explorar datos de e-commerce.',
    repository: 'https://github.com/ivaaa546/agenteBD',
    icon: Database,
  },
  {
    title: 'Docu AI',
    category: 'RAG / Gestión documental',
    description: 'Aplicación para cargar documentos y conversar con su contenido mediante una arquitectura RAG local.',
    repository: 'https://github.com/ivaaa546/agent-docu',
    icon: Bot,
  },
  {
    title: 'Doblador de Videos',
    category: 'Procesamiento con IA',
    description: 'Backend que transcribe, traduce y genera doblaje sincronizado de videos en distintos idiomas.',
    repository: 'https://github.com/ivaaa546/traductorbakend',
    icon: Mic,
  },
  {
    title: 'Punto de Ventas',
    category: 'Sistema de gestión',
    description: 'Aplicación de escritorio para ventas, facturación, reportes y control de usuarios de un negocio.',
    repository: 'https://github.com/ivaaa546/PuntoDeVentas',
    icon: Monitor,
  },
];

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-surface/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Casos y Proyectos
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted sm:text-xl">
            Soluciones para comercio, operaciones, atención al cliente e inteligencia artificial.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-white/5 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(255,107,0,0.08)]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    Ver repositorio
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground"
                    >
                      Ver proyecto
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
