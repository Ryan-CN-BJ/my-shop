import { Form } from 'radix-ui'
import { Dispatch, SetStateAction } from 'react'
export default function Register({
  toggle,
}: {
  toggle: Dispatch<SetStateAction<'login' | 'register'>>
}) {
  return (
    <div className="w-[400px] mx-auto my-5">
      <h1 className="text-center text-2xl font-bold mb-3">Register</h1>
      <p className="text-sm text-gray-300 text-center mb-3">
        Sign in to access an enhanced shopping experience
      </p>
      <Form.Root>
        <Form.Field name="email" className="flex mb-4 items-center">
          <Form.Label className="w-[80px] text-left mr-4">Email</Form.Label>
          <Form.Control className="flex-1 h-10 px-3" placeholder="Please enter email!" />
          <Form.Message match={'valueMissing'}>Emal</Form.Message>
        </Form.Field>
        <Form.Field name="password" className="flex mb-4 items-center">
          <Form.Label className="w-[80px] text-left mr-4">Password</Form.Label>
          <Form.Control
            className="flex-1 h-10 px-3"
            type="password"
            placeholder="Please enter password!"
          />
        </Form.Field>
        <Form.Submit className="w-full h-[40px] bg-black rounded-xl text-white cursor-pointer">
          Sign in
        </Form.Submit>
      </Form.Root>
      <p className="text-center text-sm text-gray-300 mt-3">
        Not a member?
        <span
          className="underline text-orange-400 cursor-pointer"
          onClick={() => {
            toggle('login')
          }}
        >
          Join us!
        </span>
      </p>
    </div>
  )
}
