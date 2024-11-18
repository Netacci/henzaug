import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import One from '../../assets/1.jpg';
import Two from '../../assets/2.jpg';
import Three from '../../assets/3.jpg';
import Four from '../../assets/4.jpg';
import Five from '../../assets/5.jpg';
import Six from '../../assets/6.jpg';
import Seven from '../../assets/7.jpg';
import Eight from '../../assets/8.jpg';
import Nine from '../../assets/9.jpg';
import Ten from '../../assets/10.jpg';
import Eleven from '../../assets/11.jpg';
import Twelve from '../../assets/12.jpg';
import Thirteen from '../../assets/13.jpg';
import Fourteen from '../../assets/14.jpeg';
import Fifteen from '../../assets/15.jpeg';
import Sixteen from '../../assets/16.jpeg';
import Seventeen from '../../assets/17.jpeg';

const Slider = () => {
  const navigate = useNavigate();
  const images = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
  ];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      loop={true}
      className='mySwiper'
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className='relative w-full h-full'>
            <div className='absolute inset-0 bg-black/60' />
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
              <h1 className='text-xl md:text-3xl font-bold mb-4 text-center'>
                HENZAUG BUSINESS PHILOSOPHY
              </h1>
              <p className='text-lg md:text-xl mb-8 w-full md:w-3/4 mx-auto px-2 text-center'>
                The philosophy guiding{' '}
                <span className='text-orange-500 font-bold'>HENZAUG</span> in
                servicing the clients is the delivery of her services in
                conformance with the highest possible standards. Hence{' '}
                <span className='text-orange-500 font-bold'>QUALITY</span> is
                the company’s watchword. The company has therefore imbedded{' '}
                <span className='text-orange-500 font-bold'>
                  TOTAL QUALITY MANAGEMENT (TQM)
                </span>{' '}
                in order to achieve continuous improvement in the services
                delivery.
              </p>
              <Button
                className='bg-orange-500 hover:bg-orange-600'
                onClick={() => navigate('/projects')}
              >
                View Projects
                <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
