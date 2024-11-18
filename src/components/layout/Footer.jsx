import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Henzaug BV Ltd</h3>
            <p>Building excellence since 1994</p>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  className='text-base text-gray-300 hover:text-white'
                  href='/projects'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-base text-gray-300 hover:text-white'
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white'>
                <Facebook size={24} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <Twitter size={24} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <Instagram size={24} />
              </a>
              <a href='#' className='text-gray-400 hover:text-white'>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p>&copy; 2024 Henzaug BV Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
