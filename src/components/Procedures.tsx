import React, { useState, useMemo } from "react";
import { PROCEDURES } from "../data";
import { Clock, Check, Search, Award, SlidersHorizontal } from "lucide-react";

interface ProceduresProps {
  onSelectProcedure: (procedureId: string) => void;
}

type FilterCategory = "all" | "facial" | "corporal";

export const Procedures: React.FC<ProceduresProps> = ({ onSelectProcedure }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const facialIds = [
    "limpeza-pele",
    "botox-facial",
    "preenchimento-facial",
    "harmonizacao-facial",
    "peeling-facial",
    "microagulhamento",
    "design-sobrancelhas",
    "skinbooster"
  ];

  const filteredProcedures = useMemo(() => {
    return PROCEDURES.filter((proc) => {
      // Category filter
      if (activeFilter === "facial" && !facialIds.includes(proc.id)) return false;
      if (activeFilter === "corporal" && facialIds.includes(proc.id)) return false;

      // Search query filter
      const query = searchQuery.toLowerCase();
      return (
        proc.name.toLowerCase().includes(query) ||
        proc.description.toLowerCase().includes(query) ||
        proc.benefits.some(b => b.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, activeFilter]);

  return (
    <section id="procedimentos" className="relative py-24 bg-gradient-to-b from-luxury-red-900 to-luxury-red-950 overflow-hidden">
      
      {/* Golden Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-luxury-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-luxury-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-luxury-gold-400 text-xs tracking-[0.25em] uppercase font-bold mb-3">
            <Award className="w-4 h-4" />
            Tratamentos Exclusivos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Procedimentos Estéticos
          </h2>
          <p className="mt-4 text-sm sm:text-base text-luxury-gold-100/80 font-light max-w-xl mx-auto">
            Sua jornada de autocuidado com o que há de mais refinado e seguro em estética avançada.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row gap-6 items-stretch md:items-center justify-between mb-12 bg-luxury-red-950/40 p-4 sm:p-6 rounded-2xl border border-luxury-gold-500/10 backdrop-blur-sm shadow-xl">
          
          {/* Tabs for filters */}
          <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-luxury-gold-400 hidden sm:inline" />
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-400 text-luxury-red-950 shadow-[0_2px_10px_rgba(179,139,60,0.25)]"
                  : "bg-luxury-red-950 text-luxury-gold-300/80 border border-luxury-gold-500/20 hover:text-white hover:border-luxury-gold-500/50"
              }`}
            >
              Todos ({PROCEDURES.length})
            </button>
            <button
              onClick={() => setActiveFilter("facial")}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === "facial"
                  ? "bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-400 text-luxury-red-950 shadow-[0_2px_10px_rgba(179,139,60,0.25)]"
                  : "bg-luxury-red-950 text-luxury-gold-300/80 border border-luxury-gold-500/20 hover:text-white hover:border-luxury-gold-500/50"
              }`}
            >
              Faciais ({facialIds.length})
            </button>
            <button
              onClick={() => setActiveFilter("corporal")}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === "corporal"
                  ? "bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-400 text-luxury-red-950 shadow-[0_2px_10px_rgba(179,139,60,0.25)]"
                  : "bg-luxury-red-950 text-luxury-gold-300/80 border border-luxury-gold-500/20 hover:text-white hover:border-luxury-gold-500/50"
              }`}
            >
              Corporais ({PROCEDURES.length - facialIds.length})
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className="h-4 w-4 text-luxury-gold-400" />
            </span>
            <input
              type="text"
              placeholder="Buscar procedimento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-luxury-red-950 border border-luxury-gold-500/20 text-luxury-gold-50 text-sm placeholder-luxury-gold-300/40 focus:outline-none focus:border-luxury-gold-400 focus:ring-1 focus:ring-luxury-gold-400 transition-all duration-300 shadow-inner"
            />
          </div>

        </div>

        {/* Procedures Grid */}
        {filteredProcedures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProcedures.map((proc) => (
              <div
                key={proc.id}
                className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-luxury-red-950/80 to-luxury-red-950/40 border border-luxury-gold-500/10 hover:border-luxury-gold-400/40 transition-colors duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(179,139,60,0.15)] relative overflow-hidden"
              >
                {/* Thin golden top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <div>
                  
                  {/* Header / Title */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-luxury-gold-300 transition-colors duration-300">
                      {proc.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold-500/10 border border-luxury-gold-500/20 text-luxury-gold-400 font-sans text-[10px] uppercase tracking-widest font-semibold shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {proc.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-luxury-gold-100/75 leading-relaxed font-light mb-6">
                    {proc.description}
                  </p>

                  {/* Benefits Bullet Points */}
                  <div className="mb-8">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-luxury-gold-400 font-bold mb-3">
                      Benefícios Exclusivos:
                    </span>
                    <ul className="space-y-2">
                      {proc.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2 text-xs text-luxury-gold-50/90 font-light">
                          <span className="w-4.5 h-4.5 rounded-full bg-luxury-gold-500/10 flex items-center justify-center border border-luxury-gold-500/20 shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-luxury-gold-400" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Booking Button */}
                <button
                  id={`book-btn-${proc.id}`}
                  onClick={() => onSelectProcedure(proc.id)}
                  className="w-full py-3.5 rounded-xl border border-luxury-gold-500/40 bg-transparent hover:bg-gradient-to-r hover:from-luxury-gold-500 hover:to-luxury-gold-400 text-luxury-gold-300 hover:text-luxury-red-950 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 text-center cursor-pointer"
                >
                  Agendar agora
                </button>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-luxury-red-950/20 border border-luxury-gold-500/10 rounded-2xl">
            <p className="text-luxury-gold-300 text-sm font-light">
              Nenhum procedimento encontrado para os critérios de busca.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className="mt-4 px-6 py-2 rounded-full border border-luxury-gold-500 text-luxury-gold-300 text-xs font-semibold hover:bg-luxury-gold-500/10 transition-colors cursor-pointer"
            >
              Ver todos os procedimentos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
