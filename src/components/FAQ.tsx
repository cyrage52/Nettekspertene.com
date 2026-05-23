import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "../data";
import { ChevronDown, HelpCircle, MessagesSquare } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("pris");
  const [activeTab, setActiveTab] = useState<string>("Alle");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = ["Alle", "Pris & Prosess", "Bruk & Redigering", "Sikkerhet & Support"];

  const filteredFAQs = activeTab === "Alle"
    ? faqData
    : faqData.filter(faq => faq.category === activeTab);

  return (
    <section id="faq" className="py-24 bg-[#05070A] border-y border-white/5 px-6 relative">
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-extrabold text-accent-blue uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-accent-blue" />
            Ofte stilte spørsmål
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Noe du lurer på om webløsninger?
          </p>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto font-normal">
            Her har vi samlet vanlige spørsmål vi får fra bedrifter som ønsker nye, raske nettsider. Finner du ikke svaret her? Ta gjerne kontakt!
          </p>
        </div>

        {/* Category filtering pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setOpenId(null); // clear open states
              }}
              className={`px-4.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? "bg-accent-blue text-white shadow-md shadow-accent-blue/10"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Collapsible Accordion Grid */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "bg-dark-card border-accent-blue/35 shadow-lg shadow-accent-blue/5"
                      : "bg-dark-card border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Collapsible Trigger Action Header */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="text-base font-bold text-white tracking-tight pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen ? "bg-accent-blue/15 text-accent-blue" : "bg-white/5 text-gray-500"
                      }`}
                    >
                      <ChevronDown className="w-4.5 h-4.5" />
                    </motion.div>
                  </button>

                  {/* Body Content Details */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-white/5 text-gray-300 text-sm leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 text-center bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
              <MessagesSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Har du et annet spørsmål?</h4>
              <p className="text-xs text-gray-400">Vi hjelper deg gjerne med å svare på spesifikke funksjoner eller integrasjoner.</p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("kontakt");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-white/5 text-white hover:bg-white/10 font-bold text-xs transition-all cursor-pointer border border-white/5"
          >
            Spør oss i dag
          </button>
        </div>

      </div>
    </section>
  );
}
