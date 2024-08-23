// import PatientForms from '@/components/forms/PatientForms'
// import PasskeyModal from '@/components/PasskeyModal'
import Logout from '@/components/Logout'
import { ModeToggle } from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  // const isAdmin = searchParams.admin === 'true'
  const session = await auth()

  return (
    <div className='flex h-screen max-h-screen relative'>
      {/* {isAdmin && <PasskeyModal />} */}
      <div className='absolute top-4 right-4'>
        <ModeToggle />
      </div>
      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/images/HICC-logo.jpg'
            height={1000}
            width={1000}
            alt='Patient'
            className='mb-12 h-80 w-fit'
          />
          <Link href='/login'>
            <Button className={'shad-primary-btn w-full'}>Welcome</Button>
          </Link>

          <div className='text-14-regular mt-20 items-center flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © 2024 Growth Tracker
            </p>
            {/* <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link> */}
            {!session?.user ? (
              ''
            ) : (
              <div className='flex gap-4'>
                {/* <div className='flex items-center gap-x-2 text-sm'>
                  {session?.user?.name}
                  {session?.user?.id}
                  {session?.user?.image && (
                    <Image
                      className='rounded-full'
                      width={30}
                      height={30}
                      alt='Avatar'
                      src={session?.user?.image}
                    />
                  )}
                </div> */}
                <Logout />
              </div>
            )}
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/Pastor-Bolaji-Idowu.png'
        height={1000}
        width={1000}
        alt='Patient'
        className='side-img max-w-[50%]'
      />
    </div>
  )
}
