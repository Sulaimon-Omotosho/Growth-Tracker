'use client'
import { logout } from '@/lib/actions/auth'
import { auth } from '@/lib/auth'
import React from 'react'

const Logout = () => {
  // const session = await auth()

  return (
    <>
      {/* {session?.user && ( */}
      <div onClick={() => logout()}>
        <div className='bg-gray-600 text-white text-sm py-2 px-4 rounded-md cursor-pointer'>
          Logout
        </div>
      </div>
      {/* )} */}
    </>
  )
}

export default Logout
