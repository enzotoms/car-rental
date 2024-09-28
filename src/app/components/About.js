"use client"

// next image
import Image from 'next/image';

// icon
import { FaCarTunnel } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import { GiAutoRepair } from "react-icons/gi";

// react count-up
import CountUp from 'react-countup';

// react intersection observer
import { useInView } from 'react-intersection-observer';

// motion
import { motion } from 'framer-motion';

// variant
import { fadeIn } from '../variants';


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className='h-screen flex items-center' id="about" ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:justify-between'>
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.6}}
          className='flex-1 mb-8 xl:mb-0'>
            <Image
                className='rounded-[20px]'
                src='/icons/bugatti.jpg'
                width={600}
                height={500}
                alt=''
                />
          </motion.div>
          {/* text */}
          <div className='flex-1 flex items-center xl:justify-center'>
            <div className='xl:max-w-[517px]'>
              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.6}}
              className='h2 mb-[10px]'>Rental & Repair Made Easy!</motion.h2>
              <motion.p
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.6}}
              className='mb-[20px] max-w-md'>we combine convenience and expertise to meet all your automotive needs.
                 Whether you're looking for a reliable rental to get around or top-notch 
                 repair services to keep your car running smoothly, we’ve got you covered. 
                </motion.p>
                {/* stats */}
                <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className='flex items-center gap-x-8 mb-5 mt-0'>
                  {/* car types */}
                  <div className='flex flex-col w-[100px]'>
                    <FaCarTunnel className="text-5xl text-accent mb-2" />
                    <div className='text-3xl font-black mb-2'>
                      {inView ? (
                      <CountUp start={0} end={60} duration={3} delay={1}  />
                      ) : null}
                      +
                    </div>

                    <div className='uppercase text-[13px] font-semibold text-secondary'>
                      car <br /> types
                    </div>
                  </div>

                       {/* repair outlet */}
                  <div className='flex flex-col w-[100px]'>
                    <GiHomeGarage className="text-5xl text-accent mb-2" />
                    <div className='text-3xl font-black mb-2'>
                      {inView ? (
                      <CountUp start={0} end={180} duration={3} delay={1}  />
                      ) : null}
                      +
                    </div>

                    <div className='uppercase text-[13px] font-semibold text-secondary'>
                      Renting <br /> Outlets
                    </div>
                  </div>

                       {/* repair points */}
                  <div className='flex flex-col w-[100px]'>
                    <GiAutoRepair className="text-5xl text-accent mb-2" />
                    <div className='text-3xl font-black mb-2'>
                      {inView ? (
                      <CountUp start={0} end={30} duration={3} delay={1}  />
                      ) : null}
                      
                    </div>

                    <div className='uppercase text-[13px] font-semibold text-secondary'>
                      Our Repair <br /> Points
                    </div>
                  </div>
                  {/* button */}
                </motion.div>
            
                <motion.button
                  variants={fadeIn('up', 1)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.6}}
                className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16
                   uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px] '>
                    View More Cars
                  </motion.button>
                  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
