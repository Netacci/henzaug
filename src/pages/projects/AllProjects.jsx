import { projects } from '../../config/projectData';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import ProjectCard from '../../components/projectCard/ProjectCard';
const AllProjects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Layout>
      <section id='projects' className='pt-20 pb-6'>
        <div className='container mx-auto p-4 pt-10'>
          <h2 className='text-xl  font-bold uppercase mb-12 text-center'>
            All PROJECTS
          </h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AllProjects;
