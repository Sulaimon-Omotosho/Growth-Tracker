import { getUserByEmail } from '@/lib/actions/member'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const RedirectPage = async () => {
  const session = await auth()
  const user = await getUserByEmail(session?.user?.email!)

  const userId = user.id

  if (session?.user) {
    redirect(`/member/${userId}/admin`)
  }

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex gap-4 flex-col'>
        <div className='flex flex-col items-center gap-x-2 text-sm'>
          {session?.user?.name}
          {session?.user?.image && (
            <Image
              className='rounded-full'
              width={30}
              height={30}
              alt='Avatar'
              src={session?.user?.image}
            />
          )}
        </div>
        <h1 className='text-2xl font-extrabold'>Redirecting ...</h1>
      </div>
    </div>
  )
}

export default RedirectPage
