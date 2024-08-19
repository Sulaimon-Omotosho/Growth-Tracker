'use client'

import { login } from '@/lib/actions/auth'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const LoginGoogle = () => {
  return (
    // <div
    //   onClick={() => login('google')}
    //   className='w-full gap-4 flex items-center justify-center hover:cursor-pointer mt-6 h-12 bg-blue-600 rounded-md p-4'
    // >
    //   <FaGoogle className='text-white' />
    //   <p className='text-white'>Login with Google</p>
    // </div>
                <Button
              onClick={() => login('google')}
              className='flex gap-4 p-4 ring-1 ring-orange-200 rounded-md w-full'
            >
              <Image
                src='/assets/images/google.png'
                alt=''
                width={20}
                height={20}
                className='object-contain'
              />
              <span>Use Google</span>
            </Button>
  )
}

export default LoginGoogle
