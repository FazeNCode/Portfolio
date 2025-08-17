
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";


const End = () => {
  return (
    <div>
        <div>
            <div className="flex justify-center items-center"> 
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
                tooltip: "Click-me"
        
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 "
            />
            
          </div>
        </a>
      </div>
        </div>
    </div>
  )
}

export default SectionWrapper(End, "end");