import { menuItems, role } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='max-h-[90%] overflow-scroll remove-scrollbar'>
      {menuItems.map((i) => (
        <div className='flex flex-col gap-2' key={i.title}>
          <span className='hidden lg:block text-gray-600 dark:text-gray-300 font-light my-4'>
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className='flex items-center justify-center lg:justify-start gap-4 text-gray-600 dark:text-gray-300 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight'
                >
                  <Image src={item.icon} alt='icon' width={20} height={20} />
                  <span className='hidden lg:block'>{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
