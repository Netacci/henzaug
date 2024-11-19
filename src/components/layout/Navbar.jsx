import { Menu, X } from 'lucide-react';
import { useState } from 'react';
// import { Button } from '@/components/ui/button';
import LOGO from '../../assets/loggg.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navList = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className='fixed w-full z-50 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <img src={LOGO} alt='Logo' className='h-[50px] md:h-[70px]' />

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navList.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className='text-gray-600 hover:text-orange-500'
              >
                {item.name}
              </a>
            ))}

            {/* <Button className='bg-orange-500 hover:bg-orange-600 text-white px-6'>
              Get A Quote
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2'>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navList.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className='block px-3 py-2 text-gray-600 hover:text-orange-500'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
