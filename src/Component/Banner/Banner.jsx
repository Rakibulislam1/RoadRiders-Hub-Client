// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'

function Banner() {
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
        className="mySwiper h-[50vh] md:h-[80vh] lg:h-[120vh]"
      >
        <SwiperSlide><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full' src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full' src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full' src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='md:h-[80vh] h-[50vh] lg:h-[120vh] w-full' src={banner4} alt="" /></SwiperSlide>
        
        
      </Swiper>
  );
}

export default Banner;
