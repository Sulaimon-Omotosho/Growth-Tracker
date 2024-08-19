import { auth } from '@/lib/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const ServerPage = async () => {
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }
  return (
    <div className='flex h-full items-center justify-center flex-col gap-2'>
      <h1 className='text-3xl'>Server Page</h1>
      <Image
        className='rounded-full w-44'
        width={1000}
        height={1000}
        alt='Avatar'
        src={session?.user?.image!}
      />
      <p className='text-lg'>{session?.user?.email}</p>
    </div>
  )
}

export default ServerPage
