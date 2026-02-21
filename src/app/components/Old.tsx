{/* <motion.button
  onClick={() => scrollToSection('projects')}
  className="group relative px-6 py-4 md:px-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full font-semibold shadow-2xl overflow-hidden"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    opacity: { duration: 0.5, delay: 2 },
    y: { duration: 0.5, delay: 2 },
    scale: { duration: 0.2, type: "spring", stiffness: 400 }
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span className="relative z-10 text-sm md:text-base">View Projects</span>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"
    initial={{ x: '-100%' }}
    whileHover={{ x: 0 }}
    transition={{ duration: 0.3 }}
  />
  <motion.div
    className="absolute inset-0 opacity-0"
    animate={{
      opacity: [0, 0.5, 0],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    style={{
      boxShadow: '0 0 40px 10px rgba(139, 92, 246, 0.6)',
      borderRadius: '9999px',
    }}
  />
</motion.button> */}
