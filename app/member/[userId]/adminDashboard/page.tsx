import { getUser } from '@/lib/actions/member'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminDashboardPage = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  if (user.role !== 'ADMIN') {
    redirect('/')
  }

  return (
    <div className='p-4 h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex items-center justify-center text-white '>
      <h1 className='text-3xl font-bold'>Admin Dashboard Page</h1>
    </div>
  )
}

export default AdminDashboardPage
