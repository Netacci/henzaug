import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Slider from '../../components/slider/Slider';
const Hero = () => {
  return (
    <section id='home' className='relative h-screen'>
      <Slider />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className='absolute top-[100px] md:bottom-0 left-[45%] md:left-[49%] md:-translate-x-1/2 lg:bottom-10 transform -translate-x-1/2, cursor-pointer  '
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
      >
        <ChevronDown className='w-10 h-10 text-white' />
      </motion.div>
    </section>
  );
};

export default Hero;
