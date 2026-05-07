import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Mock Dither (React Bits visual, no external dep needed) ─────────────────
const Dither = (_props: any) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className="w-full h-full"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, #ff660033 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #ff660022 0%, transparent 50%), #050a14',
        backgroundSize: '100% 100%',
      }}
    />
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,102,0,0.08) 2px, rgba(255,102,0,0.08) 4px)',
      }}
    />
  </div>
);

// ─── Magnetic Button ──────────────────────────────────────────────────────────
const MagneticButton = ({
  children,
  className,
  variant = 'primary',
  href,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'dark';
  href?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.2);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const variants = {
    primary: 'bg-[var(--color-accent)] text-white hover:bg-[#e65c00]',
    outline: 'bg-transparent border border-white/40 text-white hover:bg-white/20',
    dark: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)]',
  };

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <motion.a
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={cn('btn-premium group', variants[variant], className)}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn('btn-premium group', variants[variant], className)}
    >
      {inner}
    </motion.button>
  );
};

// ─── Operaciones Carousel (draggable, infinite) ───────────────────────────────
const OperacionesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [draggable, setDraggable] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setDraggable(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // Descriptions aligned to actual image content
  const images = [
    { src: '/assets/images/5179247336960494869.jpg', desc: 'Calibración y diagnóstico en sitio. Equipos de alta precisión garantizando el cumplimiento de los estándares operativos más exigentes.' },
    { src: '/assets/images/5179247336960494871.jpg', desc: 'Análisis avanzado de transmisores con tecnología HART. Expertos en puesta en marcha y resolución de fallas en planta.' },
    { src: '/assets/images/5179247336960494872.jpg', desc: 'Equipo técnico certificado en terreno. Herramientas de precisión para asegurar la continuidad de su operación.' },
    { src: '/assets/images/5179247336960494874.jpg', desc: 'Monitoreo constante y soporte integral para procesos industriales que no pueden detenerse.' },
    { src: '/assets/images/5179247336960494875.jpg', desc: 'Instalación y configuración técnica de alta fidelidad. Mediciones precisas y datos fiables para su control de procesos.' },
    { src: '/assets/images/5179247336960494870.jpg', desc: 'Infraestructura industrial de alto nivel: tecnología y experiencia convergiendo para optimizar sus procesos.' },
    { src: '/assets/images/5179247336960494876.jpg', desc: 'Soluciones integrales de instrumentación para entornos complejos. Calidad y rendimiento en cada proyecto.' },
    { src: '/assets/images/5179247336960494873.jpg', desc: 'Inspección detallada y mantenimiento preventivo. Enfocados en la confiabilidad de cada instrumento instalado.' },
    { src: '/assets/images/5179247336960494878.jpg', desc: 'Laboratorio de servicio técnico con equipos de calibración de última generación para máxima precisión.' },
    { src: '/assets/images/5179247336960494879.jpg', desc: 'Suministro y mantenimiento de manifold y accesorios. Calidad garantizada para los sistemas de presión más críticos.' },
    { src: '/assets/images/5179247336960494877.jpg', desc: 'Inventario de transmisores y equipos listos para despacho inmediato. Respuesta rápida para minimizar paradas no programadas.' },
  ];

  return (
    <section className="py-32 bg-gray-50 overflow-hidden border-t border-black/5">
      <div className="container-relats mb-16 px-10">
        <span className="text-[var(--color-accent)] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">04. Operaciones y Casos de Éxito</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-[var(--color-primary)] max-w-4xl">
          Nuestra tecnología <br /> y experiencia en acción.
        </h2>
        <p className="mt-6 text-[var(--color-secondary)] font-medium text-lg max-w-2xl">
          Arrastra para explorar nuestro trabajo en campo, laboratorio e infraestructura industrial.
        </p>
      </div>

      <div ref={carouselRef} className="overflow-hidden cursor-grab active:cursor-grabbing pl-10">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -draggable }}
          dragElastic={0.05}
          dragTransition={{ bounceStiffness: 80, bounceDamping: 20 }}
          whileTap={{ cursor: 'grabbing' }}
          className="flex gap-8 pb-10 select-none"
        >
          {images.map((img, idx) => (
            <div key={idx} className="min-w-[320px] md:min-w-[400px] flex flex-col group">
              <div className="w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden mb-6 bg-white border border-gray-200 shadow-sm relative">
                <img
                  src={img.src}
                  alt={`C&T Operación ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-[var(--color-secondary)] font-medium leading-relaxed pr-8 pl-0 text-sm max-w-[360px]">
                {img.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-10 flex items-center justify-between',
          isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-black/8 h-[64px] md:h-[72px] shadow-sm' : 'bg-transparent h-20 md:h-24'
        )}
      >
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <img
              src="/assets/LOGO-C_T.svg"
              alt="C&T Logo"
              className={cn('h-12 md:h-16 lg:h-20 w-auto transition-all', isScrolled ? 'brightness-100' : 'brightness-0 invert')}
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {['Equipos', 'Servicios Técnicos', 'Industrias', 'Nosotros'].map((item) => (
              <a
                key={item}
                href="#"
                className={cn(
                  'text-[13px] font-bold uppercase tracking-wider transition-colors',
                  isScrolled ? 'text-[var(--color-primary)]/80 hover:text-[var(--color-accent)]' : 'text-white/80 hover:text-white'
                )}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className={cn('hidden md:flex items-center gap-4 text-[12px] font-bold uppercase transition-colors', isScrolled ? 'text-[var(--color-primary)]/50' : 'text-white/50')}>
            <button className={cn('min-h-[44px] px-1 hover:text-[var(--color-accent)]', isScrolled ? 'text-[var(--color-primary)]' : 'text-white')}>ES</button>
            <div className="w-[1px] h-3 bg-current opacity-30" />
            <button className="min-h-[44px] px-1 hover:text-[var(--color-accent)]">EN</button>
          </div>
          <MagneticButton
            variant="primary"
            className="hidden sm:flex px-6 md:px-8 py-3 text-xs uppercase tracking-widest font-black"
            href="https://wa.me/123456789?text=Hola,%20deseo%20solicitar%20una%20cotizaci%C3%B3n."
          >
            Solicitar Cotización
          </MagneticButton>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              'lg:hidden flex flex-col gap-1.5 p-2 min-h-[44px] min-w-[44px] items-center justify-center',
              isScrolled ? 'text-[var(--color-primary)]' : 'text-white'
            )}
            aria-label="Menú"
          >
            <span className={cn('block h-0.5 bg-current transition-all duration-300', menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6')} />
            <span className={cn('block h-0.5 bg-current transition-all duration-300', menuOpen ? 'opacity-0 w-0' : 'w-5')} />
            <span className={cn('block h-0.5 bg-current transition-all duration-300', menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6')} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="fixed top-[64px] left-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-black/8 shadow-lg lg:hidden"
        >
          <div className="px-6 py-6 flex flex-col gap-1">
            {['Equipos', 'Servicios Técnicos', 'Industrias', 'Nosotros'].map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[var(--color-primary)] text-base font-bold uppercase tracking-wider py-4 border-b border-black/5 hover:text-[var(--color-accent)] transition-colors min-h-[52px] flex items-center"
              >
                {item}
              </a>
            ))}
            <MagneticButton
              variant="primary"
              className="mt-4 w-full py-4 text-sm uppercase tracking-widest font-black"
              href="https://wa.me/123456789?text=Hola,%20deseo%20solicitar%20una%20cotizaci%C3%B3n."
            >
              Solicitar Cotización
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[var(--color-primary)]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/5179247336960494862.jpg"
          alt="Trabajo en Planta C&T"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/30 via-transparent to-[var(--color-primary)]" />
      </div>

      <motion.div style={{ y }} className="container-relats relative z-20 px-6 md:px-10 pt-28 md:pt-32 pb-16">
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-black tracking-tighter leading-[0.88] text-white">
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="block">
            PRECISIÓN DE FÁBRICA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-transparent block [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.7)] mt-1 md:mt-2"
          >
            DISPONIBILIDAD INMEDIATA
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-white/80 text-base md:text-xl lg:text-2xl mt-6 md:mt-10 max-w-3xl leading-relaxed font-medium"
        >
          Especialistas en instrumentación para el sector energético en Venezuela. Equipos reacondicionados bajo estándares internacionales con garantía certificada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-12"
        >
          <MagneticButton className="px-8 md:px-12 py-4 text-sm md:text-base w-full sm:w-auto justify-center">Cotizar</MagneticButton>
          <MagneticButton variant="outline" className="px-8 md:px-12 py-4 text-sm md:text-base w-full sm:w-auto justify-center">Soporte Técnico</MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── Restauración Clase A ─────────────────────────────────────────────────────
const Restauracion = () => (
  <section className="section-padding bg-white px-6 md:px-10">
    <div className="container-relats">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden aspect-square md:aspect-video lg:aspect-[4/5] bg-gray-100 relative"
          >
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full relative border-r-2 border-white">
                <img src="/assets/images/5179247336960494863.jpg" className="w-full h-full object-cover grayscale opacity-60" alt="Equipo antes del proceso" />
              </div>
              <div className="w-1/2 h-full relative">
                <img src="/assets/images/5179247336960494864.jpg" className="w-full h-full object-cover" alt="Equipo certificado" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <span className="text-[var(--color-accent)] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">01. Calidad Certificada.</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-[var(--color-primary)] mb-8">
            No reparamos, <br /> certificamos.
          </h2>
          <div className="space-y-6 text-[var(--color-secondary)] text-lg leading-relaxed font-medium">
            <p>
              Sometemos cada instrumento a un riguroso proceso de reacondicionamiento nivel de fábrica. Cada equipo es calibrado y restaurado hasta quedar estética y funcionalmente impecable, garantizando una operación segura y prolongada.
            </p>
            <p>
              Entregamos soluciones listas para instalar: empacadas de origen, con manuales técnicos y certificados bajo los más altos estándares internacionales de metrología, respaldados por una garantía técnica incondicional.
            </p>
          </div>
          <div className="pt-10">
            <button className="text-[var(--color-primary)] font-black text-sm uppercase tracking-widest flex items-center gap-3 group">
              Nuestros Estándares de Metrología
              <span className="w-8 h-[2px] bg-[var(--color-accent)] group-hover:w-12 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Especialidades (Dither BG) ───────────────────────────────────────────────
const Especialidades = () => (
  <section className="relative py-32 px-6 md:px-10 overflow-hidden bg-[#050a14]">
    <div className="absolute inset-0 z-0">
      <Dither />
    </div>

    <div className="container-relats relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="uppercase text-xs tracking-widest font-bold text-white/50 mb-4 block">02. Marcas y Equipos.</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] text-white">
            Liderazgo en <br /> Instrumentación <br /> de Proceso
          </h2>
        </div>
        <div className="pb-4">
          <button className="bg-[var(--color-accent)] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#e65c00] transition-all">
            Cotizar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Rosemount 3051', desc: 'Transmisores de presión para rentabilidad y seguridad.', img: '/assets/images/ROSEMOUNT LOGO.png' },
          { title: 'Fluke 754/744', desc: 'Calibradores documentadores para máxima exactitud.', img: '/assets/images/FLUKE LOGO.png' },
          { title: 'Protocolo HART', desc: 'Comunicadores esenciales para configuración en campo.', img: '/assets/images/HART LOGO.png' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
            className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="h-3/5 w-full p-12 flex items-center justify-center overflow-hidden bg-gray-50 border-b border-gray-100">
              <img src={item.img} alt={item.title} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90" />
            </div>
            <div className="h-2/5 p-8 bg-white flex flex-col justify-end">
              <h3 className="text-[var(--color-primary)] text-3xl font-black tracking-tighter mb-2">{item.title}</h3>
              <p className="text-[var(--color-secondary)] font-medium text-sm mb-6">{item.desc}</p>
              <div className="w-10 h-[2px] bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Soluciones (Grainient BG) ────────────────────────────────────────────────
const Soluciones = () => {
  const solutions = [
    { title: 'Stock Inmediato', description: 'Entrega en Venezuela, sin esperas de importación de meses.', img: '/assets/images/5179247336960494877.jpg' },
    { title: 'Soporte en Planta', description: 'Configuración y diagnóstico especializado directamente en su locación.', img: '/assets/images/5179247336960494866.jpg' },
    { title: 'Alquiler Estratégico', description: 'Equipos disponibles para paradas de planta o proyectos puntuales.', img: '/assets/images/5179247336960494870.jpg' },
    { title: 'Garantía Real', description: 'Respaldo técnico local que elimina el riesgo del mercado usado convencional.', img: '/assets/images/5179247336960494868.jpg' },
  ];

  return (
    <section className="relative bg-white py-20 md:py-32 px-6 md:px-10 text-[var(--color-primary)] overflow-hidden min-h-[600px]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/assets/grainient-1778185720133.webm" type="video/webm" />
        </video>
      </div>

      <div className="container-relats relative z-10">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <span className="uppercase text-xs tracking-widest font-bold text-[var(--color-accent)] mb-4 block">03. Soluciones.</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 text-[var(--color-primary)]">
              Continuidad <br /> Operativa <br /> Garantizada
            </h2>
            <p className="text-[var(--color-secondary)] mb-10 text-lg font-medium">
              Respaldo técnico integral para mantener sus procesos en funcionamiento continuo sin retrasos.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white border border-black/[0.07] rounded-2xl hover:border-[var(--color-accent)]/40 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={sol.img}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-[var(--color-primary)]">{sol.title}</h3>
                  <p className="text-sm text-[var(--color-secondary)] leading-relaxed font-medium">{sol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Root Component ───────────────────────────────────────────────────────────
const RelatsClone = () => (
  <div className="bg-white text-[var(--color-primary)] font-hanken">
    <Navbar />
    <Hero />
    <Restauracion />
    <Especialidades />
    <Soluciones />
    <OperacionesCarousel />

    {/* B2B CTA Banner */}
    <section className="bg-[var(--color-primary)] py-24 md:py-40 px-6 md:px-10 text-white overflow-hidden relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60 mix-blend-screen pointer-events-none"
        >
          <source src="/assets/pixel-blast-1778181929091.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-primary)]/40 mix-blend-multiply" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        className="container-relats relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-8 md:mb-12 drop-shadow-2xl max-w-4xl mx-auto leading-tight">
          ¿Tienes un proyecto <br /> en manos?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <MagneticButton variant="primary" className="px-10 md:px-16 py-4 md:py-5 text-base md:text-xl w-full sm:w-auto justify-center">
            Hablar con un Especialista
          </MagneticButton>
          <button className="bg-transparent border-2 border-white/40 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-3 min-h-[52px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Visita nuestras redes
          </button>
        </div>
      </motion.div>
    </section>

    {/* Footer */}
    <footer className="bg-white border-t border-black/5 py-24 px-10">
      <div className="container-relats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="lg:col-span-1">
          <img src="/assets/LOGO-C_T.svg" alt="C&T Servicios" className="h-14 mb-8" />
          <p className="text-[var(--color-secondary)] text-sm leading-relaxed font-medium">
            Negocio familiar altamente especializado en soluciones de instrumentación para el sector industrial y energético en Venezuela.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:col-span-3 gap-16">
          <div>
            <h4 className="text-[var(--color-primary)] font-black mb-8 uppercase text-xs tracking-widest">Equipos</h4>
            <ul className="space-y-4 text-[var(--color-secondary)] text-[13px] font-bold">
              {['Rosemount', 'Fluke', 'Comunicadores HART', 'Repuestos'].map((e) => (
                <li key={e}><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{e}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[var(--color-primary)] font-black mb-8 uppercase text-xs tracking-widest">Servicios</h4>
            <ul className="space-y-4 text-[var(--color-secondary)] text-[13px] font-bold">
              {['Calibración', 'Instalación', 'Soporte en Campo', 'Alquiler'].map((e) => (
                <li key={e}><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{e}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-relats mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[var(--color-secondary)] text-[11px] font-bold uppercase tracking-widest">
          © 2026 C&T Servicios Industrial. Todos los derechos reservados.
        </p>
        <div className="flex gap-10 text-[var(--color-secondary)] text-[11px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Legal</a>
          <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  </div>
);

export default RelatsClone;
