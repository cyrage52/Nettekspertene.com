import { motion } from "motion/react";
import { CheckCircle2, Trophy, Clock, HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function About() {
  const principles = [
    {
      icon: Trophy,
      title: "Høyeste kvalitet",
      desc: "Vi klipper aldri svinger. Kildekoden vår er strukturert for absolutt toppytelse."
    },
    {
      icon: Clock,
      title: "Punktlighet",
      desc: "Vi leverer alltid til avtalt tid. Din lanseringsplan overholdes nøyaktig som planlagt."
    },
    {
      icon: HeartHandshake,
      title: "Norsk partnerskap",
      desc: "Tett oppfølging på norsk. Vi lytter, gir råd og er en pålitelig rådgiver for deg på nett."
    }
  ];

  return (
    <section id="om-oss" className="py-24 px-6 relative">
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Presentation content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xs font-extrabold text-accent-blue uppercase tracking-widest">
              Om Nettekspertene
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Norske webdesignere og utviklere <br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink bg-clip-text text-transparent">
                med lidenskap for faglige resultater
              </span>
            </h3>
            
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
              Nettekspertene er et dedikert og spesialisert webstudio. Vi hjelper alt fra ambisiøse lokale bedrifter til mellomstore bedrifter med å skape en profesjonell, synlig og høytkonverterende profil på nett.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
              Mens andre fyller sidene med tunge ferdigmaler og overflødig kode, designer og bygger vi nettbaserte løsninger helt fra bunnen med moderne React-skjeletter. Det sikrer at nettsidene dine laster på et blunk og er rigget for søkemotorene.
            </p>

            {/* Verification checklist badges */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-white/5">
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Nøkkelferdig leveranse</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Teknisk SEO i bunnen</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>GDPR & personvernvennlig</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Full overlevering og opplæring</span>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive visual features grid */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-1 bg-gradient-to-br from-white/10 to-transparent">
              <div className="w-full h-full bg-[#0D1117] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between border border-white/5 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <Sparkles className="w-4.5 h-4.5 text-accent-purple" />
                    Vår leveransemodell
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-normal">
                    Vi bygger solide relasjoner basert på full transparens, ryddig estimering og tett oppfølging gjennom hele prosessen.
                  </p>
                </div>

                {/* Vertical features */}
                <div className="space-y-4.5">
                  {principles.map((pr, idx) => {
                    const PrincipleIcon = pr.icon;
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="w-9 h-9 rounded-lg bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold flex-shrink-0">
                          <PrincipleIcon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-white leading-none mb-1">
                            {pr.title}
                          </h5>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {pr.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
