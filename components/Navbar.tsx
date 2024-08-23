import { auth } from '@/lib/auth'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from './ModeToggle'
import { getUserByEmail } from '@/lib/actions/member'

const Navbar = async () => {
  const session = await auth()
  const user = await getUserByEmail(session?.user?.email!)

  // console.log(user.image)

  return (
    <nav className='flex items-center justify-between p-4'>
      {/* SEARCH BAR  */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image
          src='/assets/icons/search.png'
          alt='search'
          width={14}
          height={14}
        />
        <input
          type='text'
          placeholder='Search...'
          className='w-[200px] p-2 bg-transparent outline-none'
        />
      </div>

      {/* ICONS AND USER  */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <ModeToggle />
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image
            src='/assets/icons/message.png'
            alt='icon'
            width={20}
            height={20}
          />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image
            // src='/assets/icons/announcement.png'
            src={user?.image ? user.image : '/assets/icons/announcement.png'}
            alt='icon'
            width={20}
            height={20}
          />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>
            3
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>{user.name}</span>
          <span className='text-[10px] text-gray-500 dark:text-gray-300 text-right'>
            {user.role}
          </span>
        </div>
        <Image
          src='/assets/icons/avatar.png'
          alt='avatar'
          width={36}
          height={36}
          className='rounded-full'
        />
      </div>

      {/* <div className=' flex w-full items-center justify-between my-4'>
        <Link className='font-bold' href='/'>
          Home
        </Link>

        <div className='flex items-center gap-x-5'>
          <Link href='/middleware'>Middleware</Link>{' '}
          <Link href='/server'>Server</Link>
        </div>

        <div className='flex items-center gap-x-5'>
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
        </div>
        <ModeToggle />
      </div> */}
    </nav>
  )
}

export default Navbar
