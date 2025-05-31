import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="relative z-10"
        >
          <img src="/La maison de luxe.jpeg" alt="Logo" className="h-32 w-auto" />
        </motion.div>
        
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 0.8 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gold-600 rounded-full filter blur-xl opacity-20"
        />
        
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -inset-4 border-2 border-gold-600 rounded-full border-t-transparent"
        />
      </div>
    </div>
  );
}