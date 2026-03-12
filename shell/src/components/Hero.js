import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      style={{padding:"40px",textAlign:"center"}}
    >
      <h1>Welcome to Micro Frontend Project</h1>
    </motion.div>
  );
}

export default Hero;