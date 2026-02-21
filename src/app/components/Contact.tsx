import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

export function Contact() {
  const contactPageRef = useRef(null);
  const isInView = useInView(contactPageRef, { once: true, amount: 0.2 });
  

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-2 left-0 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={contactPageRef}>
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Get In{' '}
            </motion.h2>
            <motion.span 
              className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Touch
            </motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-2"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto rounded-full shadow-lg shadow-purple-500/50"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeIn" }}
            className="lg:col-span-3"
          >
            <DotLottieReact
              src="https://lottie.host/fce11b16-dd58-4f7a-91df-040951a37701/s87JEJKvfb.lottie"
              loop
              autoplay
            />
          </motion.div>

          {/* Contact Info */}
          <div
            className="lg:col-span-2 space-y-4"
          >
            <div className="flex flex-col gap-4">
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                Let's Connect
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="text-gray-400 leading-relaxed text-sm md:text-base"
              >
                I'm always interested in hearing about new opportunities, 
                collaborations, or just having a chat about technology and innovation.
              </motion.p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-800 transition-all border border-purple-500/20"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <IoMdMail className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Email</h4>
                  <a href="mailto:alex.johnson@example.com" className="text-purple-400 hover:text-purple-300 text-sm md:text-base">
                    orofinadedamola@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.1 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-800 transition-all border border-purple-500/20"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaMapMarkerAlt className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-sm md:text-base">Location</h4>
                  <p className="text-gray-400 text-sm lg:text-base">Lagos, Nigeria</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 mt-8">
              <motion.h4 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.5 }}
                className="font-semibold text-white text-2xl md:text-3xl"
              >
                Follow Me
              </motion.h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/meekunn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full backdrop-blur-lg border border-white/20 bg-transparent shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(173,70,255,0.7)] active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-purple-500/30 hover:bg-gradient-to-tr hover:from-purple-500/10 hover:to-black/40 group relative overflow-hidden flex items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{scale: 1.1, rotate: '3deg'}}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, delay: 2.8,
                    scale: { duration: 0.3, ease: 'easeInOut', delay: 0 }
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  ></div>
                  <div className="relative z-10 text-white group-hover:text-purple-400 transition-colors duration-300">
                    <FaGithub className="w-6 h-6 " />
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/adedamola-orofin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full backdrop-blur-lg border border-white/20 bg-transparent shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(43,127,255,0.7)] active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden flex items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{scale: 1.1, rotate: '3deg'}}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, delay: 3.0,
                    scale: { duration: 0.3, ease: 'easeInOut', delay: 0 }
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  ></div>
                  <div className="relative z-10 text-white group-hover:text-blue-500 transition-colors duration-300">
                    <FaLinkedinIn className="w-6 h-6"/>
                  </div>
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full backdrop-blur-lg border border-white/20 bg-transparent shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.5)] active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-black/40 group relative overflow-hidden flex items-center justify-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{scale: 1.1, rotate: '3deg'}}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    duration: 0.6, delay: 3.2,
                    scale: { duration: 0.3, ease: 'easeInOut', delay: 0 }
                  }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  ></div>
                  <div className="relative z-10 text-white group-hover:text-white/90 transition-colors duration-300">
                    <BsTwitterX className="w-5 h-5 " />
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800"
      >
        <div className="text-center text-gray-500">
          <p className="text-sm md:text-base">©2026 Adedamola Orofin. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  );
}