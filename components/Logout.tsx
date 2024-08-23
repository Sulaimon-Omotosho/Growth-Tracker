'use client'
import { logout } from '@/lib/actions/auth'
import React from 'react'

const Logout = () => {
  return (
    <>
      <div onClick={() => logout()}>
        <div className='bg-gray-600 text-white text-sm py-2 px-4 rounded-md m-4 cursor-pointer'>
          Logout
        </div>
      </div>
    </>
  )
}

export default Logout
