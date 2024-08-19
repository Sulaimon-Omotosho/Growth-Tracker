import Logout from '@/components/Logout'
import React, { ReactNode } from 'react'

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=''>
        <Logout />
      </div>
      {children}
    </div>
  )
}

export default layout
