import React from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="relative py-24 bg-gradient-to-b from-luxury-red-950 to-luxury-red-900 overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-luxury-gold-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-luxury-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-luxury-gold-400 text-xs tracking-[0.25em] uppercase font-bold mb-3">
            <Star className="w-3.5 h-3.5 fill-luxury-gold-400/20 text-luxury-gold-400" />
            Experiências Éclat
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Depoimentos de Clientes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-luxury-gold-100/80 font-light max-w-xl mx-auto">
            A satisfação e a transformação contadas por quem vivencia nosso cuidado de alto padrão diariamente.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-luxury-red-950/70 to-luxury-red-950/30 border border-luxury-gold-500/10 backdrop-blur-sm shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:border-luxury-gold-500/30 transition-colors duration-300 flex flex-col justify-between"
            >
              {/* Premium Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-luxury-gold-500/10">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                {/* Golden Stars Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-luxury-gold-500 text-luxury-gold-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-luxury-gold-50/90 leading-relaxed font-light italic mb-8 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-luxury-gold-500/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">
                     {testimonial.author}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold-400 font-medium mt-0.5">
                    {testimonial.city}
                  </p>
                </div>
                {/* Delicate verification badge */}
                <span className="text-[9px] uppercase tracking-wider bg-luxury-gold-500/10 border border-luxury-gold-500/20 text-luxury-gold-300 px-2.5 py-1 rounded-full font-medium">
                  Cliente Verificada
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
