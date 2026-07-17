import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Procedures } from "./components/Procedures";
import { Testimonials } from "./components/Testimonials";
import { BookingForm } from "./components/BookingForm";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "./data";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "booking">("home");
  const [activeSection, setActiveSection] = useState("inicio");
  const [selectedProcedureId, setSelectedProcedureId] = useState("");

  // Smooth scroll and page navigation helper
  const handleNavigate = (targetId: string) => {
    if (targetId === "agendamento") {
      setCurrentPage("booking");
      setActiveSection("agendamento");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentPage("home");
      setActiveSection(targetId);

      // Delay to allow DOM rendering before smooth scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  // Pre-select procedure from the list and open booking page
  const handleSelectProcedure = (procedureId: string) => {
    setSelectedProcedureId(procedureId);
    setCurrentPage("booking");
    setActiveSection("agendamento");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResetProcedure = () => {
    setSelectedProcedureId("");
  };

  // Track scroll position to update current active section in nav header (only on home page)
  useEffect(() => {
    if (currentPage !== "home") return;

    const handleScroll = () => {
      const sections = ["inicio", "procedimentos", "sobre-nos", "contato"];
      const scrollPosition = window.scrollY + 150; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  return (
    <div id="eclat-app" className="relative min-h-screen bg-luxury-red-950 font-sans antialiased text-luxury-gold-50 overflow-x-hidden selection:bg-luxury-gold-500 selection:text-luxury-red-950">
      
      {/* Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections */}
      <main id="app-main-content">
        
        {currentPage === "home" ? (
          <>
            {/* Hero Banner Section */}
            <Hero onActionClick={handleNavigate} />

            {/* Brand Mission & About Us Section */}
            <AboutUs />

            {/* Procedures Grid Section */}
            <Procedures onSelectProcedure={handleSelectProcedure} />

            {/* Customer Testimonials Section */}
            <Testimonials />

            {/* Contact details, schedules and Interactive Vector Map Section */}
            <Contact />
          </>
        ) : (
          <div className="pt-28 pb-12">
            {/* Standalone Online Appointment Booking Page */}
            <BookingForm
              selectedProcedureId={selectedProcedureId}
              onResetProcedure={handleResetProcedure}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating WhatsApp Icon for high-end customer conversion */}
      <a
        id="floating-whatsapp-widget"
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title="Fale conosco no WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white stroke-[1.5]" />
        
        {/* Interactive hover tooltip */}
        <span className="absolute right-14 bg-luxury-red-950 border border-luxury-gold-500/20 text-luxury-gold-100 text-[10px] tracking-wider uppercase font-bold py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
          Atendimento Exclusivo
        </span>
      </a>

    </div>
  );
}
