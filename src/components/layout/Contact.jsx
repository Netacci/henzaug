import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Four from '../../assets/about.jpg';

const Contact = () => {
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-sm text-orange-500 font-bold uppercase mb-12 text-center'>
          CONTACT US
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We&apos;d love to hear from you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                  <Phone className='h-5 w-5 text-orange-500' />
                  <span>08037842958 </span> <span>08035516530</span>
                </div>
                <div className='flex items-center'>
                  <Mail className='h-5 w-5 mr-2 text-orange-500' />
                  <span>henzbv@gmail.com</span>
                </div>
                <div className='flex items-center'>
                  <Clock className='h-5 w-5 mr-2 text-orange-500' />
                  <span>Mon - Fri: 8:00 - 17:00</span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='h-5 w-5 mr-2 text-orange-500' />
                  <span>
                    NO. 33, ODARANWERE ROAD OFF NTA ROAD MGBUOBA, PORT HARCOURT,
                    RIVERS STATE
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Office Location</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={Four}
                alt='Office'
                className='w-full h-64 object-cover rounded-lg'
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
