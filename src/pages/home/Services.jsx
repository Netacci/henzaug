import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../config/serviceData';
import { ChevronRight } from 'lucide-react';
const Services = () => {
  const [openService, setOpenService] = useState(null);
  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <section id='services' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-sm text-orange-500 font-bold uppercase mb-12'>
            OUR SERVICES
          </h2>
          <h3 className='text-2xl md:text-3xl font-bold mb-8'>
            We Provide Best Quality Services For You!
          </h3>
        </div>

        <div className='max-w-3xl mx-auto mt-16'>
          {services.map((service) => {
            const isOpen = openService === service.id;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className='border-b border-gray-200 last:border-b-0'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
              >
                <div
                  className='py-6 cursor-pointer'
                  onClick={() => toggleService(service.id)}
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-6'>
                      <span className='text-sm text-orange-500 font-semibold w-8'>
                        <Icon className='h-5 w-5 text-orange-500' />
                      </span>
                      <h4 className='text-lg md:text-xl font-semibold'>
                        {service.title}
                      </h4>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight
                        className={`h-5 w-5 ${
                          isOpen ? 'text-orange-500' : 'text-gray-400'
                        }`}
                      />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className='overflow-hidden'
                    >
                      <div className='pl-14 pr-4 pb-6'>
                        <ul className='space-y-2 text-gray-600'>
                          {service.items.map((item, index) => (
                            <li className='flex items-center' key={index}>
                              <div className='w-2 h-2 bg-orange-500 rounded-full mr-2'></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
