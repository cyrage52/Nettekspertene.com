import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Mail, Loader2, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error for this field
    if (formErrors[id]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Navn er påkrevd";
    }
    if (!formData.email.trim()) {
      errors.email = "E-post er påkrevd";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Ugyldig e-postadresse";
    }
    if (!formData.message.trim()) {
      errors.message = "Melding er påkrevd";
    }
    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const baseUrl = import.meta.env.VITE_API_URL || "https://nettekspertene-com.onrender.com";
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Det oppstod en feil ved sending.");
      }

      setIsSuccessfullySubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      console.error("Kontaktfeil:", err);
      setSubmitError(err.message || "Kunne ikke sende henvendelsen. Vennligst sjekk nettverkstilkoblingen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSuccessState = () => {
    setIsSuccessfullySubmitted(false);
    setSubmitError(null);
  };

  return (
    <section id="kontakt" className="py-24 px-6 relative bg-gradient-to-b from-dark-bg to-[#05070A]">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-extrabold text-accent-blue uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-accent-blue animate-pulse" />
            La oss planlegge prosjektet
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
            Klar for å løfte din <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              bedrift på nett?
            </span>
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto font-normal">
            Fyll ut skjemaet nedenfor. Vi tar kontakt med deg innen 24 timer for en hyggelig og helt uforpliktende fagprat!
          </p>
        </div>

        {/* Layout: Content grid with Contact info on side + Form card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Kontaktinformasjon
              </h3>
              <p className="text-gray-400 text-sm mt-2.5 leading-relaxed">
                Vi er alltid tilgjengelige for en uformell samtale om ditt neste webløft via e-post eller kontaktskjemaet.
              </p>
            </div>

            <div className="space-y-4">
              {/* E-post card */}
              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/15 text-accent-blue flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Send e-post</span>
                  <a href="mailto:realcyrage@gmail.com" className="text-sm font-semibold text-white hover:text-accent-blue transition-colors">
                    realcyrage@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Conversion bullet indicators */}
            <div className="bg-[#0D1117] border border-white/5 p-5 rounded-2xl text-xs text-gray-400 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                <span>Vi lager en gratis prøveside</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                <span>Skriftlig og detaljert priskalkyle</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box with states */}
          <div className="lg:col-span-7 relative">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
              
              <AnimatePresence mode="wait">
                {isSuccessfullySubmitted ? (
                  /* Animated success overlay content */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-3xl border border-emerald-500/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2.5">
                      <h4 className="text-2xl font-bold text-white tracking-tight">
                        Tusen takk for henvendelsen!
                      </h4>
                      <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Vi har mottatt detaljene dine. En av våre eksperter vil gå gjennom behovene dine og kontakte deg innen 24 timer.
                      </p>
                    </div>
                    <button
                      onClick={resetSuccessState}
                      className="px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 text-xs font-bold transition-all cursor-pointer"
                    >
                      Send en ny melding
                    </button>
                  </motion.div>
                ) : (
                  /* Form Container content */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                          Ditt Navn *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-[#05070A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                            formErrors.name
                              ? "border-red-500/50 focus:ring-red-500"
                              : "border-white/5 focus:border-accent-blue focus:ring-accent-blue"
                          }`}
                          placeholder="Ola Nordmann"
                        />
                        {formErrors.name && (
                          <span className="text-[10px] text-red-400 block mt-0.5">{formErrors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                          E-postadresse *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-[#05070A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                            formErrors.email
                              ? "border-red-500/50 focus:ring-red-500"
                              : "border-white/5 focus:border-accent-blue focus:ring-accent-blue"
                          }`}
                          placeholder="ola@bedrift.no"
                        />
                        {formErrors.email && (
                          <span className="text-[10px] text-red-400 block mt-0.5">{formErrors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Company input */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                        Bedrift / Selskap
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-[#05070A] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                        placeholder="Nordmann AS"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                        Fortell om ditt prosjekt *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full bg-[#05070A] border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                          formErrors.message
                            ? "border-red-500/50 focus:ring-red-500"
                            : "border-white/5 focus:border-accent-blue focus:ring-accent-blue"
                        }`}
                        placeholder="Hei, vi trenger en nymoderne, rask nettside for bedriften vår med integrert booking og god synlighet på Google..."
                      />
                      {formErrors.message && (
                        <span className="text-[10px] text-red-400 block mt-0.5">{formErrors.message}</span>
                      )}
                    </div>

                    {/* Submit error feedback if any */}
                    {submitError && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-semibold leading-relaxed">
                        ⚠️ Hubs! {submitError}
                      </div>
                    )}

                    {/* Submit action button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-500/10 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sender forespørsel...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send forespørsel</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
