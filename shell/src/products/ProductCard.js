import { motion } from "framer-motion";

function ProductCard({name}) {
  return (
    <motion.div
      whileHover={{scale:1.1}}
      style={{
        border:"1px solid #ddd",
        padding:"20px",
        margin:"10px"
      }}
    >
      <h3>{name}</h3>
    </motion.div>
  );
}

export default ProductCard;