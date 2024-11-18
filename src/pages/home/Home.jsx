import Layout from '../../components/layout/Layout';
import About from './About';
import Clients from './Clients';

import Hero from './Hero';
import Projects from './Projects';
import Services from './Services';
import Team from './Team';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Team />
    </Layout>
  );
};

export default Home;
