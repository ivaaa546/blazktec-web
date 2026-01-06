import QuoteForm from './QuoteForm';

export default function QuoteSection() {
  return (
    <section id="cotizacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Solicita tu Cotización Gratuita
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Cuéntanos sobre tu empresa y tus procesos. Analizaremos tu caso y te
            enviaremos una propuesta sin costo ni compromiso.
          </p>
        </div>

        {/* Form */}
        <div className="bg-background p-6 md:p-8 lg:p-10 rounded-lg border border-border">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
