import { auth } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'
import Logout from './Logout'
import Image from 'next/image'

const Navbar = async () => {
  const session = await auth()

  return (
    <nav className='border-b bg-slate-300 w-full flex items-center px-10 h-[80px]'>
      <div className=' flex w-full items-center justify-between my-4'>
        <Link className='font-bold' href='/'>
          Home
        </Link>

        <div className='flex items-center gap-x-5'>
          <Link href='/middleware'>Middleware</Link>{' '}
          <Link href='/server'>Server</Link>
        </div>

        <div className='flex items-center gap-x-5'>
          {!session?.user ? (
            <Link href='/login'>
              <div className='bg-blue-600 text-white text-sm py-2 px-4 rounded-sm'>
                Login
              </div>
            </Link>
          ) : (
            <div className='flex gap-4'>
              <div className='flex items-center gap-x-2 text-sm'>
                {session?.user?.name}
                {session?.user?.id}
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
              <Logout />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
