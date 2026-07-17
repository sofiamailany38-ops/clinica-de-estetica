import React, { useState, useEffect } from "react";
import { PROCEDURES } from "../data";
import { CalendarCheck, User, Phone, Mail, MapPin, Calendar, Clock, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

interface BookingFormProps {
  selectedProcedureId?: string;
  onResetProcedure?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedProcedureId = "",
  onResetProcedure,
}) => {
  // Form State
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [procedureId, setProcedureId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [observations, setObservations] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync selected procedure from parent component click
  useEffect(() => {
    if (selectedProcedureId) {
      setProcedureId(selectedProcedureId);
    }
  }, [selectedProcedureId]);

  // Mask Phone: (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setPhone(value);
  };

  // Basic Form Validation
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = "Nome completo é obrigatório";
    if (!birthDate) tempErrors.birthDate = "Data de nascimento é obrigatória";
    if (!phone) {
      tempErrors.phone = "Telefone é obrigatório";
    } else if (phone.replace(/\D/g, "").length < 10) {
      tempErrors.phone = "Insira um telefone válido com DDD";
    }
    if (!email) {
      tempErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "E-mail inválido";
    }
    if (!city.trim()) tempErrors.city = "Cidade é obrigatória";
    if (!procedureId) tempErrors.procedureId = "Selecione um procedimento";
    if (!date) tempErrors.date = "Selecione uma data";
    if (!time) tempErrors.time = "Selecione um horário";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury API call or processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean form state
      setName("");
      setBirthDate("");
      setPhone("");
      setEmail("");
      setCity("");
      setProcedureId("");
      setDate("");
      setTime("");
      setObservations("");
      if (onResetProcedure) onResetProcedure();
    }, 1500);
  };

  return (
    <section id="agendamento" className="relative py-24 bg-gradient-to-b from-luxury-red-950 to-luxury-red-900 overflow-hidden">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-luxury-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-luxury-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 text-luxury-gold-400 text-xs tracking-[0.25em] uppercase font-bold mb-3">
            <CalendarCheck className="w-4 h-4" />
            Sua Experiência Personalizada
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Agendamento Online
          </h2>
          <p className="mt-4 text-sm sm:text-base text-luxury-gold-100/80 font-light max-w-xl mx-auto">
            Reserve o seu horário com praticidade. Escolha o seu procedimento e preencha seus dados para iniciarmos o seu atendimento exclusivo.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Content Box */}
        <div className="relative border border-luxury-gold-500/20 rounded-3xl overflow-hidden bg-gradient-to-br from-luxury-red-950/90 to-luxury-red-950/50 backdrop-blur-md shadow-[0_20px_50px_rgba(46,5,10,0.6)]">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-luxury-gold-500/30" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-luxury-gold-500/30" />

          {!isSuccess ? (
            <form
              id="booking-form-element"
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 lg:p-12 space-y-8"
            >
              
              {/* DADOS PESSOAIS */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-luxury-gold-300 pb-3 border-b border-luxury-gold-500/20 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-luxury-gold-400" />
                  1. Seus Dados Pessoais
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Digite seu nome completo"
                        className={`w-full bg-luxury-red-950/80 border ${
                          errors.name ? "border-red-500/80" : "border-luxury-gold-500/20"
                        } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 placeholder-luxury-gold-300/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Birthdate */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Data de Nascimento
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className={`w-full bg-luxury-red-950/80 border ${
                        errors.birthDate ? "border-red-500/80" : "border-luxury-gold-500/20"
                      } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all`}
                    />
                    {errors.birthDate && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.birthDate}
                      </p>
                    )}
                  </div>

                  {/* Phone / Whatsapp */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Telefone / WhatsApp
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="(19) 99999-8888"
                        className={`w-full bg-luxury-red-950/80 border ${
                          errors.phone ? "border-red-500/80" : "border-luxury-gold-500/20"
                        } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 placeholder-luxury-gold-300/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu.email@dominio.com"
                      className={`w-full bg-luxury-red-950/80 border ${
                        errors.email ? "border-red-500/80" : "border-luxury-gold-500/20"
                      } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 placeholder-luxury-gold-300/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Cidade */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Campinas - SP"
                      className={`w-full bg-luxury-red-950/80 border ${
                        errors.city ? "border-red-500/80" : "border-luxury-gold-500/20"
                      } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 placeholder-luxury-gold-300/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all`}
                    />
                    {errors.city && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.city}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* DETALHES DO PROCEDIMENTO */}
              <div>
                <h3 className="font-serif text-lg font-semibold text-luxury-gold-300 pb-3 border-b border-luxury-gold-500/20 mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-luxury-gold-400" />
                  2. Escolha o Procedimento & Data
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Select Procedure */}
                  <div className="space-y-1.5 md:col-span-3">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Procedimento Desejado
                    </label>
                    <select
                      value={procedureId}
                      onChange={(e) => setProcedureId(e.target.value)}
                      className={`w-full bg-luxury-red-950/80 border ${
                        errors.procedureId ? "border-red-500/80" : "border-luxury-gold-500/20"
                      } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all cursor-pointer`}
                    >
                      <option value="">-- Selecione o tratamento --</option>
                      {PROCEDURES.map((proc) => (
                        <option key={proc.id} value={proc.id}>
                          {proc.name} ({proc.duration})
                        </option>
                      ))}
                    </select>
                    {errors.procedureId && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.procedureId}
                      </p>
                    )}
                  </div>

                  {/* Desired Date */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Data Desejada
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={`w-full bg-luxury-red-950/80 border ${
                        errors.date ? "border-red-500/80" : "border-luxury-gold-500/20"
                      } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all`}
                    />
                    {errors.date && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.date}
                      </p>
                    )}
                  </div>

                  {/* Desired Time */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Horário Desejado
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={`w-full bg-luxury-red-950/80 border ${
                        errors.time ? "border-red-500/80" : "border-luxury-gold-500/20"
                      } focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all cursor-pointer`}
                    >
                      <option value="">-- Horário --</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                    {errors.time && (
                      <p className="text-red-400 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Observations */}
                  <div className="space-y-1.5 md:col-span-3">
                    <label className="block text-xs uppercase tracking-wider text-luxury-gold-100 font-medium">
                      Observações / Preferências (Opcional)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        value={observations}
                        onChange={(e) => setObservations(e.target.value)}
                        placeholder="Caso possua alguma restrição, alergia ou queira descrever seu objetivo com o tratamento..."
                        className="w-full bg-luxury-red-950/80 border border-luxury-gold-500/20 focus:border-luxury-gold-400 rounded-xl px-4 py-3 text-sm text-luxury-gold-50 placeholder-luxury-gold-300/30 focus:outline-none focus:ring-1 focus:ring-luxury-gold-400 transition-all resize-none"
                      />
                      <MessageSquare className="absolute right-3.5 bottom-3.5 w-4 h-4 text-luxury-gold-400/30" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  id="submit-booking-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-luxury-gold-500 via-luxury-gold-400 to-luxury-gold-600 hover:from-white hover:to-luxury-gold-200 disabled:from-luxury-gold-800 disabled:to-luxury-gold-700 text-luxury-red-950 font-sans text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_4px_25px_rgba(179,139,60,0.3)] hover:shadow-[0_4px_35px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-luxury-red-950" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Processando agendamento...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirmar Agendamento</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : (
            <div
              id="booking-success-view"
              className="p-10 sm:p-16 text-center space-y-6 flex flex-col items-center justify-center"
            >
              
              {/* Success Icons & Sparkles */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-luxury-gold-500 to-luxury-gold-300 flex items-center justify-center shadow-lg relative z-10 border-2 border-luxury-red-950">
                  <CheckCircle className="w-12 h-12 text-luxury-red-950 stroke-[2]" />
                </div>
              </div>

              {/* Success Tag */}
              <div className="inline-flex items-center gap-1 text-luxury-gold-400 text-[10px] uppercase tracking-[0.3em] font-bold">
                <CalendarCheck className="w-4.5 h-4.5" />
                Solicitação Recebida
              </div>

              {/* Primary Message */}
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Agendamento Enviado!
              </h3>

              {/* Success feedback text */}
              <p className="text-sm sm:text-base text-luxury-gold-100/90 max-w-lg leading-relaxed font-light">
                Seu agendamento foi recebido com sucesso! Nossa equipe entrará em contato para confirmar seu horário.
              </p>

              {/* Luxury gold separator */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold-400 to-transparent" />

              <div className="text-xs text-luxury-gold-400 font-sans tracking-wide uppercase font-light">
                Éclat Beauty Clinic &bull; Campinas - SP
              </div>

              {/* Schedule Another Button */}
              <button
                id="book-another-btn"
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-8 py-3 rounded-full border border-luxury-gold-500 text-luxury-gold-300 hover:bg-luxury-gold-500 hover:text-luxury-red-950 text-xs tracking-widest uppercase font-semibold transition-all cursor-pointer"
              >
                Novo Agendamento
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
