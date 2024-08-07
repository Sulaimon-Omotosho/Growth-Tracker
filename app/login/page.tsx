import LoginForm from '@/components/forms/LoginInForm'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center '>
      {/* Box */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] xl:w-1/2 gap-8 '>
        {/* Image Container */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image
            src='/assets/images/Growthtrack-img1.jpg'
            alt=''
            fill
            className='object-cover'
          />
        </div>
        {/* Form Container */}
        <div className=' flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-center text-xl lg:text-3xl'>Log In</h1>
          <LoginForm />
          <Button className='flex gap-4 p-4 ring-1 ring-orange-200 rounded-md'>
            <Image
              src='/assets/images/google.png'
              alt=''
              width={20}
              height={20}
              className='object-contain'
            />
            <span>Use Google</span>
          </Button>
          <p className='text-sm'>
            Any issues?
            <Link href='/' className='underline hover:text-blue-500'>
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
