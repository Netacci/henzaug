/* eslint-disable react/prop-types */
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div>{children}</div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
