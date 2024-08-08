'use client'

import RegisterForm from '@/components/forms/RegisterForm'
// import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = async ({ params: { userId } }: SearchParamProps) => {
  // const user = await getUser(userId)

  return (
    <div className='flex h-screen max-h-screen'>
      <section className='remove-scrollbar container '>
        <div className='sub-container max-w-[860px] flex-1 flex-col py-10'>
          <Image
            src='/assets/images/HICC-logo.jpg'
            height={1000}
            width={1000}
            alt='HICC'
            className='mb-12 h-10 w-fit'
          />

          <RegisterForm user='testing' />

          <p className='copyright py-12'>© 2024 Growth Track</p>
        </div>
      </section>

      <Image
        src='/assets/images/Growthtrack-img1.jpg'
        height={1000}
        width={1000}
        alt='Growth Track'
        className='side-img max-w-[390px]'
      />
    </div>
  )
}

export default Register
