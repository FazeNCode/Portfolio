import {motion} from 'framer-motion';
import {styles} from '../styles'
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    // Semantic tag
    <section className='relative w-full h-screen mx-auto'> 
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

      <div className='flex flex-col justify-center items-center mt-5'> 
        <div className='w-10 h-10 rounded-full bg-[#915eff]' />
        <div className='w-1 sm:h-96 h-20 violet-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hey  I'm <span className='text-red-800'>Faisal</span></h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100`}> A linux administrator <br className='sm:block hidden'/>  & A Web Developer</p>
      </div>

     
    </div>
    <ComputersCanvas/>
    </section>
   
   

   
  )
}

export default Hero;