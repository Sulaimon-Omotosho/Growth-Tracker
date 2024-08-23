import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='max-h-screen min-h-screen remove-scrollbar flex'>
      {/* LEFT */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 '>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2 h-16'
        >
          <Image
            src='/assets/images/logo-hicc.jpeg'
            height={500}
            width={500}
            alt='logo'
            className='h-10 w-fit rounded-full ring-1 ring-black'
          />
          <span className='hidden lg:block font-bold'>Growth Tracker</span>
        </Link>
        <Sidebar />
      </div>
      {/* RIGHT */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] dark:bg-dark-300 overflow-scroll remove-scrollbar flex flex-col'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
