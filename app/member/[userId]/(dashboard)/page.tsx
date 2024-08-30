import React from 'react'
import AdminDashboardPage from './admin/page'
import { getUser } from '@/lib/actions/member'
import MembersPage from './member/page'
import LeadersPage from './leader/page'

const page = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId)

  // console.log(user.role)

  return (
    <div>
      {user.role === 'ADMIN' ? (
        <AdminDashboardPage userId={userId} />
      ) : user.role === 'LEADER' ? (
        <LeadersPage />
      ) : (
        <MembersPage />
      )}
    </div>
  )
}

export default page
