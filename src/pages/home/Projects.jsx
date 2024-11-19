import { projects } from '../../config/projectData';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../../components/projectCard/ProjectCard';
const Projects = () => {
  const navigate = useNavigate();
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  const projectView = projects.slice(0, 6);
  return (
    <section id='projects' className='pt-20 pb-6'>
      <div className='container mx-auto px-4'>
        <h2 className='text-sm text-orange-500 font-bold uppercase mb-12 text-center'>
          PROJECTS
        </h2>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          {projectView.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
        <div className='text-center mt-12'>
          <Button
            className='bg-orange-500 hover:bg-orange-600'
            onClick={() => navigate('/projects')}
          >
            View All Projects
            <ChevronRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
