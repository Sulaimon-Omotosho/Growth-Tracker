import DashboardPage from '@/components/userDashboard/DashboardPage'
import { getUser } from '@/lib/actions/member'
import { auth } from '@/lib/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async ({ params: { userId } }: SearchParamProps) => {
  const session = await auth()
  if (!session?.user) {
    redirect('/')
  }

  const user = await getUser(userId)

  // console.log(user.role)

  return (
    <>
      <DashboardPage />
    </>
  )
}

export default Dashboard
