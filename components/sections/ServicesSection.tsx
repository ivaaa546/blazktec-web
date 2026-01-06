import { Card } from '@/components/ui/card';
import { Monitor, Workflow, Globe } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Sistemas Web a Medida',
    features: [
      'Sistemas internos personalizados',
      'Paneles administrativos',
      'Gestión de procesos internos',
      'Control y organización de la información',
    ],
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    features: [
      'Automatización de procesos internos',
      'Integraciones entre sistemas',
      'Formularios y flujos automáticos',
      'Reducción de tareas manuales',
    ],
  },
  {
    icon: Globe,
    title: 'Sitios Web Profesionales',
    features: [
      'Landing pages',
      'Sitios corporativos',
      'Portales informativos',
      'Diseño moderno, rápido y responsivo',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-surface border-border hover:border-accent/50 transition-all duration-500 p-8 group hover:shadow-[0_0_40px_rgba(255,107,0,0.15)] relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div className="relative space-y-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* Features List */}
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-muted group-hover:text-foreground/90 transition-colors duration-300">
                      <span className="mr-3 text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
                      <span className="text-sm sm:text-base leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
