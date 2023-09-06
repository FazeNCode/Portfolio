import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas} from './canvas';


const Hero = () => {
  return (
    // Semantic tag
    <section className='relative w-full h-screen mx-auto'> 
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

      <div className='flex flex-col justify-center items-center mt-5'> 

        <div className='w-80 h-40 rounded-full bg-[#c6c2cf]'/> 
        <div className='w-1 sm:h-96 h-80 violet-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hey  I'm <span className='text-orange-400'>Faisal</span></h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100`}> A linux administrator <br className='sm:block hidden'/>  & A Web Developer</p>
      </div>
      


    </div>
  


  
    


{/* The code below is for the scroll down animation */}
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
      <a href="#about">
      <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2' >
        {/* Play around with this to your needs */}
        <motion.dev 
        animate={{
          y: [0, 24, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="w-3 h-3 rounded-full bg-secondary mb-1 "
        
        />
       </div>
      </a>
    </div>
    </section>
   
   

   
  )
}

export default Hero;