'use client'

import { events } from '@/constants'
import Image from 'next/image'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date())

  return (
    <div className=' p-4 rounded-md w-full'>
      <Calendar
        className='w-full dark:bg-black'
        onChange={onChange}
        value={value}
      />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image
          src='/assets/icons/moreDark.png'
          alt='icon'
          width={20}
          height={20}
        />
      </div>
      <div className='flex flex-col'>
        {events.map((event) => (
          <div
            className='p-5 rounded-md border2 border-gray-100 border-t-4 odd:border-t-susuSky even:border-t-susuPurple'
            key={event.id}
          >
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-gray-600'>{event.title}</h1>
              <span className='text-xs text-gray-300'>{event.startTime}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{event.class}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalendar
