import React from "react";
import { RoseLogo } from "./RoseLogo";
import { CONTACT_INFO } from "../data";
import { Instagram, Facebook, ArrowUp, Calendar, Heart } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", id: "inicio" },
    { label: "Procedimentos", id: "procedimentos" },
    { label: "Sobre Nós", id: "sobre-nos" },
    { label: "Agendamento", id: "agendamento" },
    { label: "Contato", id: "contato" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-luxury-red-950 border-t border-luxury-gold-500/20 pt-16 pb-8 overflow-hidden">
      
      {/* Visual Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-luxury-gold-400 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-luxury-gold-500/10">
          
          {/* Brand & Mission column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <RoseLogo size={42} />
              <div>
                <span className="block font-serif text-xl md:text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-100 via-luxury-gold-300 to-luxury-gold-100">
                  ÉCLAT
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-luxury-gold-400 font-medium uppercase -mt-0.5">
                  Beauty Clinic
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-luxury-gold-100/70 leading-relaxed font-light max-w-sm">
              Tratamentos estéticos de alto padrão desenhados de forma personalizada para destacar o melhor de sua essência, com segurança, luxo e resultados de extrema naturalidade.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-gold-500/10 border border-luxury-gold-500/20 flex items-center justify-center text-luxury-gold-300 hover:bg-luxury-gold-500 hover:text-luxury-red-950 transition-all duration-300"
                aria-label="Acessar Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-gold-500/10 border border-luxury-gold-500/20 flex items-center justify-center text-luxury-gold-300 hover:bg-luxury-gold-500 hover:text-luxury-red-950 transition-all duration-300"
                aria-label="Acessar Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-xs sm:text-sm text-luxury-gold-100/70 hover:text-luxury-gold-300 transition-colors duration-200 cursor-pointer text-left block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Direct Access Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">Contato Direto</h4>
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-luxury-gold-100/70 leading-relaxed font-light">
                {CONTACT_INFO.address}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Telefone: <span className="text-luxury-gold-300 font-light">{CONTACT_INFO.phone}</span>
              </p>
              
              {/* Floating Trigger to schedule */}
              <button
                id="footer-book-direct"
                onClick={() => onNavigate("agendamento")}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-luxury-gold-400 bg-transparent hover:bg-luxury-gold-500 text-luxury-gold-100 hover:text-luxury-red-950 font-sans text-[10px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Agendar via Site
              </button>
            </div>
          </div>

        </div>

        {/* Lower footer row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-[11px] text-luxury-gold-100/50 font-light text-center md:text-left">
            &copy; {currentYear} Éclat Beauty Clinic. Todos os direitos reservados. CNPJ Fictício.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-[10px] text-luxury-gold-100/40 flex items-center gap-1 font-light uppercase tracking-wider">
              Feito com <Heart className="w-3 h-3 text-luxury-red-500 fill-luxury-red-500" /> para realçar sua essência
            </p>

            {/* Back to top scroll button */}
            <button
              onClick={handleScrollToTop}
              className="w-8 h-8 rounded-full border border-luxury-gold-500/20 bg-luxury-red-950/40 text-luxury-gold-400 hover:text-white hover:border-luxury-gold-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg"
              title="Voltar ao início"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
