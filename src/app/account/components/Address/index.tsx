import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Form } from 'radix-ui'
import { Plus } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
export default function Address() {
  const [open, setOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <div className="border rounded-sm h-40 cursor-pointer text-slate-600 relative">
            <p>New address</p>
            <div className="absolute left-3 bottom-2">
              <Plus width={14} />
            </div>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add address</AlertDialogTitle>
            <AlertDialogDescription className="w-full" asChild>
              <Form.Root className="w-full" ref={formRef}>
                <Form.Field name="name" className="mb-4">
                  <div className="flex items-center">
                    <Form.Label className="w-[60px] text-left mr-4">Name</Form.Label>
                    <Form.Control asChild>
                      <input
                        required
                        className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                        placeholder="Please enter email!"
                      />
                    </Form.Control>
                  </div>
                  <Form.Message className="text-red-400" match={'valueMissing'}>
                    Please enter your name
                  </Form.Message>
                </Form.Field>
                <Form.Field name="city" className="mb-2">
                  <div className="flex items-center">
                    <Form.Label className="w-[60px] text-left mr-4">City</Form.Label>
                    <Form.Control asChild>
                      <input
                        required
                        className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                        placeholder="Please enter city!"
                      />
                    </Form.Control>
                  </div>
                  <Form.Message className="text-red-400" match={'valueMissing'}>
                    Please enter your city!
                  </Form.Message>
                </Form.Field>
                <Form.Field name="address" className="mb-2">
                  <div className="flex items-center">
                    <Form.Label className="w-[60px] text-left mr-4">Address</Form.Label>
                    <Form.Control asChild>
                      <input
                        required
                        className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                        placeholder="Please enter address!"
                      />
                    </Form.Control>
                  </div>
                  <Form.Message className="text-red-400" match={'valueMissing'}>
                    Please enter your address!
                  </Form.Message>
                </Form.Field>
                <Form.Field name="phone" className="mb-2">
                  <div className="flex items-center">
                    <Form.Label className="w-[60px] text-left mr-4">Phone</Form.Label>
                    <Form.Control asChild>
                      <input
                        required
                        className="flex-1 h-10 px-3 outline-1 data-invalid:outline-red-400 rounded-sm"
                        placeholder="Please enter phone!"
                      />
                    </Form.Control>
                  </div>
                  <Form.Message className="text-red-400" match={'valueMissing'}>
                    Please enter your phone!
                  </Form.Message>
                </Form.Field>

                {/* <Form.Submit className="w-full h-[40px] bg-black rounded-xl text-white cursor-pointer mt-2">
                Sign in
              </Form.Submit> */}
              </Form.Root>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              onClick={async () => {
                formRef.current?.requestSubmit()
              }}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
