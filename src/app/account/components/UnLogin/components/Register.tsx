'use client'
import { Form } from 'radix-ui'
import { Dispatch, SetStateAction, SubmitEventHandler } from 'react'
export default function Register({
  toggle,
}: {
  toggle: Dispatch<SetStateAction<'login' | 'register'>>
}) {
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="w-[400px] mx-auto my-5">
      <h1 className="text-center text-2xl font-bold mb-3">Become a member</h1>
      <p className="text-sm text-gray-300 text-center mb-3">Create your store profile!</p>
      <Form.Root onSubmit={handleSubmit}>
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
        <Form.Field name="username" className="mb-4">
          <div className="flex items-center">
            <Form.Label className="w-[80px] text-left mr-4">Username</Form.Label>
            <Form.Control asChild>
              <input
                className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                placeholder="Please enter email!"
              />
            </Form.Control>
          </div>
          {/* <Form.Message className="text-red-400" match={'valueMissing'}>
            Please enter your name
          </Form.Message> */}
          <Form.Message
            className="text-red-400"
            match={(value) => {
              return value.length < 5
            }}
          >
            Username is not vaild!
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
              return value.length < 8
            }}
          >
            Password is not vaild!
          </Form.Message>
        </Form.Field>

        <Form.Submit className="w-full h-[40px] bg-black rounded-xl text-white cursor-pointer mt-2">
          Join
        </Form.Submit>
      </Form.Root>
      <p className="text-center text-sm text-gray-300 mt-3">
        Already a member?
        <span
          className="underline text-orange-400 cursor-pointer"
          onClick={() => {
            toggle('login')
          }}
        >
          Sign in!
        </span>
      </p>
    </div>
  )
}
