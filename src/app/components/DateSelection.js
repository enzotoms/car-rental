"use client"

import React, {useState} from 'react';
import {Menu} from '@headlessui/react';

// icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

// react date
import { DateRange } from 'react-date-range';
import { format, addDays } from 'date-fns';

// react date range style
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file




export default function DateSelection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      // endDate: addDays(new Date(), 7),
      endDate: null,
      key: 'selection',
    },
  ]);


  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
    <div className='relative flex-1'>
      {/* btn */}
      <Menu.Button className='dropdown-btn w-full h-full flex flex-col
      items-center justify-center xl:items-start xl:pl-8'>
              <div className='flex flex-col xl:flex-row items-center xl:gap-x-2
              gap-y-2 xl:gap-y-0'> 
                <FaCalendarAlt className='text-red-600' />
                  <div className='text-[15px] uppercase font-bold'>
                  Choose Date
                  </div>
                </div>
                <div className='flex items-center gap-x-3 xl:ml-6'>
                  <div className='text-[13px] font-medium text-secondary'>
                    {format(date[0].startDate, 'dd/MMM/yyyy')}
                  </div>
                  <FaArrowRightLong className='text-[12px] text-accent' />
                  <div className='text-[13px] font-medium text-secondary'>
                    {date[0].endDate ? ( 
                      <div>{format(date[0].endDate, 'dd/MMM/yyyy')}</div>
                     ) : ( 
                      <div>{format(date[0].startDate, 'dd/MMM/yyyy')}</div>
                      )}
                    </div>
                </div>
        </Menu.Button>
      {/* menu */}
      <Menu.Items className='dropdown-menu shadow-lg absolute -top-96 xl:top-[90px] left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0
      rounded-[10px] overflow-hidden'>
        <DateRange 
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          rangeColors={['#FD5861']}
          showSelectionPreview={true}
          minDate={addDays(new Date(), 0)}
          direction='horizontal'
        />
      </Menu.Items>
    </div>
  </Menu>
  )
}
