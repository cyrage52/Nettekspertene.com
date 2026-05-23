import { motion } from "motion/react";
import { testimonialsData } from "../data";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#05070A] px-6 relative">
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] bg-accent-pink/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-extrabold text-accent-pink uppercase tracking-widest flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-pink" />
            Våre kunder refererer
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none">
            Hvorfor bedrifter <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              velger å anbefale oss
            </span>
          </p>
          <p className="text-gray-400 text-sm md:text-base font-normal max-w-md mx-auto">
            Hør de personlige erfaringene til noen av de ambisiøse selskapene vi samarbeider med i dag.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonialsData.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative flex flex-col justify-between"
            >
              {/* Floating quote background */}
              <Quote className="absolute -top-3 -left-1 w-20 h-20 text-white/5 pointer-events-none" />

              <div>
                {/* Visual Stars Rating block */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text block */}
                <p className="text-gray-300 italic text-sm leading-relaxed mb-8 relative z-10 font-normal">
                  "{test.text}"
                </p>
              </div>

              {/* Client Info alignment */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/5 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${test.avatarColor}`}>
                  {test.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-tight">
                    {test.name}
                  </h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {test.role}, <span className="text-gray-400 font-semibold">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Trustpilot-like summary badging */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3.5 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-1 text-sm font-bold text-white">
              <span>Superb score på 5.0 av 5.0</span>
              <div className="flex gap-0.5 ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400">
              basert på tilbakemeldinger og oppnådde weblanseringer i 2024–2026.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
