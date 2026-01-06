import { Search, Palette, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Análisis',
    description: 'Entendemos los procesos y necesidades de la empresa.',
    icon: Search,
  },
  {
    number: 2,
    title: 'Diseño',
    description: 'Diseñamos la solución tecnológica adecuada.',
    icon: Palette,
  },
  {
    number: 3,
    title: 'Desarrollo',
    description: 'Construimos el sistema o automatización a medida.',
    icon: Code,
  },
  {
    number: 4,
    title: 'Implementación',
    description: 'Despliegue, pruebas y capacitación.',
    icon: Rocket,
  },
  {
    number: 5,
    title: 'Soporte',
    description: 'Acompañamiento y mejoras continuas.',
    icon: HeadphonesIcon,
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Un proceso claro y probado para garantizar resultados
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical line for desktop */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/10 to-transparent hidden md:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 group relative"
            >
              {/* Number & Icon */}
              <div className="flex items-center gap-6 md:w-56 flex-shrink-0 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 group-hover:border-accent transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]">
                  <step.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="text-6xl font-black text-white/5 group-hover:text-accent/10 transition-colors duration-500">
                  {step.number.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-surface/30 p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 group-hover:text-accent transition-colors duration-500 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted text-lg group-hover:text-foreground/80 transition-colors duration-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
