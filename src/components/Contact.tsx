import React from "react";
import { CONTACT_INFO } from "../data";
import { MapPin, Phone, Clock, MessageSquare, Instagram, Facebook } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="relative py-24 bg-gradient-to-b from-luxury-red-900 to-luxury-red-950 overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-luxury-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-luxury-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-luxury-gold-400 text-xs tracking-[0.25em] uppercase font-bold mb-3">
            <Clock className="w-4 h-4" />
            Atendimento & Localização
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Contato
          </h2>
          <p className="mt-4 text-sm sm:text-base text-luxury-gold-100/80 font-light max-w-xl mx-auto">
            Estamos prontos para atender você com toda a dedicação, exclusividade e elegância que você merece.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Cards - Column 1 */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div
              className="p-6 rounded-2xl bg-gradient-to-b from-luxury-red-950/80 to-luxury-red-950/40 border border-luxury-gold-500/10 hover:border-luxury-gold-500/20 shadow-lg flex gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-luxury-gold-500/10 flex items-center justify-center border border-luxury-gold-500/20 text-luxury-gold-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white mb-1 uppercase tracking-wider">Endereço</h4>
                <p className="text-xs sm:text-sm text-luxury-gold-100/85 font-light leading-relaxed">
                  Rua das Flores, 245 <br />
                  Jardim Bela Vista <br />
                  Campinas - SP
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="p-6 rounded-2xl bg-gradient-to-b from-luxury-red-950/80 to-luxury-red-950/40 border border-luxury-gold-500/10 hover:border-luxury-gold-500/20 shadow-lg flex gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-luxury-gold-500/10 flex items-center justify-center border border-luxury-gold-500/20 text-luxury-gold-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white mb-1 uppercase tracking-wider">Telefone & WhatsApp</h4>
                <p className="text-xs sm:text-sm text-luxury-gold-100/85 font-light mb-1">
                  {CONTACT_INFO.phone}
                </p>
                <p className="text-[10px] text-luxury-gold-400 font-light">
                  Atendimento telefônico e digital ágil
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="p-6 rounded-2xl bg-gradient-to-b from-luxury-red-950/80 to-luxury-red-950/40 border border-luxury-gold-500/10 hover:border-luxury-gold-500/20 shadow-lg flex gap-4"
            >
              <div className="w-11 h-11 rounded-full bg-luxury-gold-500/10 flex items-center justify-center border border-luxury-gold-500/20 text-luxury-gold-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif text-sm font-semibold text-white mb-1 uppercase tracking-wider">Horário de Funcionamento</h4>
                <div className="space-y-1">
                  {CONTACT_INFO.hours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-xs text-luxury-gold-100/85 font-light">
                      <span>{item.days}:</span>
                      <span className="font-semibold text-white">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Button */}
            <a
              id="whatsapp-contact-link"
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-3 shadow-lg transition-colors duration-300 font-sans text-xs uppercase tracking-widest font-bold cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white stroke-[1.5]" />
              Falar no WhatsApp
            </a>

          </div>

          {/* Illustrative Styled Map - Column 2 */}
          <div className="lg:col-span-7 h-full min-h-[380px]">
            <div
              className="w-full h-full min-h-[380px] rounded-3xl border border-luxury-gold-500/20 bg-luxury-red-950/60 backdrop-blur-sm p-6 relative overflow-hidden flex flex-col justify-between shadow-[0_15px_40px_rgba(46,5,10,0.5)]"
            >
              {/* Outer corner ornaments */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-luxury-gold-500/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-luxury-gold-500/30" />

              {/* Title inside map box */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">Mapa Ilustrativo de Acesso</h4>
                  <p className="text-[10px] text-luxury-gold-400 uppercase tracking-widest font-medium mt-0.5">Jardim Bela Vista &bull; Campinas</p>
                </div>
                <span className="text-[9px] uppercase tracking-wider bg-luxury-gold-500/10 border border-luxury-gold-500/20 text-luxury-gold-300 px-2 py-0.5 rounded-full">
                  Fácil Estacionamento
                </span>
              </div>

              {/* Vector Illustrative Map Canvas */}
              <div className="flex-1 my-4 bg-luxury-red-950/80 rounded-2xl border border-luxury-gold-500/10 relative overflow-hidden flex items-center justify-center shadow-inner">
                {/* SVG Abstract Map representing Campinas streets */}
                <svg viewBox="0 0 400 200" className="w-full h-full opacity-35" fill="none" stroke="currentColor">
                  {/* Grid Lines */}
                  <line x1="20" y1="0" x2="20" y2="200" stroke="#b38b3c" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="120" y1="0" x2="120" y2="200" stroke="#b38b3c" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="220" y1="0" x2="220" y2="200" stroke="#b38b3c" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="320" y1="0" x2="320" y2="200" stroke="#b38b3c" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Streets */}
                  {/* Diagonal Av. Norte-Sul */}
                  <path d="M-50,220 L450,-20" stroke="#b38b3c" strokeWidth="8" strokeLinecap="round" />
                  <path d="M-50,220 L450,-20" stroke="#422e14" strokeWidth="6" strokeLinecap="round" />
                  <text x="320" y="50" fill="#dac184" fontSize="6" transform="rotate(-23, 320, 50)" className="font-mono font-bold uppercase tracking-wider">Av. José de Souza Campos</text>
                  
                  {/* Rua das Flores */}
                  <path d="M10,20 L390,190" stroke="#b38b3c" strokeWidth="5" strokeLinecap="round" />
                  <text x="50" y="45" fill="#dac184" fontSize="6" transform="rotate(23, 50, 45)" className="font-mono font-bold uppercase tracking-wider">Rua das Flores</text>

                  {/* Secondary Streets */}
                  <path d="M120,-10 L150,210" stroke="#b38b3c" strokeWidth="3" strokeLinecap="round" />
                  <path d="M260,-10 L220,210" stroke="#b38b3c" strokeWidth="3" strokeLinecap="round" />
                  <path d="M30,120 L370,50" stroke="#b38b3c" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Blocks shading */}
                  <rect x="50" y="80" width="40" height="30" rx="3" fill="#b38b3c" className="opacity-10" />
                  <rect x="250" y="100" width="50" height="40" rx="3" fill="#b38b3c" className="opacity-10" />
                  <rect x="150" y="20" width="60" height="40" rx="3" fill="#b38b3c" className="opacity-10" />
                </svg>

                {/* Static Location Indicator without blinking */}
                <div className="absolute top-[110px] left-[215px] z-10 flex items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-luxury-gold-500 to-luxury-gold-300 border-2 border-luxury-red-950 flex items-center justify-center shadow-lg relative">
                    <MapPin className="w-3 h-3 text-luxury-red-950 stroke-[2.5]" />
                  </div>
                </div>

                {/* Static Map Label Tag */}
                <div className="absolute top-[75px] left-[155px] bg-luxury-red-950 border border-luxury-gold-400/40 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-white">ÉCLAT CLINIC</span>
                </div>
              </div>

              {/* Footer details inside map box */}
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-[10px] text-luxury-gold-100/70 border-t border-luxury-gold-500/10 pt-4">
                <span>Ref: Próximo à Av. José de Souza Campos (Norte-Sul)</span>
                <div className="flex items-center gap-3">
                  <a href={CONTACT_INFO.whatsappLink} className="hover:text-white hover:underline transition-colors">Ver no Google Maps</a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
