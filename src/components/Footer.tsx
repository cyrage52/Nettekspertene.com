import { ArrowUp, Mail, Instagram, Facebook } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030509] border-t border-white/5 pt-16 pb-8 px-6 text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center space-x-3 group"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center border border-white/10 shadow shadow-accent-blue/15">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Nettekspertene<span className="text-accent-blue">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-normal">
              Vi kobler enestående kreativitet med lynrask kildekode for å utvikle webløsninger som skaper ekte vekts for din bedrift.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/nettekspertene/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-blue/20 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589949104306"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-blue/20 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Clean Quick Links Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigering</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#tjenester" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Våre tjenester
                </a>
              </li>
              <li>
                <a href="#fordeler" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Hvorfor velge oss
                </a>
              </li>
              <li>
                <a href="#om-oss" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Om Nettekspertene
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Ofte stilte spørsmål
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hurtigkontakt</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-blue" />
                <a href="mailto:realcyrage@gmail.com" className="hover:text-white transition-colors">
                  realcyrage@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Regulatory / MVA Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Bedrift</h4>
            <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
              <li>Reehaugs Nettekspertene</li>
              <li>Org.nr: 937 733 615</li>
              <li>Registrert i Brønnøysund</li>
            </ul>
          </div>

        </div>

        {/* Copyright and back-to-top layout */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-600 font-medium">
            © {currentYear} Reehaugs Nettekspertene. Alle rettigheter reservert.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-all text-xs font-bold flex items-center gap-2 cursor-pointer"
          >
             Til toppen
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
