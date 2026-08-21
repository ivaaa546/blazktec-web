import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const whatsappNumber = '50255641352';
  const email = 'ivanii5862@gmail.com';
  const message = encodeURIComponent(
    'Hola Solutecgy, vengo del sitio web y quiero más información sobre...'
  );

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          ¿Tienes Dudas?
        </h2>
        <p className="text-muted text-lg sm:text-xl mb-12">
          Escríbenos y conversemos sobre tu proyecto
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold h-16 px-8 rounded-2xl shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-accent/30 text-accent hover:bg-accent hover:text-white font-bold h-16 px-8 rounded-2xl transition-all duration-300"
          >
            <a href={`mailto:${email}`}>
              <Mail className="mr-2 w-6 h-6" />
              Enviar Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
