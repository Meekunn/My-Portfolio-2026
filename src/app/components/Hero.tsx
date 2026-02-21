import { motion } from 'motion/react';
import {  useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AnimatedSplitText from './reusables/AnimatedSplitText';
import ProfileImage from "@/assets/profile-image.png"
import { SvgAnim1, SvgAnim2, SvgAnim3, SvgAnim6 } from './reusables/SvgAnim';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiCaretDownBold } from "react-icons/pi";
import "@/styles/styles.css";
import { scrollToSection } from '@/lib/utils';
import { useIsLargeScreen } from '@/hooks/use-is-large-screen';


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const Hero = () => {

  const isLargeScreen = useIsLargeScreen()

  const containerRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!socialIconsRef.current) return;

    const icons = socialIconsRef.current.querySelectorAll('a');

    gsap.set(icons, { opacity: 0, x: -30 });

    gsap.to(icons, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.3, 
      ease: "power2.out",
      delay: 3,
    });
  }, { scope: socialIconsRef });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-24">
      <motion.div
        className="absolute inset-0"
        animate={{
         background: [
          'linear-gradient(135deg, #000000 0%, #111111 50%, #222222 100%)',
          'linear-gradient(135deg, #111111 0%, #222222 50%, #000000 100%)',
          'linear-gradient(135deg, #222222 0%, #000000 50%, #111111 100%)',
        ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 sm:pt-12 lg:pt-0 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         

          {/*Left: Introduction*/}
          <div className="text-left" ref={containerRef}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-32 pb-8 px-8"></div>

            <div className="flex flex-4 flex-col gap-4">
              <div className="flex gap-1 items-end">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ 
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 } 
                    }} 
                  className="text-xl text-gray-400"
                >
                  Hi, there 
                </motion.p> 
                <DotLottieReact
                src={`https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/lottie.json`}
                speed={1}
                style={{ fontSize: "20px", width: "35px", height: "35px" }}
                loop
                autoplay
                /> 
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ 
                    opacity: { duration: 0.5 },
                    y: { duration: 0.5 } 
                    }} 
                  className="text-xl text-gray-400 ml-1"
                >
                  I'm
                </motion.p> 
              </div>

            <AnimatedSplitText
              text="Adedamola Orofin"
              className="text-white font-bold text-4xl md:text-6xl lg:text-[80px] leading-tight tracking-wide"
            />
        
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                opacity: { duration: 0.5, delay: 0.8 },
                y: { duration: 0.5, delay: 0.8 } 
              }} 
              className="text-lg md:text-2xl text-gray-300 font-semibold leading-relaxed">
              Frontend Developer & Aspiring AI/CV Research Engineer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ 
                opacity: { duration: 0.5, delay: 1.2 },
                y: { duration: 0.5, delay: 1.2 } 
                }} 
              className="text-sm md:text-lg text-gray-400 max-w-xl leading-relaxed">
              Building beautiful, intuitive web experiences and exploring the frontiers of 
              artificial intelligence and computer vision.
            </motion.p>

            <div
              className="flex flex-wrap items-center gap-4"
            >
              <motion.button 
                onClick={() => scrollToSection('projects')}
                className="view-projects-btn relative px-6 py-4 md:px-8 bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 1.6 },
                  y: { duration: 0.5, delay: 1.6 },
                  scale: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="dots-border"></div>
                <span className="text-white relative z-10 text-sm md:text-base">View Projects</span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 py-4 md:px-8 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold border-2 border-white/20 shadow-2xl overflow-hidden contact-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 2.25 },
                  y: { duration: 0.5, delay: 2.25 },
                  scale: { duration: 0.2, type: "spring", stiffness: 400 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-sm md:text-base">Contact Me</span>
              </motion.button>
            </div>

            <div
              ref={socialIconsRef}
              className="flex items-center gap-4 mt-2"
            >
              <motion.a
                href="https://github.com/meekunn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-purple-500 transition-all shadow-lg social-icon"
                whileHover={{scale: 1.1}}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  scale: { duration: 0.3, ease: 'easeInOut' }
                }}
              >
                <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adedamola-orofin/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-purple-500 transition-all shadow-lg social-icon"
                whileHover={{scale: 1.1}}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  scale: { duration: 0.3, ease: 'easeInOut' }
                }}
              >
                <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
              <motion.a
                href="mailto:orofinadedamola@gmail.com"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-purple-500 transition-all shadow-lg social-icon"
                whileHover={{scale: 1.1}}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  scale: { duration: 0.3, ease: 'easeInOut' }
                }}
              >
                <IoMdMail className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>
           </div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 1.0, delay: isLargeScreen ? 1.0 : 2.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className='relative'>
                <div className="bg-purple-300 w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-full relative shadow-2xl border border-purple-500" />

                <motion.div
                  className="absolute bottom-1/3 -left-6 md:-left-14 lg:left-auto lg:bottom-20 lg:-right-20 z-10 w-96 h-96 md:w-[450px] md:h-[450px] lg:w-[650px] lg:h-[650px] rounded-full overflow-hidden"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                  }}
                >
                  <img src={ProfileImage} alt="Adedamola Orofin" className="w-full h-full object-cover" />
                </motion.div>

                {/* 1 - Middle Right */}
                <SvgAnim1 className="absolute top-16 right-8 md:right-10 lg:right-16 lg:top-36 -translate-y-1/2 w-20 h-20 z-20" />
                
                {/* 2 - Bottom Left */}
                <SvgAnim2 className="absolute -left-16 bottom-1/2 w-32 h-32 z-20 rotate-45" />
                
                {/* 3 - Bottom Right */}
                <SvgAnim3 className="absolute right-0 top-1/2 w-32 h-32 z-20 rotate-180" />
               
                {/* 6 - Top Left */}
                <SvgAnim6 className="absolute left-0 top-0 w-28 h-28 z-20" />
                
               
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 cursor-pointer p-3 hover:bg-purple-500 border border-purple-500 bg-transparent rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        whileHover={{scale:1.05}}
        onClick={() => scrollToSection('about')}
      >
        {/* <span className="text-gray-400 text-sm font-medium">Scroll Down</span> */}
        <PiCaretDownBold className="w-6 h-6 text-purple-500 group-hover:text-gray-300" />
      </motion.div>
    </section>
  );
}
export default Hero