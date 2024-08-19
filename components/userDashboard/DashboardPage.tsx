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
