'use client'
import { Form } from 'radix-ui'
import { type Dispatch, type SetStateAction, SubmitEventHandler } from 'react'
import { loginAction } from '@/actions/users'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
export default function Login({
  toggle,
}: {
  toggle: Dispatch<SetStateAction<'login' | 'register'>>
}) {
  const router = useRouter()
  const handleLogin: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    console.log(formData.get('email'))
    const res = await loginAction(email, password)
    console.log(res, 'res000')
    if (res.status === 401) {
      toast.error('', {
        position: 'top-center',
        description: 'Login failed！',
        classNames: {
          description: '!text-red-900',
        },
      })
    } else {
      toast.success('', {
        description: 'Login success',
        position: 'top-center',
        classNames: {
          description: '!text-green',
        },
      })
      router.refresh()
    }
  }
  return (
    <div className="w-[400px] mx-auto my-5">
      <h1 className="text-center text-2xl font-bold mb-3">Welcome</h1>
      <p className="text-sm text-gray-300 text-center mb-3">
        Sign in to access an enhanced shopping experience
      </p>
      <Form.Root onSubmit={handleLogin}>
        <Form.Field name="email" className="mb-4">
          <div className="flex items-center">
            <Form.Label className="w-[80px] text-left mr-4">Email</Form.Label>
            <Form.Control asChild>
              <input
                required
                className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                placeholder="Please enter email!"
              />
            </Form.Control>
          </div>
          <Form.Message className="text-red-400" match={'valueMissing'}>
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-red-400"
            match={(value) => {
              return value.length < 5
            }}
          >
            Mail is not vaild!
          </Form.Message>
        </Form.Field>

        <Form.Field name="password" className="mb-2">
          <div className="flex items-center">
            <Form.Label className="w-[80px] text-left mr-4">Password</Form.Label>
            <Form.Control asChild>
              <input
                required
                className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                type="password"
                placeholder="Please enter password!"
              />
            </Form.Control>
          </div>
          <Form.Message className="text-red-400" match={'valueMissing'}>
            Please enter your password!
          </Form.Message>
          <Form.Message
            className="text-red-400"
            match={(value) => {
              return value.length < 3
            }}
          >
            Password is not vaild!
          </Form.Message>
        </Form.Field>

        <Form.Submit className="w-full h-[40px] bg-black rounded-xl text-white cursor-pointer mt-2">
          Sign in
        </Form.Submit>
      </Form.Root>
      <p className="text-center text-sm text-gray-300 mt-3">
        Not a member?
        <span
          className="underline text-orange-400 cursor-pointer"
          onClick={() => {
            toggle('register')
          }}
        >
          Join us!
        </span>
      </p>
    </div>
  )
}
