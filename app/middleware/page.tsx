import { auth } from '@/lib/auth'
import Image from 'next/image'
import React from 'react'

const MiddlewarePage = async () => {
  const session = await auth()
  return (
    <div className='flex h-full items-center justify-center flex-col gap-2'>
      <h1 className='text-3xl'>MiddleWare Page</h1>
      <Image
        className='rounded-full w-44'
        width={1000}
        height={1000}
        alt='Avatar'
        src={session?.user?.image}
      />
      <p className='text-lg'>{session?.user?.email}</p>
    </div>
  )
}

export default MiddlewarePage
