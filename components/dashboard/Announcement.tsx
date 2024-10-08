import React from 'react'

const Announcement = () => {
  return (
    <div className='bg-white dark:bg-black p-4 rounded-md'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className='text-xs'>View All</span>
      </div>
      <div className='flex flex-col gap-4 mt-4 text-gray-800'>
        <div className='bg-susuSkyLight dark:bg-susuSky rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem, ipsum dolor.</h2>
            <span className='text-xs text-gray-400 bg-white dark:bg-black rounded-md px-1 py-1'>
              2025-01-03
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            commodi nisi perspiciatis cupiditate suscipit.
          </p>
        </div>
        <div className='bg-susuPurpleLight dark:bg-susuPurple rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem, ipsum dolor.</h2>
            <span className='text-xs text-gray-400 bg-white dark:bg-black rounded-md px-1 py-1'>
              2025-01-03
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            commodi nisi perspiciatis cupiditate suscipit.
          </p>
        </div>
        <div className='bg-susuYellowLight dark:bg-susuYellow rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>Lorem, ipsum dolor.</h2>
            <span className='text-xs text-gray-400 bg-white dark:bg-black rounded-md px-1 py-1'>
              2025-01-03
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            commodi nisi perspiciatis cupiditate suscipit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcement
