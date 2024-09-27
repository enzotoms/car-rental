"use client"

// image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

// icons
import { MdHandshake, MdKey, MdTrendingUp } from 'react-icons/md';



export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
        className='h2 text-center mt-8'>Top-notch excellence and customer satisfaction</motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
        className='max-w-[680px] text-center mx-auto mb-2'>Choose us for your car rental needs because we prioritize reliability,
           affordability, and customer satisfaction. With a diverse fleet of well-maintained
            vehicles, flexible rental plans, and 24/7 customer support, we ensure a smooth
             and stress-free experience every time. Whether it's a quick city trip or a
              long-term rental, we're committed to providing a seamless journey from
               start to finish!
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.6}}
        className='hidden md:flex justify-center mt-6 mb-6 xl:mb-3'>
          <Image src={'/icons/redcar.png'} width={800} height={420} alt='' />
        </motion.div>
        {/* grid items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.4}}
        className='flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4
          xl:gap-y-0 xl:gap-x-[30px]'>
          {/* item 1 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdKey className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>Easy Maintainance</h3>
            <p className='hidden xl:flex'>Our booking process is quick and hassle-free, ensuring
               you get the perfect ride in no time.
            </p>
          </div>

          {/* item 2 */}
          <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdTrendingUp className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>Renting Made Simple and Easy</h3>
            <p className='hidden xl:flex'>Our booking process is quick and hassle-free, ensuring
               you get the perfect ride in no time.
            </p>
          </div>

           {/* item 3 */}
           <div className='flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0'>
            <MdHandshake className='text-[38px] text-accent mb-4' />
            <h3 className='h3'>100% Top Service</h3>
            <p className='hidden xl:flex'>Our booking process is quick and hassle-free, ensuring
               you get the perfect ride in no time.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
