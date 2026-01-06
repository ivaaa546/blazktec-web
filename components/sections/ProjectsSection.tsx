export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Casos y Proyectos
          </h2>
        </div>

        {/* Temporary Content */}
        <div className="text-center py-16 px-6 rounded-lg border-2 border-dashed border-border">
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Actualmente desarrollamos soluciones internas y proyectos piloto.
            Próximamente mostraremos casos reales.
          </p>
        </div>
      </div>
    </section>
  );
}
