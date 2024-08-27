'use client'

import { login } from '@/lib/actions/auth'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const LoginGoogle = () => {
  return (
    <Button
      onClick={() => login('google')}
      className='flex gap-4 p-4 ring-1 ring-orange-400 dark:ring-orange-200 rounded-md w-full'
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
