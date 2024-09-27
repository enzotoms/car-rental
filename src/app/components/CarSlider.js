"use client"

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper css
import 'swiper/css';
import 'swiper/css/pagination';

// next image
import Image from 'next/image';

// icons
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// import swiper styles

// next link
import Link from "next/link";

// car store component


// import required modules
import  { Pagination } from 'swiper/modules';

const cars =[
  {
    type: 'Ford',
    model: 'Mustang GT',
    year: 2021,
    price: 29,
    rating: 4.5,
    image: '/icons/benz.png',
    info: [
      {
        icon: '/icons/carSlider/gear.png',
        text: 'Auto',
      },
       {
        icon:  '/icons/carSlider/seat.png',
        text: '5 Seats',
      },
       {
        icon:  '/icons/carSlider/fuel.png',
        text: 'Fuel',
      },
       {
        icon:  '/icons/carSlider/engine.png',
        text: '1600 HP',
      },
       {
        icon: '/icons/carSlider/wheel.png',
        text: 'Front',
      },
       {
        icon:  '/icons/carSlider/ac.png',
        text: 'AC',
      },
    ]
  },
   {
    type: 'Hilux',
    model: 'Toyota',
    year: 20212,
    price: 50,
    rating: 5,
    image: '/icons/benz.png',
    info: [
      {
        icon: '/icons/carSlider/gear.png',
        text: 'Auto',
      },
       {
        icon:  '/icons/carSlider/seat.png',
        text: '5 Seats',
      },
       {
        icon:  '/icons/carSlider/fuel.png',
        text: 'Fuel',
      },
       {
        icon:  '/icons/carSlider/engine.png',
        text: '2000 HP',
      },
       {
        icon: '/icons/carSlider/wheel.png',
        text: 'Front',
      },
       {
        icon:  '/icons/carSlider/ac.png',
        text: 'AC',
      },
    ]
  },
   {
    type: 'SUV',
    model: 'Toyota Prado',
    year: 2023,
    price: 100,
    rating: 5,
    image: '/icons/benz.png',
    info: [
      {
        icon: '/icons/carSlider/gear.png',
        text: 'Auto',
      },
       {
        icon:  '/icons/carSlider/seat.png',
        text: '5 Seats',
      },
       {
        icon:  '/icons/carSlider/fuel.png',
        text: 'Fuel',
      },
       {
        icon:  '/icons/carSlider/engine.png',
        text: '3000 HP',
      },
       {
        icon: '/icons/carSlider/wheel.png',
        text: 'Front',
      },
       {
        icon:  '/icons/carSlider/ac.png',
        text: 'AC',
      },
    ]
  },
   {
    type: 'Sport',
    model: 'Mercesdez E350',
    year: 2023,
    price: 130,
    rating: 5,
    image: '/icons/benz.png',
    info: [
      {
        icon: '/icons/carSlider/gear.png',
        text: 'Auto',
      },
       {
        icon:  '/icons/carSlider/seat.png',
        text: '5 Seats',
      },
       {
        icon:  '/icons/carSlider/fuel.png',
        text: 'Fuel',
      },
       {
        icon:  '/icons/carSlider/engine.png',
        text: '3000 HP',
      },
       {
        icon: '/icons/carSlider/wheel.png',
        text: 'Front',
      },
       {
        icon:  '/icons/carSlider/ac.png',
        text: 'AC',
      },
    ]
  },
   {
    type: 'Mazda',
    model: 'Jeep',
    year: 2023,
    price: 130,
    rating: 3.5,
    image: '/icons/benz.png',
    info: [
      {
        icon: '/icons/carSlider/gear.png',
        text: 'Auto',
      },
       {
        icon:  '/icons/carSlider/seat.png',
        text: '5 Seats',
      },
       {
        icon:  '/icons/carSlider/fuel.png',
        text: 'Fuel',
      },
       {
        icon:  '/icons/carSlider/engine.png',
        text: '1600 HP',
      },
       {
        icon: '/icons/carSlider/wheel.png',
        text: 'Front',
      },
       {
        icon:  '/icons/carSlider/ac.png',
        text: 'AC',
      },
    ]
  },
  {
    type: 'Convertible',
    model: 'Corolla',
    year: 2023,
    price: 130,
    rating: 3.5,
    image: '/icons/benz.png',
    info: [
      {
        icon: '/icons/carSlider/gear.png',
        text: 'Auto',
      },
       {
        icon:  '/icons/carSlider/seat.png',
        text: '5 Seats',
      },
       {
        icon:  '/icons/carSlider/fuel.png',
        text: 'Fuel',
      },
       {
        icon:  '/icons/carSlider/engine.png',
        text: '1600 HP',
      },
       {
        icon: '/icons/carSlider/wheel.png',
        text: 'Front',
      },
       {
        icon:  '/icons/carSlider/ac.png',
        text: 'AC',
      },
    ]
  },
]

export default function CarSlider() {
  return (
   <motion.div
   variants={fadeIn('up', 0.4)}
   initial="hidden"
   whileInView={'show'}
   viewport={{once: false, amount: 0.2}}
   className='container mx-auto'>
      <Swiper 
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
       modules={[Pagination]}
        className='h-[480px] xl:h-[500px]'
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15},
        640: { slidesPerView: 2, spaceBetween: 32},
        1260: { slidesPerView: 3, spaceBetween: 32},
    }}>
      {cars.map((car, index) => {
        return <SwiperSlide key={index}>
          <div className='max-w-[385px] mx-auto sm:mx-0'>
            <Image src={car.image} width={380} height={284} alt='' />
            <div className='flex justify-between'>
              <div>
                <div className='text-[13px] text-secondary uppercase'>{car.type}</div>
                <h3 className='text-lg uppercase font-bold'>{car.model}</h3>
                 <div className='mb-5 text-accent font-semibold uppercase'>{car.price}/day</div>
              </div>
               {/* stars */}
               <div className='flex gap-x-2 text-yellow-400 h-max'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
               </div>
            </div>
           {/* car info */}
            <div className='flex gap-x-3 xl:gap-x-4 w-max mb-10'>
              {car.info.map((item, index) => {
              return (
                <div  key={index} className='flex flex-col items-center'>
                  <div className='bg-primary w-10 h-8 rounded-full flex justify-center items-center mb-2'>
                    <Image
                     src={item.icon}
                    width={24}
                    height={24}
                    alt=''
                    />
                  </div>
                    <div className='text-[12px] uppercase'>{item.text}</div>

                </div>
              )
            })}</div>
               
                  <button className='btn btn-accent btn-lg'>
                    See More Info!
                  </button>
                


               
          </div>
        </SwiperSlide>
      })}
      </Swiper>
   </motion.div>
  )
}
