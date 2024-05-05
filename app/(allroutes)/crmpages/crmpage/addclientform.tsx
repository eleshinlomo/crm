import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { AddClientPage } from "./addclientpage"
  
  export function AddClientForm() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size='sm' variant="outline" 
          className="  py-5 bg-black hover:bg-black hover:text-white text-white
       rounded-2xl">
            Add Client</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
           <AddClientPage />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  