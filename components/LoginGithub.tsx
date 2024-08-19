'use client'

import { login } from '@/lib/actions/auth'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const LoginGithub = () => {
  return (
    <div
      onClick={() => login('github')}
      className='w-full gap-4 flex items-center justify-center hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4'
    >
      <FaGithub className='text-white' />
      <p className='text-white'>Login with Github</p>
    </div>
  )
}

export default LoginGithub
