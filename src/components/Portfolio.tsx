import { useState, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "../data";
import { Project } from "../types";
import { Activity, Ship, Utensils, X, Clock, Target, CheckCircle2, ArrowRight } from "lucide-react";

// Lucide icon mapping
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Activity,
  Ship,
  Utensils,
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("Alle");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["Alle", "Nettside", "E-handel", "Bedriftsløsning"];

  const filteredProjects = activeCategory === "Alle"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    // Disable body scroll when modal is active
    document.body.style.overflow = "hidden";
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  };

  const scrollToContact = () => {
    handleCloseProject();
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
    <section id="portefolje" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold text-accent-blue uppercase tracking-widest">
              Utvalgt arbeid
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prosjekter vi er stolte av
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-normal leading-relaxed">
            Vi utvikler unike webløsninger for både små lokale bedrifter og nasjonale aktører. Hvert prosjekt lages fra bunnen med fokus på kompromissløs hastighet og design.
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-2 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 relative cursor-pointer ${
                activeCategory === cat
                  ? "text-white bg-white/5 border border-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategoryBorder"
                  className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-accent-blue"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const IconComponent = iconMap[project.icon] || Activity;
              
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleOpenProject(project)}
                  className="glass-panel rounded-2xl overflow-hidden group hover:border-[#3B82F6]/30 transition-all duration-300 flex flex-col h-full cursor-pointer relative"
                >
                  {/* Decorative Project Header Image/Gradient Block */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.bgGradient} p-8 flex flex-col justify-between overflow-hidden border-b border-white/5`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    
                    {/* Floating mini category tag */}
                    <span className="self-start text-[10px] font-extrabold tracking-wider text-accent-blue uppercase px-2.5 py-1 rounded bg-[#070913]/85 border border-white/5">
                      {project.category}
                    </span>

                    {/* Logo/Icon and Title inside card */}
                    <div className="space-y-3 relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest block mb-0.5">PROSJEKT</span>
                        <h4 className="text-xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    {/* Metric indicator inside project card */}
                    <div className="absolute bottom-6 right-6 text-right">
                      <div className="text-2xl font-black text-white/90 tracking-tight">{project.metric}</div>
                      <div className="text-[9px] text-white/50 uppercase tracking-wider font-semibold">{project.metricLabel}</div>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="text-gray-400 text-sm leading-relaxed font-normal mb-6">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs font-bold text-accent-blue group-hover:text-white transition-colors">
                      <span>Les suksesshistorien</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Premium Modal Dialog */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseProject}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal Card Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative w-full max-w-3xl bg-dark-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col z-10"
              >
                {/* Header Banner */}
                <div className={`p-8 bg-gradient-to-br ${selectedProject.bgGradient} border-b border-white/5 flex flex-col justify-between relative`}>
                  
                  {/* Close button */}
                  <button
                    onClick={handleCloseProject}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer"
                    aria-label="Lukk dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-3 max-w-[85%]">
                    <span className="inline-block text-[10px] font-extrabold tracking-widest text-accent-blue uppercase px-2.5 py-1 rounded bg-black/40">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-black text-white tracking-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Top Stats Cards within banner */}
                  <div className="flex gap-8 mt-8">
                    <div className="bg-black/40 px-5 py-3 rounded-xl border border-white/5">
                      <div className="text-2xl font-black text-white">{selectedProject.metric}</div>
                      <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">{selectedProject.metricLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Modal Body Scroll area */}
                <div className="p-8 space-y-8 overflow-y-auto flex-1 text-left custom-scrollbar">
                  
                  {/* Detailed Description */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5">
                      <Target className="w-4 h-4" />
                      Prosjektbeskrivelse
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-normal">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Results & Value */}
                  <div className="bg-accent-blue/5 border border-accent-blue/15 p-5 rounded-2xl space-y-2.5">
                    <h4 className="text-xs font-extrabold text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Reelle forretningsresultater
                    </h4>
                    <p className="text-white text-sm font-semibold leading-relaxed">
                      {selectedProject.results}
                    </p>
                  </div>

                  {/* Technologies Used tag lists */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      Teknologi og leveranse
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedProject.tech.map((tag) => (
                        <span key={tag} className="text-xs text-gray-300 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer actions */}
                <div className="p-6 bg-[#05070A] border-t border-white/5 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <span className="text-xs text-gray-400 font-semibold">Inspirert av dette resultatet?</span>
                  <button
                    onClick={scrollToContact}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-bold text-xs tracking-wide shadow-md transition-all cursor-pointer flex items-center gap-2"
                  >
                    Få lignende løsning til din bedrift
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
