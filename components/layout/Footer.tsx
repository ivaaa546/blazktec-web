export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo/Brand */}
          <div className="text-3xl font-black tracking-tighter">
            BLAZ<span className="text-accent">K</span>TEC
          </div>

          {/* Tagline */}
          <p className="text-muted text-sm md:text-base tracking-[0.2em] uppercase font-medium">
            Sistemas Web · Automatización · IA
          </p>

          <div className="w-12 h-0.5 bg-accent/30 mx-auto" />

          {/* Copyright */}
          <p className="text-muted/60 text-sm">
            © {currentYear} BlazkTec. Diseñado para la eficiencia operativa.
          </p>

          {/* Links */}
          <div className="pt-2 flex justify-center gap-8">
            <a
              href="#"
              className="text-muted/60 hover:text-accent text-xs uppercase tracking-widest transition-all duration-300"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-muted/60 hover:text-accent text-xs uppercase tracking-widest transition-all duration-300"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
