// import PatientForms from '@/components/forms/PatientForms'
// import PasskeyModal from '@/components/PasskeyModal'
import Logout from '@/components/Logout'
import { Button } from '@/components/ui/button'
// import { getSession } from '@/lib/actions/session.actions'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  // const isAdmin = searchParams.admin === 'true'
  // const session = await getSession()

  return (
    <div className='flex h-screen max-h-screen'>
      {/* {isAdmin && <PasskeyModal />} */}

      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/images/HICC-logo.jpg'
            height={1000}
            width={1000}
            alt='Patient'
            className='mb-12 h-80 w-fit'
          />
          <Link
            href='/login'
            // href={session.isLoggedIn ? '/dashboard' : 'login'}
          >
            <Button className={'shad-primary-btn w-full'}>Welcome</Button>
          </Link>

          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              © 2024 Growth Tracker
            </p>
            {/* <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link> */}
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
