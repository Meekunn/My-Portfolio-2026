import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { FocusCards } from '@/components/ui/focus-cards';
import { aiProjects, webProjects } from '@/lib/projects';

export function Projects() {
  const projectPageRef = useRef(null);
  const isInView = useInView(projectPageRef, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<'web' | 'ai'>('web');

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-10" ref={projectPageRef}>
        <div
          className="text-center"
        >
         <div className="flex items-center justify-center gap-2">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              My{' '}
            </motion.h2>
            <motion.span 
              className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Projects
            </motion.span>
          </div>
          <motion.p initial={{opacity: 0}} animate={isInView ? {opacity: 1}: {}} transition={{duration: 0.5, delay: 0.5, ease: "easeOut"}} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-2">
            A collection of my work in web development and AI/Computer Vision
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-l from-purple-500 to-purple-700 mx-auto rounded-full shadow-lg shadow-purple-500/50"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-row justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('web')}
            className={`relative px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'web'
                ? 'text-white'
                : 'text-gray-400 hover:text-purple-400'
            }`}
          >
            <span className="hidden md:flex relative z-10 items-center gap-2 text-sm md:text-base ">
              <BsGlobe2 className="w-5 h-5" />
              Web Development
            </span>
            <span className="flex md:hidden relative z-10 items-center gap-2 text-sm md:text-base">
              <BsGlobe2 className="w-5 h-5" />
              Web
            </span>
            {activeTab === 'web' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('ai')}
            className={`relative px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'ai'
                ? 'text-white'
                : 'text-gray-400 hover:text-purple-400'
            }`}
          >
            <span className="relative z-10 hidden md:flex items-center gap-2 text-sm md:text-base">
              <LuBrain className="w-5 h-5" />
              AI & Computer Vision
            </span>
            <span className="flex md:hidden relative z-10 items-center gap-2 text-sm md:text-base">
              <LuBrain className="w-5 h-5" />
              AI & CV
            </span>
            {activeTab === 'ai' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </motion.div>

       <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.0 }}
        > 
          {(activeTab === 'web' ? <FocusCards cards={webProjects}isInView={isInView} /> : <FocusCards cards={aiProjects}isInView={isInView} />)}
        </motion.div>
      </div>
    </section>
  );
}