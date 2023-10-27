import { motion } from "framer-motion";

const ComingSoon: React.FC = () => {
  const text = "Coming Soon".split("");

  return (
    <div className="w-full flex justify-center items-center h-full bg-[#00AEED] text-black text-3xl">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: [null, 1.3, 1.1] }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {text.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default ComingSoon;
