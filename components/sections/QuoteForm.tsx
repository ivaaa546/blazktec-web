'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  fullName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  company: z.string().optional(),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'El teléfono debe tener al menos 8 dígitos'),
  businessType: z.string().min(1, 'Selecciona un tipo de empresa'),
  serviceNeeded: z.string().min(1, 'Selecciona un servicio'),
  projectDescription: z.string().min(20, 'La descripción debe tener al menos 20 caracteres'),
  mainObjective: z.string().min(1, 'Selecciona un objetivo'),
  estimatedBudget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      // Formatear el mensaje para que quepa en {{message}}
      const formattedMessage = `
Empresa: ${data.company || 'N/A'}
Teléfono: ${data.phone}
Tipo Empresa: ${data.businessType}
Servicio: ${data.serviceNeeded}
Objetivo: ${data.mainObjective}
Presupuesto: ${data.estimatedBudget || 'N/A'}

Descripción del Proyecto:
${data.projectDescription}
      `.trim();

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.fullName,
          time: new Date().toLocaleString('es-GT'),
          message: formattedMessage,
          // Mantener los campos originales por si el usuario decide actualizar el template
          from_name: data.fullName,
          from_email: data.email,
          project_description: data.projectDescription,
        },
        publicKey
      );

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12 px-6 bg-surface rounded-2xl border border-accent/30 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-3xl font-bold mb-3 tracking-tight">¡Solicitud enviada!</h3>
        <p className="text-muted text-lg">
          Gracias por tu interés. Analizaremos tu caso y te responderemos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-surface/50 p-6 sm:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      {/* Datos Básicos */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold flex items-center">
          <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center mr-3 text-sm">01</span>
          Datos Básicos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <Input
              placeholder="Nombre completo *"
              {...register('fullName')}
              className="bg-background/50 border-border focus:border-accent h-12 rounded-xl"
            />
            {errors.fullName && (
              <p className="text-orange-500 text-xs mt-1 ml-1">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              placeholder="Empresa (opcional)"
              {...register('company')}
              className="bg-background/50 border-border focus:border-accent h-12 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <Input
              type="email"
              placeholder="Correo electrónico *"
              {...register('email')}
              className="bg-background/50 border-border focus:border-accent h-12 rounded-xl"
            />
            {errors.email && (
              <p className="text-orange-500 text-xs mt-1 ml-1">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Input
              type="tel"
              placeholder="Teléfono / WhatsApp *"
              {...register('phone')}
              className="bg-background/50 border-border focus:border-accent h-12 rounded-xl"
            />
            {errors.phone && (
              <p className="text-orange-500 text-xs mt-1 ml-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Información del Proyecto */}
      <div className="space-y-5">
        <h3 className="text-xl font-bold flex items-center">
          <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center mr-3 text-sm">02</span>
          Información del Proyecto
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <Select onValueChange={(value) => setValue('businessType', value)}>
              <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl">
                <SelectValue placeholder="Tipo de empresa *" />
              </SelectTrigger>
              <SelectContent className="bg-surface border-border">
                <SelectItem value="servicios">Servicios</SelectItem>
                <SelectItem value="comercio">Comercio</SelectItem>
                <SelectItem value="industria">Industria</SelectItem>
                <SelectItem value="educacion">Educación</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.businessType && (
              <p className="text-orange-500 text-xs mt-1 ml-1">{errors.businessType.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Select onValueChange={(value) => setValue('serviceNeeded', value)}>
              <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl">
                <SelectValue placeholder="¿Qué necesitas? *" />
              </SelectTrigger>
              <SelectContent className="bg-surface border-border">
                <SelectItem value="sitio-web">Sitio web</SelectItem>
                <SelectItem value="sistema-web">Sistema web</SelectItem>
                <SelectItem value="automatizacion">Automatización</SelectItem>
                <SelectItem value="integracion-ia">Integración / IA</SelectItem>
                <SelectItem value="no-seguro">No estoy seguro</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceNeeded && (
              <p className="text-orange-500 text-xs mt-1 ml-1">{errors.serviceNeeded.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <Textarea
            placeholder="Descripción del proyecto *"
            {...register('projectDescription')}
            className="bg-background/50 border-border focus:border-accent min-h-32 rounded-xl"
          />
          {errors.projectDescription && (
            <p className="text-orange-500 text-xs mt-1 ml-1">{errors.projectDescription.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <Select onValueChange={(value) => setValue('mainObjective', value)}>
              <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl">
                <SelectValue placeholder="Objetivo principal *" />
              </SelectTrigger>
              <SelectContent className="bg-surface border-border">
                <SelectItem value="optimizar">Optimizar procesos</SelectItem>
                <SelectItem value="control">Mejorar control</SelectItem>
                <SelectItem value="digitalizar">Digitalizar operación</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.mainObjective && (
              <p className="text-orange-500 text-xs mt-1 ml-1">{errors.mainObjective.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <Select onValueChange={(value) => setValue('estimatedBudget', value)}>
              <SelectTrigger className="bg-background/50 border-border h-12 rounded-xl">
                <SelectValue placeholder="Presupuesto estimado (opcional)" />
              </SelectTrigger>
              <SelectContent className="bg-surface border-border">
                <SelectItem value="no-definido">No definido</SelectItem>
                <SelectItem value="basico">Básico</SelectItem>
                <SelectItem value="intermedio">Intermedio</SelectItem>
                <SelectItem value="avanzado">Avanzado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
          <p className="text-red-500 text-sm text-center">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-7 rounded-2xl shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-all duration-300 border-0"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" />
            Procesando...
          </>
        ) : (
          'Solicitar cotización gratuita'
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-muted text-xs text-center px-4">
        Al hacer clic, aceptas que BlazkTec analice tu información para brindarte una propuesta personalizada. La cotización es gratuita y sin compromiso.
      </p>
    </form>
  );
}
