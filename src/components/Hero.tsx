import React from "react";
import { ChevronDown } from "lucide-react";

const heroImg = "/src/assets/images/eclat_clinic_hero_bg_1784295484294.jpg";

interface HeroProps {
  onActionClick: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image without Animations & Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Éclat Beauty Clinic Premium Interior"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered Deep Red & Golden Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-red-950/95 via-luxury-red-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-red-950 via-transparent to-luxury-red-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#2e050a_95%)] opacity-70" />
      </div>

      {/* Decorative Golden Ambient Circles */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-luxury-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 rounded-full bg-luxury-gold-500/5 blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-left w-full">
        <div className="max-w-3xl">
          
          {/* Tagline / Subtitle */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-luxury-gold-500/10 border border-luxury-gold-500/30 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-luxury-gold-300">
              Estética Avançada de Alto Padrão
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
            Realce sua beleza, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-200 via-luxury-gold-400 to-luxury-gold-100">
              cuide de você
            </span>{" "}
            e revele sua melhor versão.
          </h1>

          {/* Descriptive Text */}
          <p className="text-sm sm:text-base md:text-lg text-luxury-gold-100/85 leading-relaxed mb-10 max-w-2xl font-light">
            Na Éclat Beauty Clinic, oferecemos tratamentos estéticos personalizados para valorizar sua beleza natural, com atendimento humanizado, técnicas modernas e um ambiente exclusivo preparado para você.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              id="hero-cta-booking"
              onClick={() => onActionClick("agendamento")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-luxury-gold-500 via-luxury-gold-400 to-luxury-gold-600 hover:from-white hover:to-luxury-gold-200 text-luxury-red-950 font-sans text-sm uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(179,139,60,0.3)] hover:shadow-[0_4px_35px_rgba(255,255,255,0.2)] text-center cursor-pointer"
            >
              Agende sua avaliação
            </button>

            <button
              id="hero-cta-procedures"
              onClick={() => onActionClick("procedimentos")}
              className="px-8 py-4 rounded-full border border-luxury-gold-500/60 bg-luxury-red-950/40 hover:bg-luxury-gold-500/10 text-luxury-gold-300 hover:text-white font-sans text-sm uppercase tracking-widest font-semibold transition-all duration-300 text-center cursor-pointer"
            >
              Conhecer Procedimentos
            </button>
          </div>

        </div>
      </div>

      {/* Floating Scroll Guide without bouncing */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold-400/80 font-medium">
          Descubra a Éclat
        </span>
        <ChevronDown className="w-5 h-5 text-luxury-gold-400" />
      </div>

      {/* Luxury Border Accent (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold-400/30 to-transparent" />
    </section>
  );
};
