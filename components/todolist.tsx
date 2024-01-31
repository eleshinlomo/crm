"use client"
import {useState} from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, FaceIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { ScanFaceIcon, SmileIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"
import { dateFomatter } from './dateformatter'

const FormSchema = z.object({
  completionDate: z.date({
    required_error: "Date to complete task not selected.",
  }),
  task: z.string({
    required_error: "Name of Task to complete not specified.",
  }),
})

export const Todolist = ()=>{

  const [taskOne, setTaskOne] = useState<string | any>(()=>localStorage.getItem('task1') || 'No Task')
  const [dateOne, setDateOne] = useState<string | any>(()=>localStorage.getItem('date1') || 'No Task')
  const [status, setStatus] = useState<string | any>(()=>localStorage.getItem('status') || 'No Task')
  const [isCompleteTask, setIsCompleteTask] = useState<boolean | any>(()=>localStorage.getItem('iscompletetask')|| false)
  const [taskAvialable, setTaskAvailable] = useState<boolean | any>(()=>localStorage.getItem('taskavailable') || false)


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  //   Date Formatter
const dateformatter = (completionDate:any)=>{
    const formattedDate = dateFomatter(completionDate)
    return formattedDate
}

  const  onSubmit = (data: z.infer<typeof FormSchema>)=> {
    const {completionDate, task} = data
     
    // Handle Storage
    const formattedDate = dateFomatter(completionDate)
    localStorage.setItem('date1', JSON.stringify(formattedDate))
    localStorage.setItem('task1', JSON.stringify(task))
    const newTaskAvailable: any = true
    localStorage.setItem('taskavailable', newTaskAvailable)
    setTaskAvailable(true)
    const initialStatus = 'Uncompleted'
    localStorage.setItem('status', initialStatus)
    setIsCompleteTask(false)


   

    // Retrieve Values
    
        const task1Value = localStorage.getItem('task1')
        const date1Value = localStorage.getItem('date1')
        const statusValue = localStorage.getItem('status')
        // Update State
        setDateOne(date1Value)
        setTaskOne(task1Value)
        setStatus(statusValue)
    
  }



  const handleStatus = ()=>{
    
    const statusNewValue = 'Completed'
    const newIsCompleteTask: any = true
    // Handle States
    setStatus(statusNewValue)
    setIsCompleteTask(newIsCompleteTask)
    // Handle Stored Values
    localStorage.setItem('iscompletetask', newIsCompleteTask)
    localStorage.setItem('status', statusNewValue)
    
  }

//   Handle remove task
const removeTask = ()=>{
    localStorage.removeItem('task1')
    localStorage.removeItem('date1')
    localStorage.removeItem('status')
    localStorage.removeItem('iscompletetask')
    localStorage.removeItem('taskavailable')
    setTaskOne('')
    setDateOne('')
    setStatus('')
    setTaskAvailable(false)
    setIsCompleteTask(false)
    
  }





//   useEffect(()=>{
//     const date1: any = localStorage.getItem('date1')
//     const task1 = localStorage.getItem('task1')
//     if (task1 !== null || task1 !== undefined || task1 !== 'undefined' ){
//         setTaskOne(task1)
//     }else{
//         setTaskOne('No task for today')
//     }
//     if (date1 !== null || date1 !== undefined || date1 !== 'undefined' ){
        
//         const formattedDate = dateFomatterHandler(JSON.parse(date1))
//         // Check if date is valid and within the specified range
    
//         setDateOne(formattedDate);
    
//     }else{
//         setDateOne('No task for today')
//     }
//   }, [])

  

  return (
    <div className="px-4 flex flex-col justify-center items-center">
    
    <p className="text-center md:text-start font-extrabold text-lg py-8">
        Set Today&apos;s Task and Manage Productivity</p>
        
        {isCompleteTask ?
            <div className='flex'>
            <p className='text-center py-8 animate-bounce'>
                Hi Five for completing your task today</p>
            <FaceIcon className='h-8 w-8'/>
            </div>:null
            }

    <div className="md:flex flex-row justify-between gap-12  ">
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-8 md:py-0">
        <div>
        {/* Task Name */}
        <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={`Write task here`} {...field} type="text" className="text-black" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
       
        {/* Task Date */}
        <FormField
          control={form.control}
          name="completionDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription className='flex'>
                Stay commited to your task today. <SmileIcon />
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>

   
     
     {/* Task Display */}
     <div className={`grid grid-cols-2 md:grid-cols-4 gap-3`}>

    <div>
        <p className='font-extrabold '>Your Task</p>
        <p className={`border border-r-red-400 font-semibold  ${isCompleteTask? 
            'text-green-800': 'text-red-800'}`}>{taskOne? taskOne:null}</p>
    </div>

    <div>
        <p className='font-extrabold '>Completion Date</p>
        <p className={`border border-r-red-400 font-semibold  ${isCompleteTask? 
            'text-green-800': 'text-red-800'}`}>{dateOne? dateOne : null}</p>
    </div>
    
    <div>
    <p className='font-extrabold'>Status</p>
    <p className={`border border-r-red-400 font-semibold  ${isCompleteTask? 
            'text-green-800': 'text-red-800'}`}>{status? status: null}</p>
    </div>
    
    <div className='mt-4'>
    {taskAvialable ?
    <Button onClick={isCompleteTask? removeTask : handleStatus}>
        {isCompleteTask ? 'Remove Task': 'Complete Task'}
    </Button>:
    <Button>No Task</Button>
    } 
    </div>

    </div>
    
    {/* End of task display */}

    </div>
    </div>
  )
}
