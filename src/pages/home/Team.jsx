import { teamMembers } from '../../config/team';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Team = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleMemberBio = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
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
    <section id='team' className='pt-20 pb-6'>
      <div className='container mx-auto px-4'>
        <h2 className='text-sm text-orange-500 font-bold uppercase mb-12 text-center'>
          MEET OUR MANAGEMENT TEAM
        </h2>

        <div className='flex gap-8 flex-col md:flex-row'>
          {teamMembers?.map((member, index) => {
            return (
              <motion.div
                key={index}
                className={`bg-white shadow-md rounded-lg overflow-hidden w-full md:w-[calc(50%-1.5rem)] ${
                  expandedMember === index ? 'expanded' : 'collapsed'
                }`}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
              >
                <div className='w-full aspect-square mb-4 h-64'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-contain'
                  />
                </div>
                <div className='flex items-center p-4 pt-0'>
                  <div className='flex-grow text-center w-full'>
                    <h3 className='text-lg font-bold'>{member.name}</h3>
                    <p className='text-orange-500 font-semibold'>
                      {member.title}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleMemberBio(index)}
                    className='ml-2 hover:bg-gray-100 rounded-full p-1'
                  >
                    {expandedMember === index ? (
                      <ChevronUp className='text-gray-500' />
                    ) : (
                      <ChevronDown className='text-gray-500' />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {expandedMember === index && (
                    <motion.div
                      className='p-4 bg-gray-50 text-sm border-t'
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className='mb-2'>{member.bio}</p>
                      {member.bio2 && <p>{member.bio2}</p>}
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

export default Team;
