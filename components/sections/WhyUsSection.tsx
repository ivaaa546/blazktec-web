import { Check, Cog, TrendingUp, Target, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Check,
    title: 'Soluciones a medida, no genéricas',
  },
  {
    icon: Cog,
    title: 'Tecnología moderna y escalable',
  },
  {
    icon: Target,
    title: 'Automatización real de procesos',
  },
  {
    icon: TrendingUp,
    title: 'Enfoque en eficiencia y resultados',
  },
  {
    icon: Headphones,
    title: 'Soporte y acompañamiento continuo',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Por Qué Solutecgy
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-6 rounded-2xl bg-surface/30 border border-white/5 hover:border-accent/30 hover:bg-accent/[0.02] transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent transition-all duration-500 shadow-md">
                <benefit.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-tight group-hover:text-foreground transition-colors duration-500">
                  {benefit.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
