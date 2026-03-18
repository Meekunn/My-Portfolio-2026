import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { useIsLargeScreen } from '@/hooks/use-is-large-screen';

const skills = {
  frontend: [ 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Tailwind CSS', "Storybook", "Vitest"],
  backend: [ 'Python', 'Django', 'Flask', 'MySQL' ],
  ai: [ 'Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'ANNs', 'NumPy', 'Pandas', 'Scikit-learn' ],
  cv: ['OpenCV', 'CNNs', 'DeepFace', 'Object Detection' ]
};

export function About() {
  const aboutPageRef = useRef(null);
  const isInView = useInView(aboutPageRef, { once: true, amount: 0.1 });
  const isLargeScreen = useIsLargeScreen()

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.8,
      }
    })
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-x-hidden bg-gradient-to-b from-black/95 to-black">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col gap-10" ref={aboutPageRef}>
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
              About{' '}
            </motion.h2>
            <motion.span 
              className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Me
            </motion.span>
          </div>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full shadow-lg shadow-purple-500/50"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-7 lg:gap-12 items-start">
          <div
            className="min-w-0"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="text-xl md:text-3xl font-bold mb-6 text-white shadow-sm"
            >
              Passionate About Technology & Innovation
            </motion.h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <motion.p
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
                className="text-sm md:text-base"
              >
                I'm a frontend developer with real experience building cloud-based tools and scalable web applications using React and TypeScript. My background is in Information and Communication Engineering — I graduated First Class with a thesis on real-time facial recognition — and that foundation shapes how I think about the things I build. I care about clean code, intuitive interfaces, and products that actually work well for the people using them.
              </motion.p>
              <motion.p
                custom={1.5}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
                className="text-sm md:text-base"
              >
                These days, I'm deepening my path into AI and Computer Vision — particularly transfer learning, model generalization, biometric recognition systems, and getting deep learning models out into the real world. I'm also drawn to XR/AR/VR/MR and the possibilities that open up when immersive tech meets intelligent systems. It's a gradual process, and I'm enjoying the journey.
              </motion.p>
              <motion.p
                custom={2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariants}
                className="text-sm md:text-base"
              >
                When I'm not coding, I'm picking up Spanish and French, playing Scrabble, or spending time on CODM. I'm a curious person by nature, and that curiosity tends to follow me everywhere.
              </motion.p>
            </div>
          </div>

          <div className="space-y-8 min-w-0">
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: isLargeScreen ? 0.6 : 2.0, ease: "easeIn" }}
              className="bg-black/50 p-4 sm:p-8 rounded-2xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all overflow-hidden"
            >
              <h4 className="text-lg md:text-xl font-bold mb-4 text-white flex items-center gap-2">
                <BsGlobe2 className="w-5 h-5 text-purple-400" />
                Web Development
              </h4>
              <div className="overflow-hidden">
                <InfiniteMovingCards
                  items={skills.frontend}
                  direction="right"
                  speed="normal"
                />
              </div>
              <div className="overflow-hidden mt-2">
                <InfiniteMovingCards
                  items={skills.backend}
                  direction="left"
                  speed="normal"
                />
              </div>
             
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: isLargeScreen ? 1.0 : 2.4, ease: "easeIn" }}
              className="bg-black/50 p-4 sm:p-8 rounded-2xl border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all overflow-hidden"
            >
              <h4 className="text-lg md:text-xl font-bold mb-4 text-white flex items-center gap-2">
                <LuBrain className="w-5 h-5 text-purple-400" />
                AI & Computer Vision
              </h4>
              <div className="overflow-hidden">
                <InfiniteMovingCards
                  items={skills.ai}
                  direction="right"
                  speed="normal"
                />
              </div>
              <div className="overflow-hidden mt-2">
                <InfiniteMovingCards
                  items={skills.cv}
                  direction="left"
                  speed="normal"
                />
              </div>
               
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
