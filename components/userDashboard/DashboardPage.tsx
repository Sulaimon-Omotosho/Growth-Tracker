// import { getUser } from '@/lib/actions/member'
// import { auth } from '@/lib/auth'
// import Link from 'next/link'
// import { redirect } from 'next/navigation'
// import React from 'react'

// const Dashboard = async (userId: string) => {
//   const session = await auth()
//   if (!session?.user) {
//     redirect('/')
//   }
//   const user = await getUser(userId)
//   return (
//     <div className='p-4 h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex items-center justify-center text-white '>
//       <div className='flex flex-col items-center justify-center gap-6'>
//         <h1 className='text-3xl font-bold'>Dashboard Page</h1>
//         {user.role === 'ADMIN' && (
//           <Link
//             className='text-green-700'
//             href={`/member/${userId}/adminDashboard`}
//           >
//             Admin
//           </Link>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard
import React from 'react'

const DashboardPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] flex items-center justify-center text-white '>
      <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className='text-3xl font-bold'>Dashboard Page</h1>
        {/* {user.role === 'ADMIN' && (
            <Link
              className='text-green-700'
              href={`/member/${userId}/adminDashboard`}
            >
              Admin
            </Link>
          )} */}
      </div>
    </div>
  )
}

export default DashboardPage
