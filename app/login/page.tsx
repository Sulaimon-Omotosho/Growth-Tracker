import LoginInForm from '@/components/forms/LoginInForm'
import LoginGoogle from '@/components/LoginGoogle'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center text-white '>
      <section className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] xl:w-1/2 gap-8 '>
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
        <div className=' flex flex-col gap-4 md:w-1/2'>
          <h1 className='font-bold text-center text-xl lg:text-3xl'>Log In</h1>
          <LoginInForm />
          <div className=''>
            <p className='text-center pb-3'>Or</p>
            <LoginGoogle />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
