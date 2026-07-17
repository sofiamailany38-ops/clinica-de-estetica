import React from "react";
import { UserCheck, Award, Smile, ShieldCheck, Heart } from "lucide-react";

export const AboutUs: React.FC = () => {
  const highlights = [
    {
      icon: UserCheck,
      title: "Atendimento individualizado",
      desc: "Tratamentos planejados sob medida, respeitando sua anatomia e objetivos pessoais de beleza."
    },
    {
      icon: Award,
      title: "Profissionais especializados",
      desc: "Corpo clínico altamente qualificado, em constante atualização com as melhores técnicas mundiais."
    },
    {
      icon: Smile,
      title: "Ambiente confortável",
      desc: "Um espaço luxuoso, acolhedor e privativo, projetado para proporcionar o seu máximo relaxamento."
    },
    {
      icon: Heart,
      title: "Resultados naturais",
      desc: "Nossa filosofia preza por realçar sua beleza sem exageros, mantendo sua essência única."
    },
    {
      icon: ShieldCheck,
      title: "Segurança e qualidade",
      desc: "Uso exclusivo de produtos de marcas premium consolidadas e protocolos de biossegurança rigorosos."
    }
  ];

  return (
    <section id="sobre-nos" className="relative py-24 bg-gradient-to-b from-luxury-red-950 to-luxury-red-900 overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-luxury-gold-500/5 blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-luxury-gold-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-luxury-gold-400 text-xs tracking-[0.25em] uppercase font-bold mb-3">
            <Heart className="w-3.5 h-3.5 fill-luxury-gold-400/20" />
            Nossa Essência
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Sobre Nós
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Brand Philosophy Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5 text-left">
            <span className="block text-xs uppercase tracking-[0.2em] text-luxury-gold-400 font-semibold mb-2">
              A ARTE DO CUIDADO
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug mb-6">
              Onde a ciência estética encontra o luxo e a sensibilidade
            </h3>
            <p className="text-luxury-gold-100/90 leading-relaxed font-light mb-4">
              Na Éclat Beauty Clinic, acreditamos que cada pessoa possui uma beleza única. Nossa missão é proporcionar experiências de cuidado, autoestima e transformação através de procedimentos personalizados.
            </p>
            <p className="text-luxury-gold-100/75 leading-relaxed font-light text-sm">
              Cada tratamento em nossa clínica de Campinas é conduzido como uma obra de arte: com precisão, suavidade e o olhar atento de especialistas focados em resultados refinados e naturais.
            </p>
          </div>

          <div className="lg:col-span-7 relative">
            {/* Visual Frame of Luxury and High-End Aesthetic */}
            <div className="relative border border-luxury-gold-500/20 rounded-2xl p-6 sm:p-10 bg-luxury-red-950/40 backdrop-blur-sm shadow-[0_15px_50px_rgba(46,5,10,0.5)]">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-luxury-gold-500" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-luxury-gold-500" />
              
              <blockquote className="font-serif italic text-lg sm:text-xl text-luxury-gold-200/90 text-center leading-relaxed">
                &ldquo;A beleza que nos inspira é aquela que vem de dentro, refletida em uma pele saudável, contornos harmoniosos e no brilho genuíno de quem se cuida e se valoriza.&rdquo;
              </blockquote>
              <div className="mt-4 text-center">
                <div className="text-xs uppercase tracking-widest text-luxury-gold-400 font-semibold">Direção Médica Éclat</div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-luxury-red-950/60 to-luxury-red-950/20 border border-luxury-gold-500/10 hover:border-luxury-gold-500/30 transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(179,139,60,0.1)]"
              >
                {/* Icon wrapper */}
                <div className="w-14 h-14 rounded-full bg-luxury-gold-500/10 flex items-center justify-center border border-luxury-gold-500/20 text-luxury-gold-400 mb-5 group-hover:bg-luxury-gold-500 group-hover:text-luxury-red-950 transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h4 className="font-serif text-base font-semibold text-white group-hover:text-luxury-gold-300 transition-colors duration-300 mb-2">
                  {item.title}
                </h4>
                
                <p className="text-xs text-luxury-gold-100/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
