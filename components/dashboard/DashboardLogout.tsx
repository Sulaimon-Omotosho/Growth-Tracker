'use client'

import { logout } from '@/lib/actions/auth'
import Image from 'next/image'
import React from 'react'

const DashboardLogout = () => {
  return (
    <div
      onClick={() => logout()}
      className='flex items-center justify-center lg:justify-start gap-4 text-gray-600 dark:text-gray-300 dark:hover:text-gray-600 py-2 md:px-2 rounded-md hover:bg-susuSkyLight dark:hover:bg-susuPurple cursor-pointer'
    >
      <Image src='/assets/icons/logout.png' alt='icon' width={20} height={20} />
      <span className='hidden lg:block'>Logout</span>
    </div>
  )
}

export default DashboardLogout
