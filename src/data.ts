import { Service, Benefit, Project, Testimonial, FAQItem } from "./types";

export const servicesData: Service[] = [
  {
    id: "design",
    title: "Nettsidedesign",
    description: "Skreddersydd og moderne UX/UI-design som fanger oppmerksomheten med en gang. Vi skaper et visuelt uttrykk som styrker din merkevare og fargepaletter tilpasset din profil.",
    features: ["Bredt forprosjekt", "Unikt design", "Fokus på konvertering", "Brukervennlig navigasjon"],
    icon: "Compass",
    color: "from-blue-500/10 to-indigo-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400/50"
  },
  {
    id: "utvikling",
    title: "Webutvikling",
    description: "Lynrask og robust koding med moderne frontend-teknologier. Vi bygger sikre, feilfrie og høytytende nettsider optimalisert for maksimal ytelse.",
    features: ["Rent kildekode", "React & state management", "Integrerte animasjoner", "Lynrask responstid"],
    icon: "Code2",
    color: "from-violet-500/10 to-fuchsia-500/10 text-violet-400 border-violet-500/20 hover:border-violet-400/50"
  },
  {
    id: "seo",
    title: "SEO-optimalisering",
    description: "Innebygd søkemotoroptimalisering fra første kodelinje. Vi strukturerer koden slik at Google og andre søkemotorer foretrekker nettopp ditt nettsted.",
    features: ["Semantisk HTML", "Meta-data & OpenGraph", "Sitemap & Robottekster", "Google Analytics oppsett"],
    icon: "SearchCode",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-400 border-emerald-500/20 hover:border-emerald-400/50"
  },
  {
    id: "responsivt",
    title: "Responsivt design",
    description: "Nesten 70% av alle besøk skjer fra mobil. Dine nettsider vil se plettfrie og profesjonelle ut på alle skjermer, fra mobiltelefoner og nettbrett til 4K-skjermer.",
    features: ["Mobilvennlig meny", "Fluid grid layout", "Skalerbare bilder", "Touch-optimerte knapper"],
    icon: "Smartphone",
    color: "from-amber-500/10 to-orange-500/10 text-amber-400 border-amber-500/20 hover:border-amber-400/50"
  },
  {
    id: "bedrift",
    title: "Bedriftsløsninger",
    description: "Skreddersydde løsninger som forenkler din hverdag. Vi bygger kundeportaler, integrerte bookingsystemer, nettbutikker og automatiserte API-integrasjoner.",
    features: ["Kundeportaler", "Online bookingsystemer", "Sømløs betaling", "API-integrasjoner"],
    icon: "Cpu",
    color: "from-cyan-500/10 to-teal-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-400/50"
  }
];

export const benefitsData: Benefit[] = [
  {
    id: "trendsetting",
    title: "Moderne design",
    description: "Vi følger de nyeste globale designtrendene for å gi deg et tidløst og profesjonelt uttrykk.",
    icon: "Compass"
  },
  {
    id: "delivery",
    title: "Rask levering",
    description: "Ingen unødvendige forsinkelser. Vi jobber strukturert og lanserer nettsiden til avtalt tid.",
    icon: "Zap"
  },
  {
    id: "mobile",
    title: "Mobilvennlige sider",
    description: "Vi bygger mobil-først, noe som sikrer en fabelaktig opplevelse på mobil og nettbrett.",
    icon: "Smartphone"
  },
  {
    id: "custom",
    title: "Skreddersøm",
    description: "Vi bruker ikke tunge ferdigmaler. Alt kodes og skreddersys nøyaktig etter dine spesifikke mål.",
    icon: "Sliders"
  },
  {
    id: "support",
    title: "Profesjonell support",
    description: "Rask support på norsk. Vi svarer innen kort tid, og hjelper deg med råd og endringer.",
    icon: "Headphones"
  },
  {
    id: "seo-focus",
    title: "SEO-fokusert",
    description: "Vi legger det tekniske grunnlaget slik at nettsiden din kan rangere høyt i søkeresultatene.",
    icon: "Sparkles"
  }
];

export const projectsData: Project[] = [
  {
    id: "oslo-tannhelse",
    title: "Oslo Tannhelse",
    category: "Nettside",
    description: "Moderne, trygg og innbydende klinikkportal med forenklet timebestilling.",
    detailedDescription: "For Oslo Tannhelse var målet å skape en trygg og profesjonell atmosfære på nett som reduserer tannlegeskrekk, samtidig som vi forenklet pasientens vei til timebestilling. Vi utførte en komplett omstrukturering av informasjonen, designet beroligende fargesammensetninger og utviklet en integrasjon mot deres interne bookingsystem.",
    results: "38% økning i online timebestillinger og 45% reduksjon i telefonforespørsler den første måneden.",
    metric: "+38%",
    metricLabel: "Timebestillinger",
    bgGradient: "from-blue-600/20 via-indigo-900/40 to-[#090D16]",
    icon: "Activity",
    tech: ["React", "Tailwind CSS", "Unikt design", "REST API"]
  },
  {
    id: "fjord-logistikk",
    title: "Fjord Logistikk",
    category: "Bedriftsløsning",
    description: "Høytytende bedriftsportal for internasjonal sjø- og landtransport.",
    detailedDescription: "Fjord Logistikk trengte en robust plattform som tålte høy trafikk og ga sanntidsinformasjon til deres globale samarbeidspartnere. Vi designet et mørkt, industri-fokusert interface, integrerte en avansert sporings-widget og optimaliserte sidens lastetid på tvers av tre kontinenter.",
    results: "Siden laster på utrolige 0.8 sekunder. Antall skriftlige tilbudsforespørsler økte med 52% etter lansering.",
    metric: "0.8s",
    metricLabel: "Lastetid",
    bgGradient: "from-emerald-600/20 via-teal-900/40 to-[#090D16]",
    icon: "Ship",
    tech: ["TypeScript", "Vite", "SEO", "Tracking API"]
  },
  {
    id: "nordic-bistro",
    title: "Nordic Bistro",
    category: "E-handel",
    description: "Visuell restaurantnettside med levende meny og integrert bordreservasjon.",
    detailedDescription: "Nordic Bistro ønsket et design som reflekterte deres delikate, skandinaviske matopplevelse. Vi fokuserte på store, appetittvekkende bilder, en elegant nettmeny som tilpasser seg mobilen i sanntid, samt et lynraskt, integrert booking- system for bord.",
    results: "94% av helgebordene blir nå bestilt direkte via nettsiden, noe som sparer personalet for mange timer med telefoner.",
    metric: "94%",
    metricLabel: "Automatisert booking",
    bgGradient: "from-rose-600/20 via-pink-900/40 to-[#090D16]",
    icon: "Utensils",
    tech: ["Vite", "Framer Motion", "Table reservation", "Fluid design"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Kristine Hansen",
    role: "Daglig leder",
    company: "Oslo Tannhelse",
    rating: 5,
    text: "Nettekspertene hjalp oss med å redesigne hele nettstedet vårt. De var utrolig profesjonelle gjennom hele prosessen, og leverte en side som både er fantastisk rask og enkel for oss å redigere selv i ettertid. Vi merker en stor vekst i nye pasienter!",
    avatarInitials: "KH",
    avatarColor: "bg-blue-500"
  },
  {
    id: "2",
    name: "Morten Jensen",
    role: "Medgründer & Partner",
    company: "Fjord Logistikk",
    rating: 5,
    text: "Vi har opplevd en markant økning i direkte forespørsler etter at den nye portalen ble lansert. Det tekniske fundamentet og SEO-fokuset har virkelig hjulpet oss med å klatre til topps på Google på strategiske søkeord.",
    avatarInitials: "MJ",
    avatarColor: "bg-violet-500"
  },
  {
    id: "3",
    name: "Astrid Solberg",
    role: "Eier",
    company: "Nordic Bistro",
    rating: 5,
    text: "For oss var det visuelle uttrykket ekstremt viktig. Nettekspertene forsto vår nordiske og minimalistiske estetikk fra første øyeblikk. Resultatet er en vakker, moderne nettside som vi er ekstremt stolte av å vise frem.",
    avatarInitials: "AS",
    avatarColor: "bg-pink-500"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "pris",
    category: "Pris & Prosess",
    question: "Hvor mye koster en skreddersydd nettside hos dere?",
    answer: "Prisen på en nettside avhenger av sidens størrelse, funksjonalitet og dine spesifikke behov (for eksempel integrasjon av bookingsystem, nettbutikk eller spesielle fagsystemer). Vi utarbeider alltid et detaljert og uforpliktende pristilbud i forkant av prosjektet slik at du har full forutsigbarhet."
  },
  {
    id: "tid",
    category: "Pris & Prosess",
    question: "Hvor lang tid tar det å utvikle og lansere siden?",
    answer: "Det kommer an på, hver nettside har forskjellig tidsramme, men vi bør kunne lansere innen 3 dager."
  },

  {
    id: "seo-inc",
    category: "Søkemotorer",
    question: "Er søkemotoroptimalisering (SEO) inkludert i leveransen?",
    answer: "Ja, teknisk SEO er alltid fundamentalt integrert i alle våre nettsider. Vi sørger for lynrask lastetid, korrekt semantisk HTML-struktur, optimaliserte bilder, sitemap og meta-beskrivelser. Dette danner et optimalt grunnlag for organisk synlighet."
  }
];
