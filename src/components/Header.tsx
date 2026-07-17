import React, { useState, useEffect } from "react";
import { RoseLogo } from "./RoseLogo";
import { Menu, X, Calendar } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Procedimentos", id: "procedimentos" },
    { label: "Sobre Nós", id: "sobre-nos" },
    { label: "Agendamento", id: "agendamento" },
    { label: "Contato", id: "contato" },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-luxury-red-950/95 backdrop-blur-md border-b border-luxury-gold-500/20 py-3 shadow-[0_4px_30px_rgba(46,5,10,0.8)]"
          : "bg-gradient-to-b from-luxury-red-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <button
            id="brand-logo-btn"
            onClick={() => handleItemClick("inicio")}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <RoseLogo size={38} />
            <div className="text-left">
              <span className="block font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold-200 via-luxury-gold-400 to-luxury-gold-200 group-hover:from-white group-hover:to-luxury-gold-300 transition-colors duration-500">
                ÉCLAT
              </span>
              <span className="block text-[8px] sm:text-[9px] tracking-[0.25em] text-luxury-gold-400 font-medium uppercase -mt-1">
                Beauty Clinic
              </span>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 relative py-1 cursor-pointer hover:text-luxury-gold-300 ${
                  activeSection === item.id
                    ? "text-luxury-gold-300 font-semibold"
                    : "text-luxury-gold-100/80"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-300 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Button (Desktop Only) */}
          <div className="hidden md:block">
            <button
              id="header-booking-btn"
              onClick={() => handleItemClick("agendamento")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-luxury-gold-400 bg-transparent hover:bg-luxury-gold-500 text-luxury-gold-100 hover:text-luxury-red-950 font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_10px_rgba(179,139,60,0.1)] hover:shadow-[0_0_20px_rgba(179,139,60,0.3)] cursor-pointer"
            >
              <Calendar className="w-4.5 h-4.5" />
              Agendar Avaliação
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-luxury-gold-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-luxury-red-950 border-b border-luxury-gold-500/20 py-4 px-6 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                id={`mobile-nav-${item.id}`}
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-left font-sans text-sm uppercase tracking-widest font-medium py-2.5 border-b border-luxury-gold-500/10 last:border-b-0 cursor-pointer ${
                  activeSection === item.id ? "text-luxury-gold-300 font-semibold" : "text-luxury-gold-100/80"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-nav-booking-btn"
              onClick={() => handleItemClick("agendamento")}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-luxury-gold-500 to-luxury-gold-400 text-luxury-red-950 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Agendar Avaliação
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
