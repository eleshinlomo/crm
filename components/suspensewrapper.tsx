import CodePage from "@/app/(allroutes)/(protectedroutes)/dashboard/(writing bots)/code/page";
import GeneralPage from "@/app/(allroutes)/(protectedroutes)/dashboard/conversationtools/general/page";
import CancelPage from "@/app/(allroutes)/(protectedroutes)/dashboard/purchase/cancelpurchasepage/page";
import SuccessPurchasePage from "@/app/(allroutes)/(protectedroutes)/dashboard/purchase/successpurchasepage/page";
import TodoListPage from "@/app/(allroutes)/(protectedroutes)/dashboard/todolistpage/page";
import { Suspense } from "react";

interface SuspenseProps {
    children: React.ReactNode
    fallback: React.ReactNode
}

export const SuspenseComponent = ({fallback, children}: SuspenseProps)=>{
    <Suspense>
        {children}
    </Suspense>
}

