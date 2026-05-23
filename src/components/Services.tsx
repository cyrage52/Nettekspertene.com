import { ComponentType } from "react";
import { motion } from "motion/react";
import { servicesData } from "../data";
import { ArrowRight, Compass, Code2, Search, ShieldCheck, Smartphone, Cpu, Check, Sparkles } from "lucide-react";

// Safe static mapping for Lucide Icons
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Compass,
  Code2,
  SearchCode: Search,
  ShieldAlert: ShieldCheck,
  Smartphone,
  Cpu,
};

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="tjenester" className="py-24 px-6 relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-extrabold text-accent-blue uppercase tracking-widest">
            Hva vi kan hjelpe deg med
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
            Skreddersydde webtjenester <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
              skapt for suksess
            </span>
          </p>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-normal">
            Fra idé og prototyper til lynrask utvikling, SEO-suksess og løpende drift. Vi leverer alt på ett sted med eksepsjonell kvalitet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code2;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                onClick={scrollToContact}
              >
                {/* Visual gradient light beam underlay to glow when hovered */}
                <span className="absolute -top-10 -right-10 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl group-hover:bg-accent-blue/15 transition-all duration-500" />

                <div>
                  {/* Icon Container with smooth rotating-zoom on hover */}
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent-blue mb-6 group-hover:bg-gradient-to-tr group-hover:from-accent-blue group-hover:to-accent-purple group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md`}>
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Lists */}
                  <div className="border-t border-white/5 pt-5 mt-2 space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger Link */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 group-hover:text-accent-blue transition-colors">
                    Forespør tjeneste
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:translate-x-1.5 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Immersive Interactive CTA to perfectly fill the grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border border-blue-500/20 bg-gradient-to-br from-[#0D1117] via-[#101520] to-[#161B22] p-8 rounded-2xl flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            onClick={scrollToContact}
          >
            {/* Ambient dynamic glowing background */}
            <span className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-[#2563eb]/20 to-[#7c3aed]/25 rounded-full blur-[45px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-gradient-to-tr group-hover:from-[#2563eb] group-hover:to-[#7c3aed] group-hover:text-white transition-all duration-300 shadow-md shadow-blue-500/5">
                <Sparkles className="w-5.5 h-5.5 animate-pulse" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Klar til å skape noe helt unikt?
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                Vi skreddersyr nettsider, systemer og funksjoner tilpasset akkurat din bedrifts mål. Fortell oss hva du ønsker, så realiserer vi det raskt.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400 group-hover:text-white transition-colors uppercase tracking-wider">
                Start ditt prosjekt nå
              </span>
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
