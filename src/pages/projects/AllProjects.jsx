import { projects } from '../../config/projectData';
import Layout from '../../components/layout/Layout';

import ProjectCard from '../../components/projectCard/ProjectCard';
const AllProjects = () => {
  return (
    <Layout>
      <section id='projects' className='pt-20 pb-6'>
        <div className='container mx-auto p-4 pt-10'>
          <h2 className='text-xl  font-bold uppercase mb-12 text-center'>
            All PROJECTS
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AllProjects;
