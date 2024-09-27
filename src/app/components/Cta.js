"use client";

// next image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

export default function Cta() {
  return (
    <section className="h-screen flex items-center bg-gray-100" id="contact">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row xl:items-center'>
          {/* text */}
          <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
          <div className='max-w-[520px] mx-auto order-2 xl:order-none'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
             className='h2'>Get the mobile App now!
            </motion.h2>
            <motion.p
               variants={fadeIn('right', 0.4)}
               initial="hidden"
               whileInView={'show'}
               viewport={{once: false, amount: 0.6}}
               className='mb-10'
            >Experience convenience on the go! Download our mobile app now for fast,
             seamless access—anytime, anywhere!
            </motion.p>
            {/* btn */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
            className='flex gap-x-3 justify-center md:justify-start'>
              <button className=''>
                <Image
                  src='/icons/buttons/google-play-badge-2022-2.svg'
                  width={132}
                  height={36}
                  alt=""
                  />
              </button>
              <button>
              <Image
                  src='/icons/buttons/available-on-the-app-store.svg'
                  width={132}
                  height={36}
                  alt=""
                  />
              </button>
            </motion.div>
          </div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('left', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
          className='flex-1 flex justify-center order-1 md:order-none'>
            <Image src='/icons/phone.png'
              width={320}
              height={640}
              alt=""
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
