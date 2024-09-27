"use client"

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import  { Pagination } from 'swiper/modules';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// framer motion
import { motion } from 'framer-motion';

//  variants
import { fadeIn } from '../variants';

// next image
import Image from 'next/image';

// data
const testimonialData = [
  {
    id: 1,
    name: 'James Brown',
    job: 'CEO AutoCheck Motors',
    avatar: '/icons/roundedthree.png',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    name: 'Jane Doe',
    job: 'Digital Marketer, BrandTom',
    avatar: '/icons/roundedtwo.png',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    name: 'Sarah Jannise',
    job: 'Client Manager FlexJob',
    avatar: '/icons/roundedone.png',
    testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];


export default function TestimonialSlider() {
  return (
    <motion.div
    variants={fadeIn('up', 0.4)}
    initial="hidden"
    whileInView={'show'}
    viewport={{once: false, amount: 0.6}}
    className='container mx-auto'
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className='h-[480px] xl:h-[450px]'
      >
        {testimonialData.map((person, index) => {
          const { name, job, avatar, testimony } = person;
          return (
          <SwiperSlide key={index}>
             <div className='flex flex-col justify-center items-center text-center'>
              <FaQuoteLeft className='text-7xl text-accent mb-6' />
              <div className='text-2xl xl:text-4xl max-w-[874px] mb-6 font-medium'>
                {testimony}
              </div>
              <Image
                src={avatar}
                width={64}
                height={64}
                alt=''
                className='mb-4'
                />
                <div className='text-lg font-medium'>{name}</div>
                <div className='text-secondary'>{job}</div>
             </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  )
}
