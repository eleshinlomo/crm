import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ClientForm = () => {
  return (
    <div>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-4 text-sm " variant='outline' size='sm'>Add Client</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <DialogHeader>
          <DialogTitle>Add Client</DialogTitle>
          <DialogDescription>
            Add a new client to your CRM.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input
              id="company"
              defaultValue="Uber"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="example@email.com"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Mobile
            </Label>
            <Input
              id="username"
              defaultValue="2155555555"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              defaultValue="2155555555"
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="followup" className="text-right">
              Followup
            </Label>
            <Input
              id="followup"
              defaultValue="not contacted"
              className="col-span-3 text-black"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add Client</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default ClientForm
