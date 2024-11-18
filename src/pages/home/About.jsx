/* eslint-disable react/prop-types */
import { Card } from '@/components/ui/card';
import { Building, HardHat, Users } from 'lucide-react';
import ABOUT from '../../assets/1.jpg';
import { motion } from 'framer-motion';
import { about } from '../../config/aboutData';

const AboutCard = ({ icon, title, description }) => {
  return (
    <Card className='p-6 hover:shadow-lg transition-shadow animate-fadeIn'>
      <div className='flex items-center mb-4'>
        {icon}
        <h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
      </div>
      <p className='text-gray-600 mb-4'>{description}</p>
    </Card>
  );
};
const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <section id='about' className='py-20 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-sm text-orange-500 font-bold uppercase mb-2'>
          ABOUT US
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <p className='mb-4'>
              <span className=' font-semibold'>HENZAUG BV</span> is an
              indigenous private limited liability company registered in 1994 as
              a business enterprise and incorporated in 2008. It is established
              to offer Engineering, Construction and Technical Services. It’s
              service offerings cover Civil and Electrical Engineering, Building
              Construction, Water Resources Engineering and
              Quality/Environmental control and management.{' '}
              <span className=' font-semibold'>HENZAUG BV</span> is properly
              positioned to embark on any project, from conception to planning
              and execution, in her service areas.
            </p>
            <p className='mb-4'>
              The company is specifically conceived to handle projects in all
              sectors of the economy. The company’s clientele includes
              petroleum/petrochemicals companies, chemical and allied companies,
              governments, private project sponsors, petroleum producing
              communities and financial institutions.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
              <Card className='p-4 text-center'>
                <Building className='mx-auto mb-2 h-8 w-8 text-orange-500' />
                <h3 className='font-bold'>500+</h3>
                <p className='text-sm'>Projects Completed</p>
              </Card>
              <Card className='p-4 text-center'>
                <HardHat className='mx-auto mb-2 h-8 w-8 text-orange-500' />
                <h3 className='font-bold'>250+</h3>
                <p className='text-sm'>Skilled Workers</p>
              </Card>
              <Card className='p-4 text-center'>
                <Users className='mx-auto mb-2 h-8 w-8 text-orange-500' />
                <h3 className='font-bold'>1000+</h3>
                <p className='text-sm'>Happy Clients</p>
              </Card>
            </div>
          </div>
          <div>
            <div>
              <img
                src={ABOUT}
                alt='Photo by  Luke Besley'
                className='w-full h-full object-cover rounded-lg'
                style={{
                  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              />
            </div>
          </div>
        </div>
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {about.map((item, index) => (
            <AboutCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
