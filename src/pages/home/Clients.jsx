import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, User } from 'lucide-react';

const Clients = () => {
  return (
    <section id='clients' className='pt-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-sm text-orange-500 font-bold uppercase mb-12 text-center '>
          CLIENTS
        </h2>
        <h3 className='text-2xl md:text-3xl  font-bold mb-8 text-center'>
          We Proudly Serve a Diverse Client Base
        </h3>

        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card className='bg-white shadow-md'>
            <CardHeader className='border-b-2 border-orange-500 text-white p-6'>
              <div className='flex items-center space-x-4'>
                <Building className='h-8 w-8 text-orange-500' />
                <CardTitle className=' text-orange-500'> Government</CardTitle>
              </div>
            </CardHeader>
          </Card>

          <Card className='bg-white shadow-md'>
            <CardHeader className='border-b-2 border-orange-500 text-white p-6'>
              <div className='flex items-center space-x-4'>
                <Briefcase className='h-8 w-8 text-orange-500' />
                <CardTitle className=' text-orange-500'>
                  Private & Public Companies
                </CardTitle>
              </div>
            </CardHeader>
          </Card>

          <Card className='bg-white shadow-md'>
            <CardHeader className='border-b-2 border-orange-500  text-white p-6'>
              <div className='flex items-center space-x-4'>
                <User className='h-8 w-8 text-orange-500' />
                <CardTitle className=' text-orange-500'>
                  Individual Developers
                </CardTitle>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Clients;
