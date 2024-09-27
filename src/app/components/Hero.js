"use client"
import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/search";

// next images
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// variant
import { fadeIn } from "../variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext)
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
       <div className="container mx-auto h-full xl:pt-10">
          {/* text & img wrapper */}
          <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
            {/* text */}
            <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">

              <motion.h1 
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.6}}
                className="h1 mt-5">
              Ride Your Way, <span className="text-accent">Own the Day</span> with our finest offers!{' '}
              </motion.h1>

              <motion.p
               variants={fadeIn('down', 0.4)}
               initial="hidden"
               whileInView={'show'}
               viewport={{once: false, amount: 0.6}}
               className="description max-w-[550px] mx-auto xl:mx-0 mb-6 
              xl:mb-10">Why own when you can rent for less? Cruise in style without breaking the bank.
                 Affordable rides, unlimited freedom!</motion.p>

                 {/* btn */}
                 <motion.div
                  variants={fadeIn('down', 0.6)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{once: false, amount: 0.8}}
                   className="flex gap-x-3 justify-center xl:justify-start">

                  {/* btn-google play store */}
                  <button className="lg:-ml-5">
                    <Image src={'/icons/buttons/google-play-badge-2022-2.svg'}
                    width={250}
                    height={45}
                     />
                  </button>

                    {/* btn-apple store */}
                  <button className="sm:-ml-4 lg:-ml-5">
                  <Image src={'/icons/buttons/available-on-the-app-store.svg'}
                    width={200}
                    height={32}
                     />
                  </button>
                  
                 </motion.div>
            </div>
            {/* ima car */}
            <motion.div 
             variants={fadeIn('up', 0.6)}
             initial="hidden"
             whileInView={'show'}
             viewport={{once: false, amount: 0.6}}
             className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[800px] 
                        xl:-right-[100px] min-[1680px]:right-[120px] xl:top-0 sm:-left-[20px] md:block" >
              <Image
               src={'/icons/hero2.png'}
                fill
                alt=""
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                priority
              />
            </motion.div>
          </div>
       </div>
      {searchActive ? (
        <motion.div
         initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
        className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  )
};
