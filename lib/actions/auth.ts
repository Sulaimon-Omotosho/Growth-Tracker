'use server'

import { AuthError } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '../db'
import { signIn, signOut } from '../auth'
import { saltAndHashPassword } from '@/utils/helper'
import { getSession } from 'next-auth/react'

// GET USER BY EMAIL
const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    })
    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

// LOGIN
export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: '/' })
  revalidatePath('/')
}

// LOGOUT
export const logout = async () => {
  await signOut({ redirectTo: '/' })
  revalidatePath('/')
}

// LOGIN WITH EMAIL
export const loginWithEmail = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const existingUser = await getUserByEmail(email)
  if (!existingUser) {
    return { error: 'User not found' }
  }

  const loginData = {
    email,
    password,
    role: existingUser.role,
    redirectTo: '/',
  }

  try {
    await signIn('credentials', loginData)
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' }
        default:
          return { error: 'Wrong Password' }
      }
    }
    throw error
  }
  revalidatePath('/')
}

// SIGNUP WITH EMAIL
// export const signUpWithEmail = async (formData: FormData) => {
//   const email = formData.get('email') as string
//   const password = formData.get('password') as string

//   const existingUser = await getUserByEmail(email)
//   if (existingUser) {
//     return { error: 'User already exists' }
//   }

//   try {
//     const hash = saltAndHashPassword(password)
//     const newUser = await db.user.create({
//       data: {
//         email,
//         hashedPassword: hash,
//         role: 'USER',
//       },
//     })

//     const session = await getSession()

//     if (session?.user?.id) {
//       const userId = session.user.id
//       const loginData = {
//         email: newUser.email,
//         password,
//         redirectTo: `/member/${userId}/register`,
//       }

//       await signIn('credentials', loginData)
//     } else {
//       console.error('User ID not found in session')
//       throw new Error('Unexpected error: User ID missing')
//     }
//   } catch (error: any) {
//     if (error instanceof AuthError) {
//       return { error: 'Something went wrong during signup' }
//     }
//     throw error
//   }
//   revalidatePath('/')
// }

export const signUpWithEmail = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { error: 'User already exists' }
  }

  try {
    const hash = saltAndHashPassword(password)
    const newUser = await db.user.create({
      data: {
        email,
        hashedPassword: hash,
        role: 'USER',
      },
    })

    const loginData = {
      email: newUser.email,
      password,
      redirectTo: `/member/${newUser.id}/register`,
    }

    await signIn('credentials', loginData)

    // Optional: Revalidate the path if needed
    revalidatePath('/')
  } catch (error: any) {
    if (error instanceof AuthError) {
      return { error: 'Something went wrong during signup' }
    }
    throw error
  }
}

// GET USER ID
export const getUserFromSession = async () => {
  const session = await getSession()
  if (session?.user?.id) {
    return session.user.id
  } else {
    console.error(Error)
    return null
  }
}
