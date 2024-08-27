// 'use client'

import { menuItems, role } from '@/constants'
import { logout } from '@/lib/actions/auth'
import { getUserByEmail } from '@/lib/actions/member'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DashboardLogout from './dashboard/DashboardLogout'

const Sidebar = async () => {
  const session = await auth()
  const user = await getUserByEmail(session?.user?.email!)

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
                  href={`/member/${user.id}/${item.href}`}
                  // href={item.href}
                  key={item.label}
                  className='flex items-center justify-center lg:justify-start gap-4 text-gray-600 dark:text-gray-300 dark:hover:text-gray-600 py-2 md:px-2 rounded-md hover:bg-susuSkyLight dark:hover:bg-susuPurple'
                >
                  <Image src={item.icon} alt='icon' width={20} height={20} />
                  <span className='hidden lg:block'>{item.label}</span>
                </Link>
              )
            }
          })}
        </div>
      ))}
      <DashboardLogout />
    </div>
  )
}

export default Sidebar
