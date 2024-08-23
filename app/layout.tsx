import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/lib/auth'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ModeToggle'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Growth Tracker',
  description: 'A web app used for tracking growth of HICC members',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <html lang='en'>
      <body
        className={cn('min-h-screen font-sans antialiased', fontSans.variable)}
      >
        {' '}
        <SessionProvider session={session}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {/* <Navbar /> */}
            {/* <ModeToggle /> */}
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
