'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/components/ui/form'
import CustomFormField from '../CustomFormField'
import SubmitButton from '../SubmitButton'
import { useState } from 'react'
import { UserFormValidation } from '@/lib/validation'
import { useRouter } from 'next/navigation'
// import { createUser } from '@/lib/actions/patient.actions'

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

const LoginInForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  // async function onSubmit({
  //   name,
  //   email,
  //   phone,
  // }: z.infer<typeof UserFormValidation>) {
  //   setIsLoading(true)

  //   try {
  //     const userData = { name, email, phone }
  //     const user = await createUser(userData)
  //     if (user) router.push(`/patients/${user.$id}/register`)
  //   } catch (error) {
  //     console.error(error)
  //   }

  //   // setIsLoading(false)
  // }

  return (
    <Form {...form}>
      <form className='space-y-6 flex-1'>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='email'
          label='Email'
          placeholder='JohnDoe@email.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='password'
          label='Password'
          placeholder='Password'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
        />

        <SubmitButton isLoading={isLoading}>Log In</SubmitButton>
      </form>
    </Form>
  )
}

export default LoginInForm
