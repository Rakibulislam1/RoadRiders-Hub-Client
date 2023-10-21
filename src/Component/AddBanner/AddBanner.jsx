// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import add1 from '../../assets/add_1.jpg'
import add2 from '../../assets/add_2.jpg'
import add3 from '../../assets/add_3.webp'


const AddBanner = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[50vh] md:h-[80vh] lg:h-[70vh]"
      >
        <div className='relative'>
        <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat' src={add1} alt="" /></SwiperSlide>
        <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat' src={add2} alt="" /></SwiperSlide>
        <SwiperSlide className='relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30'><img className='md:h-[80vh] h-[50vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat' src={add3} alt="" /></SwiperSlide>
        </div>
        <div className='absolute z-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h2 className='lg:text-4xl md:text-3xl text-lg font-bold text-white text-center capitalize'>The Easiest Way To Buy Your Next Car</h2>
          <div className='flex lg:gap-10 gap-5 justify-center'>
          <a className='text-white text-center underline lg:text-lg md:block hidden lg:mt-8 mt-2 hover:text-[#11285A]' href="">Shop New</a>
          <a className='text-white text-center underline lg:text-lg md:block hidden lg:mt-8 mt-2 hover:text-[#11285A]' href="">Shop Used</a>
          <a className='text-white text-center underline lg:text-lg md:block hidden lg:mt-8 mt-2 hover:text-[#11285A]' href="">Shop Electric</a>
          </div>
        </div>
        
      </Swiper>
  );
};

export default AddBanner;