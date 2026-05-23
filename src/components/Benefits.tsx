import { ComponentType } from "react";
import { motion } from "motion/react";
import { benefitsData } from "../data";
import { Compass, Zap, Smartphone, Sliders, Headphones, Sparkles } from "lucide-react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Compass,
  Zap,
  Smartphone,
  Sliders,
  Headphones,
  Sparkles,
};

export default function Benefits() {
  return (
    <section id="fordeler" className="py-24 bg-[#05070A] border-y border-white/5 px-6 relative">
      {/* Decorative gradient blur background layout */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copywriting value & bullet points */}
          <div className="space-y-6">
            <h2 className="text-xs font-extrabold text-accent-purple uppercase tracking-widest">
              Hvorfor velge oss
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Bygget for fart og ytelse, <br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
                designet for konvertering
              </span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-normal">
              Mange kan bygge en enkel nettside, men vi fokuserer på de avgjørende detaljene som gjør at besøkende faktisk tar kontakt og blir betalende kunder.
            </p>
            
            <div className="w-full h-[1px] bg-gradient-to-r from-accent-blue/30 via-accent-purple/30 to-transparent rounded-full my-8" />

            {/* Structured Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs mt-0.5 border border-emerald-500/15">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Lynrask Google-fart</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Sider som laster på under 1.2 sekunder beholder 40% flere av sine besøkende.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6.5 h-6.5 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs mt-0.5 border border-emerald-500/15">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Sikkerhet & Personvern</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Alle våre nettsider er 100% GDPR-tilpasset med inkludert SSL og kryptering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grid of Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {benefitsData.map((benefit, idx) => {
              const IconComponent = iconMap[benefit.icon] || Sparkles;
              
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col space-y-3.5 border border-white/5 hover:border-accent-purple/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent-purple">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
