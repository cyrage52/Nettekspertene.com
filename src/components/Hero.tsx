import { motion } from "motion/react";
import { ArrowRight, Star, Zap, Eye, Gauge, Code2, Globe } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background visual graphics - glow blobs */}
      <div className="absolute top-1/4 left-1/12 w-[350px] h-[350px] bg-accent-blue/15 rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/10 w-[450px] h-[450px] bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/10 left-1/3 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[90px] pointer-events-none animate-float-delayed" />
      
      {/* Background Decorative Tech Grid Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column: Conversional copywriting */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left relative">
          
          {/* Trust Rating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-semibold tracking-wider uppercase backdrop-blur-sm shadow-sm"
          >
            <Star className="w-3.5 h-3.5 fill-accent-blue" />
            <span>Norsk premium webdesignbyrå</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            Moderne nettsider for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent drop-shadow-sm">
              ambisiøse bedrifter
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
          >
            Vi designer og utvikler lynraske, responsive og søkemotoroptimaliserte nettsider som gjør besøkende om til lojale kunder.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection("kontakt")}
              className="px-8 py-4 rounded-xl bg-blue-600 font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 cursor-pointer text-center"
            >
              Start ditt prosjekt
            </button>
          </motion.div>

          {/* Bullet metrics / stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
          >
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">100%</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Skreddersydd</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">&lt;1.2s</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Lastetid</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">10/10</div>
              <div className="text-xs text-gray-400 font-medium mt-1">Kundescore</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Browser Mockup Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Main graphic block */}
          <div className="relative w-full max-w-[460px] aspect-square rounded-3xl p-1 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl animate-float">
            
            <div className="w-full h-full bg-[#0D1117] rounded-[22px] p-5 overflow-hidden border border-white/5 flex flex-col justify-between">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/85"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/85"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/85"></span>
                </div>
                <div className="w-40 h-5 bg-[#161B22] rounded-md text-[9px] text-gray-400 flex items-center justify-center gap-1 font-mono tracking-tight border border-white/5">
                  <Globe className="w-2.5 h-2.5 text-accent-blue" />
                  nettekspertene.no
                </div>
                <div className="w-4" />
              </div>

              {/* Animated Live Page Mockup */}
              <div className="flex-1 space-y-4">
                
                {/* Simulated landing header */}
                <div className="bg-[#0c0f20] p-3.5 rounded-xl border border-white/[0.04] space-y-1.5 relative overflow-hidden">
                  <div className="w-1/4 h-2 bg-accent-blue/40 rounded-full" />
                  <div className="w-3/4 h-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-md" />
                  <div className="w-5/6 h-1.5 bg-gray-600 rounded-full opacity-40" />
                  <div className="w-2/3 h-1.5 bg-gray-600 rounded-full opacity-40" />
                </div>

                {/* Sub-panels inside browser */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Performance widget */}
                  <div className="bg-dark-card p-3 rounded-xl border border-white/[0.04] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Ytelse</span>
                      <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="mt-2.5 flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-white tracking-tight">100</span>
                      <span className="text-[9px] text-emerald-400">/100</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-emerald-400 h-full w-full" />
                    </div>
                  </div>

                  {/* Converts widget */}
                  <div className="bg-dark-card p-3 rounded-xl border border-white/[0.04] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Konvertering</span>
                      <Zap className="w-3.5 h-3.5 text-accent-purple animate-pulse" />
                    </div>
                    <div className="mt-2.5 flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-white tracking-tight">+4.2x</span>
                      <span className="text-[8px] text-accent-purple">Økning i leads</span>
                    </div>
                    <div className="w-full bg-gray-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-accent-purple h-full w-3/4" />
                    </div>
                  </div>
                </div>

                {/* Live active widget: Web editor animation lines */}
                <div className="bg-[#05070e] p-3 rounded-lg border border-white/[0.03] font-mono text-[9px] text-slate-400 space-y-1 overflow-hidden">
                  <div className="flex justify-between items-center text-gray-500 border-b border-white/[0.03] pb-1 mb-1">
                    <span>App.tsx</span>
                    <Code2 className="w-2.5 h-2.5 text-accent-purple" />
                  </div>
                  <div className="text-emerald-400">{"const nett = () => {"}</div>
                  <div className="pl-3 text-white">{"layout: 'skreddersydd_premium',"}</div>
                  <div className="pl-3 text-accent-blue">{"fart: 'suveren_lynrask_seo',"}</div>
                  <div className="pl-3 text-accent-pink">{"konvertering: true"}</div>
                  <span className="text-emerald-400">{"}"}</span>
                </div>

              </div>

              {/* Mockup footer */}
              <div className="border-t border-white/5 pt-3.5 flex items-center justify-between mt-4">
                <span className="text-[9px] text-gray-500">Miljø: Produksjonsklar</span>
                <div className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[9px] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Går på lufta
                </div>
              </div>
            </div>

            {/* Glowing Accent Orbs outside card to look beautiful */}
            <div className="absolute -top-3 -right-3 w-10.5 h-10.5 bg-accent-pink/30 rounded-full blur-md opacity-70 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-15 h-15 bg-accent-blue/30 rounded-full blur-lg opacity-70 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
