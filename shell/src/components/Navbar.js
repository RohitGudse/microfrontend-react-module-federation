import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      style={{background:"#222",color:"#fff",padding:"15px"}}
    >
      <h2>MicroFrontend App</h2>
    </motion.nav>
  );
}

export default Navbar;