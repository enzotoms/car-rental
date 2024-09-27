"use client"

// image
import Image from "next/image";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

export default function Brand  () {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
         variants={fadeIn('up', 0.4)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once: false, amount: 0.6}}
      className="container mx-auto">
          {/* car brand  */}
          <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap 
          xl:gap-x-6 xl:justify-between">
            <div>
              <Image
                src={'/icons/wolve.png'}
                width={62}
                height={50}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/benzlogo.png'}
                width={62}
                height={50}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/audi.png'}
                width={85}
                height={50}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/nissan.png'}
                width={60}
                height={60}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/lexus.png'}
                width={80}
                height={60}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/jaguar.png'}
                width={85}
                height={60}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/toyota.png'}
                width={80}
                height={50}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/hyunda.png'}
                width={85}
                height={60}
                alt=""
            />
            </div>
            <div>
              <Image
                src={'/icons/pegeuot.png'}
                width={62}
                height={30}
                alt=""
            />
            </div>
          </div>
      </motion.div>
    </section>
  )
}