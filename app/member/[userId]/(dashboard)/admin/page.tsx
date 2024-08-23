import Announcement from '@/components/dashboard/Announcement'
import { AttendanceChart } from '@/components/dashboard/AttendanceChart'
import { CountChart } from '@/components/dashboard/CountChart'
import EventCalendar from '@/components/dashboard/EventCalendar'
import { FollowUpChart } from '@/components/dashboard/FollowUpChart'
import UserCard from '@/components/dashboard/UserCard'
import { getUser } from '@/lib/actions/member'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminDashboardPage = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  // if (user.role !== 'ADMIN') {
  //   redirect('/redirect')
  // }

  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row  pb-16'>
      {/* LEFT SIDE  */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CARD  */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='member' />
          <UserCard type='worker' />
          <UserCard type='leader' />
        </div>
        {/* MIDDLE CHARTS  */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNT CHART  */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART  */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS  */}
        <div className='w-full'>
          <FollowUpChart />
        </div>
      </div>
      {/* RIGHT SIDE  */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
        <Announcement />
      </div>
    </div>
  )
}

export default AdminDashboardPage
